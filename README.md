# PT Nuraya Digital Nusantara

> **"Membangun makna, menyalakan harapan."**

**Project Nuraya** is a digital transformation company built on a simple premise: Technology should solve real problems, not create new ones. We prioritize solid engineering over gimmicks, focusing on efficiency, scalability, and human impact.

### Our Core Focus

*   **Cloud & Infrastructure Optimization** (Proxmox, Docker, Traefik)
*   **Backend Engineering** (Golang, Kafka, High-Performance Systems)
*   **Digital Transformation** (Custom Solutions for Real-World Efficiency)

### Tech Stack

Built with precision using:
*   **Framework:** Next.js (App Router) + TypeScript
*   **CMS:** Payload (admin panel at `/admin`, content in PostgreSQL)
*   **Styling:** Tailwind CSS (Clean & Responsive)
*   **Infrastructure:** Self-Hosted on Proxmox LXC + Cloudflare Tunnel (Docker)

### Development

```bash
cp .env.example .env          # then set PAYLOAD_SECRET
docker compose up -d db       # PostgreSQL on 127.0.0.1:5432
npm install
npm run dev                   # http://localhost:3000, admin at /admin
```

The first visit to `/admin` asks you to create the first admin user.

In development Payload pushes schema changes straight to the database. Before
shipping a change to a collection, generate a migration and commit it:

```bash
npm run migrate:create -- <name>
npm run generate:types        # refreshes src/payload-types.ts
```

### Project Layout

*   `src/app/(id)`, `src/app/en`: public pages, one root layout per language
*   `src/app/(payload)`: Payload admin and REST API (generated, do not edit)
*   `src/collections`: content models (Posts, Categories, Media, Users)
*   `src/migrations`: database migrations, applied automatically on boot in production

### Blog Workflow

1. Write an article under **Artikel** in `/admin` and save it as a draft.
2. Use the **Preview** button to see the draft on the real page.
3. Click **Publish**. It appears on `/blog` and in `/sitemap.xml` right away, no rebuild needed.

### Deployment

```bash
cp .env.example .env          # set PAYLOAD_SECRET, POSTGRES_PASSWORD, NEXT_PUBLIC_SERVER_URL
docker compose up -d --build
```

Point the Cloudflare Tunnel at port `3000`. Back up the `pgdata` (database) and
`media` (uploads) volumes.

---
[**Visit Official Website**](https://projectnuraya.id)
---
