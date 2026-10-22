/**
 * Indonesian strings for admin packages that ship without them. Payload's own
 * UI already has Indonesian; the SEO plugin and the Lexical editor do not, so
 * without these the admin shows raw keys such as `lexical:upload:label`.
 *
 * Keys mirror each package's English file; check them again after upgrading.
 */
export const idTranslations = {
  'plugin-seo': {
    almostThere: 'Hampir',
    autoGenerate: 'Buat otomatis',
    bestPractices: 'panduan praktik terbaik',
    characterCount: '{{current}}/{{minLength}}-{{maxLength}} karakter, ',
    charactersLeftOver: 'kelebihan {{characters}}',
    charactersToGo: 'kurang {{characters}} lagi',
    charactersTooMany: 'kelebihan {{characters}}',
    checksPassing: '{{current}}/{{max}} pemeriksaan lolos',
    good: 'Bagus',
    imageAutoGenerationTip: 'Buat otomatis akan memakai gambar sampul yang dipilih.',
    lengthTipDescription:
      'Sebaiknya {{minLength}} sampai {{maxLength}} karakter. Untuk tips menulis deskripsi meta, lihat ',
    lengthTipTitle:
      'Sebaiknya {{minLength}} sampai {{maxLength}} karakter. Untuk tips menulis judul meta, lihat ',
    missing: 'Belum diisi',
    noImage: 'Tanpa gambar',
    preview: 'Pratinjau',
    previewDescription: 'Tampilan di hasil pencarian bisa sedikit berbeda.',
    tooLong: 'Terlalu panjang',
    tooShort: 'Terlalu pendek',
  },
  lexical: {
    general: {
      placeholder: "Mulai menulis, atau ketik '/' untuk perintah...",
      slashMenuBasicGroupLabel: 'Dasar',
      slashMenuListGroupLabel: 'Daftar',
      toolbarItemsActive: '{{count}} aktif',
    },
    align: {
      alignCenterLabel: 'Rata tengah',
      alignJustifyLabel: 'Rata kiri-kanan',
      alignLeftLabel: 'Rata kiri',
      alignRightLabel: 'Rata kanan',
    },
    blockquote: { label: 'Kutipan' },
    blocks: {
      inlineBlocks: {
        create: 'Buat {{label}}',
        edit: 'Ubah {{label}}',
        label: 'Blok sebaris',
        remove: 'Hapus {{label}}',
      },
      label: 'Blok',
    },
    checklist: { label: 'Daftar centang' },
    heading: { label: 'Judul {{headingLevel}}' },
    horizontalRule: { label: 'Garis pemisah' },
    indent: { decreaseLabel: 'Kurangi indentasi', increaseLabel: 'Tambah indentasi' },
    link: { label: 'Tautan', loadingWithEllipsis: 'Memuat...' },
    orderedList: { label: 'Daftar bernomor' },
    paragraph: { label: 'Paragraf', label2: 'Teks biasa' },
    relationship: { label: 'Tautkan dokumen' },
    textState: { defaultStyle: 'Gaya bawaan' },
    unorderedList: { label: 'Daftar poin' },
    upload: { label: 'Gambar / berkas' },
  },
}
