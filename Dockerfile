# Production image for the site + Payload admin.
# Build: docker compose build   Run: docker compose up -d

FROM node:22-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Inlined at build time, so it must be known here rather than at runtime.
ARG NEXT_PUBLIC_SERVER_URL=https://projectnuraya.id
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV NEXT_TELEMETRY_DISABLED=1
# No database is needed here: pages that read from Payload render per request.
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Uploaded media lives here; mount a volume so it survives redeploys.
RUN mkdir -p media && chown nextjs:nodejs media

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Pending database migrations run automatically when the server boots.
CMD ["node", "server.js"]
