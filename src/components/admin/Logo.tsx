/**
 * Brand wordmark on the admin login and sign-up screens, replacing Payload's.
 * Both variants ship and CSS in `(payload)/custom.scss` shows the one matching
 * the admin theme.
 */
export function Logo() {
  return (
    <div className='nuraya-admin-logo'>
      <img
        src='/images/nuraya_logo_light.svg'
        alt='Project Nuraya'
        className='nuraya-admin-logo__light'
      />
      <img
        src='/images/nuraya_logo_dark.svg'
        alt=''
        aria-hidden='true'
        className='nuraya-admin-logo__dark'
      />
    </div>
  )
}
