import config from '@payload-config'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

/**
 * Target of the admin "Preview" button. Only a signed-in admin user may turn
 * on draft mode, which makes post pages render unpublished drafts.
 */
export async function GET(request: Request) {
  const path = new URL(request.url).searchParams.get('path') ?? ''
  // Only same-site paths, so this cannot be used as an open redirect.
  if (!path.startsWith('/') || path.startsWith('//')) {
    return new Response('Invalid preview path', { status: 400 })
  }

  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: request.headers })
  if (!user) {
    return new Response('Sign in to the admin panel to preview drafts', { status: 403 })
  }

  ;(await draftMode()).enable()
  redirect(path)
}
