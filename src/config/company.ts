/**
 * Single source of truth for company and legal facts.
 *
 * Every legal page, the footer and the contact form read from here. Before this
 * existed the contact address was retyped as a literal in a dozen places, which
 * is how a stale privacy contact address survived on the Legal Notice long after
 * every other page had moved to `hello@`.
 */

/** Registered address. Only city and province are published by design. */
export const address = {
  city: 'Malang',
  province: 'Jawa Timur',
  country: 'Indonesia',
} as const

export const addressLine = `${address.city}, ${address.province}, ${address.country}`

export const company = {
  /** Legal entity name as registered with Kemenkumham. */
  legalName: 'PT Nuraya Digital Nusantara',
  /**
   * Public brand, and the app name configured on the Google OAuth consent
   * screen. Google requires this string to appear on the homepage, so it must
   * stay in sync with the visible copy in Hero, Navbar and the page title.
   */
  brandName: 'Project Nuraya',
  entityType: 'Perseroan Terbatas Perorangan',
  entityTypeEn: 'Individual Limited Liability Company',
  /** Nomor Induk Berusaha, issued via OSS. */
  nib: '1401260091258',
  address,
  addressLine,
  email: 'hello@projectnuraya.id',
  website: 'https://projectnuraya.id',
  ahuCertificateUrl:
    'https://ptp.ahu.go.id/sertifikat?id=686e322971635ffa733f6966a9e546eb:2da925ddd9d2909e1ba364ee1d3dba84',
  github: 'https://github.com/projectnuraya',
  /** Forum for disputes that survive the good-faith negotiation window. */
  courtVenue: 'Pengadilan Negeri Malang',
  courtVenueEn: 'Malang District Court (Pengadilan Negeri Malang)',
  /** Days of good-faith negotiation required before either party may litigate. */
  disputeNegotiationDays: 30,
} as const

/** Effective date of the current legal documents, ISO 8601. */
export const legalEffectiveDate = '2026-08-28'

const idDate = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})
const enDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export const legalEffectiveDateLabel = {
  id: idDate.format(new Date(`${legalEffectiveDate}T00:00:00Z`)),
  en: enDate.format(new Date(`${legalEffectiveDate}T00:00:00Z`)),
} as const

/**
 * OAuth scopes requested across all our applications. All three are
 * non-sensitive, so no scope verification or security assessment applies —
 * only brand verification for the consent screen.
 */
export const googleScopes = ['openid', 'email', 'profile'] as const

/** Google account fields we actually receive from those scopes. */
export const googleUserDataFields = {
  id: [
    'Pengenal akun Google (Google Account ID / sub)',
    'Alamat email dan status verifikasinya',
    'Nama tampilan',
    'URL foto profil',
  ],
  en: [
    'Google Account identifier (sub)',
    'Email address and its verification status',
    'Display name',
    'Profile picture URL',
  ],
} as const

/** Applications covered by these legal documents. */
export const coveredApps = [
  {
    name: 'Tilawah Tracker',
    url: 'https://tilawah-tracker.projectnuraya.id/',
    privacyPolicyUrl: 'https://tilawah-tracker.projectnuraya.id/privacy-policy',
    descriptionId:
      'Koordinasi tilawah bersama: pembagian juz mingguan, pencatatan status bacaan peserta, dan rekap kelompok.',
    descriptionEn:
      'Group Qur’an reading coordination: weekly juz assignments, participant progress tracking, and group recaps.',
    usesGoogleSignIn: true,
  },
] as const

/**
 * Third parties that process personal data on our behalf.
 *
 * This list must describe what is running today, not what is planned. If a
 * managed database or hosted auth provider is ever adopted, add it here AND
 * update sections 5, 8 and 9 of the privacy policy — and note that Article
 * 21(2) of Law 27/2022 requires telling users *before* such a change takes
 * effect, not after.
 */
export const subProcessors = [
  {
    id: 'google',
    name: 'Google LLC',
    country: 'Amerika Serikat',
    countryEn: 'United States',
    purposeId: 'Autentikasi pengguna melalui Google Sign-In.',
    purposeEn: 'User authentication via Google Sign-In.',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare, Inc.',
    country: 'Amerika Serikat',
    countryEn: 'United States',
    purposeId:
      'Jaringan pengiriman konten dan tunnel yang meneruskan permintaan ke server kami; mencatat alamat IP untuk keamanan jaringan.',
    purposeEn:
      'Content delivery network and tunnel that routes requests to our servers; logs IP addresses for network security.',
  },
  {
    id: 'google-fonts',
    name: 'Google Fonts',
    country: 'Amerika Serikat',
    countryEn: 'United States',
    purposeId:
      'Pengiriman berkas font ke peramban Anda. Permintaan font meneruskan alamat IP Anda ke Google.',
    purposeEn:
      'Delivery of font files to your browser. Font requests transmit your IP address to Google.',
  },
] as const

/**
 * Where things physically live.
 *
 * Everything — application runtime and the database holding personal data — is
 * on our own Proxmox hardware in Indonesia. No managed database or third-party
 * cloud holds user data today.
 */
export const dataResidency = {
  appHostingId:
    'Aplikasi kami berjalan pada server milik kami sendiri yang ditempatkan di Indonesia (infrastruktur Proxmox yang kami kelola langsung).',
  appHostingEn:
    'Our applications run on our own servers located in Indonesia (self-managed Proxmox infrastructure).',
  databaseId:
    'Basis data yang memuat data akun dan data aplikasi Anda — termasuk data yang kami terima dari Akun Google Anda — berada pada server yang sama di Indonesia. Kami tidak menggunakan basis data terkelola pihak ketiga.',
  databaseEn:
    'The database holding your account and application data — including what we receive from your Google Account — sits on those same servers in Indonesia. We do not use a third-party managed database.',
} as const
