import type { Access } from 'payload'

/** Anyone, including anonymous visitors. */
export const anyone: Access = () => true

/** Signed-in admin users only. */
export const authenticated: Access = ({ req: { user } }) => Boolean(user)

/**
 * Signed-in users see everything; visitors only see published documents.
 * Used on collections with drafts so an unpublished post never leaks through
 * the public REST API.
 */
export const authenticatedOrPublished: Access = ({ req: { user } }) => {
  if (user) return true
  return { _status: { equals: 'published' } }
}
