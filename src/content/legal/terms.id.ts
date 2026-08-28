import { company, coveredApps, legalEffectiveDateLabel } from '../../config/company'

import type { LegalDocument } from './types'

export const termsId: LegalDocument = {
  locale: 'id',
  title: 'Ketentuan Layanan',
  intro: `Ketentuan yang mengatur hubungan antara Anda dan ${company.legalName} dalam penggunaan situs dan aplikasi kami.`,
  lastUpdated: `Terakhir diperbarui: ${legalEffectiveDateLabel.id}`,
  languageSwitch: { label: 'Read this page in English', to: '/en/terms' },

  sections: [
    {
      heading: '1. Definisi dan Para Pihak',
      blocks: [
        {
          kind: 'definitions',
          items: [
            {
              term: '"Kami"',
              value: `${company.legalName}, ${company.entityType}, berkedudukan di ${company.addressLine}, dengan Nomor Induk Berusaha ${company.nib}.`,
            },
            {
              term: '"Anda"',
              value: 'Setiap orang yang mengakses situs kami atau menggunakan aplikasi kami.',
            },
            {
              term: '"Layanan"',
              value: `Situs [${company.website}](${company.website}) beserta seluruh aplikasi yang kami terbitkan dengan nama ${company.brandName}, sebagaimana dirinci pada bagian 3.`,
            },
            {
              term: '"Konten Anda"',
              value: 'Data dan materi yang Anda masukkan, unggah, atau hasilkan melalui Layanan.',
            },
          ],
        },
      ],
    },

    {
      heading: '2. Penerimaan Ketentuan dan Kapasitas Hukum',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Dengan mengakses atau menggunakan Layanan, Anda menyatakan telah membaca, memahami, dan terikat pada Ketentuan ini beserta [Kebijakan Privasi](/privacy) kami. Apabila Anda tidak menyetujuinya, mohon tidak menggunakan Layanan.',
        },
        {
          kind: 'paragraph',
          text: 'Anda menyatakan telah cakap secara hukum untuk mengikatkan diri pada perjanjian ini. Apabila Anda menggunakan Layanan untuk dan atas nama suatu organisasi, Anda menyatakan berwenang mengikat organisasi tersebut.',
        },
        {
          kind: 'paragraph',
          text: 'Apabila Anda belum dewasa menurut hukum yang berlaku, penggunaan Layanan hanya diperkenankan dengan persetujuan dan dalam pengawasan orang tua atau wali Anda.',
        },
      ],
    },

    {
      heading: '3. Layanan yang Dicakup',
      blocks: [
        { kind: 'paragraph', text: 'Ketentuan ini berlaku untuk:' },
        {
          kind: 'list',
          items: [
            `Situs perusahaan [${company.website}](${company.website}).`,
            ...coveredApps.map(
              (app) => `Aplikasi **${app.name}** — [${app.url}](${app.url}). ${app.descriptionId}`,
            ),
          ],
        },
        {
          kind: 'paragraph',
          text: 'Layanan profesional seperti pengembangan web, konsultasi TI, dan solusi data yang kami tawarkan melalui situs ini diatur dalam perjanjian tersendiri yang disepakati secara terpisah. Ketentuan ini tidak menggantikan perjanjian tersebut.',
        },
      ],
    },

    {
      heading: '4. Akun dan Google Sign-In',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Aplikasi kami tidak menyediakan pendaftaran dengan kata sandi tersendiri. Akun dibuat dan diakses melalui **Google Sign-In**, menggunakan Akun Google yang Anda miliki.',
        },
        {
          kind: 'paragraph',
          text: 'Karena itu, keamanan akun Anda pada Layanan bergantung pada keamanan Akun Google Anda. Anda bertanggung jawab menjaga kerahasiaan kredensial Akun Google Anda dan atas seluruh aktivitas yang terjadi melalui akun tersebut. Beri tahu kami segera apabila Anda mengetahui adanya penggunaan tanpa izin.',
        },
        {
          kind: 'paragraph',
          text: 'Data yang kami terima dari Google dan cara kami memperlakukannya diuraikan dalam [Kebijakan Privasi](/privacy) kami. Anda dapat mencabut akses kami kapan saja melalui [halaman izin Akun Google](https://myaccount.google.com/permissions). Pencabutan akses dapat mengakibatkan Anda tidak lagi dapat masuk ke Layanan.',
        },
        {
          kind: 'paragraph',
          text: 'Anda wajib memberikan keterangan yang benar dan tidak menyamar sebagai orang atau pihak lain.',
        },
      ],
    },

    {
      heading: '5. Penggunaan yang Dilarang',
      blocks: [
        { kind: 'paragraph', text: 'Anda dilarang menggunakan Layanan untuk:' },
        {
          kind: 'list',
          items: [
            'Melakukan perbuatan yang melanggar peraturan perundang-undangan Republik Indonesia.',
            'Mengunggah atau menyebarkan materi yang melanggar hukum, memfitnah, mengandung ujaran kebencian, kesusilaan, atau melanggar hak pihak lain.',
            'Melanggar hak kekayaan intelektual atau hak privasi orang lain.',
            'Memasukkan data pribadi orang lain tanpa dasar yang sah.',
            'Mengganggu, membebani secara tidak wajar, atau mencoba memperoleh akses tanpa izin ke sistem, jaringan, atau akun pengguna lain.',
            'Melakukan pengambilan data secara otomatis (scraping), rekayasa balik, atau upaya melewati pembatasan teknis Layanan.',
            'Menggunakan Layanan untuk mengirim spam atau perangkat lunak berbahaya.',
          ],
        },
      ],
    },

    {
      heading: '6. Konten Anda',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Konten Anda tetap menjadi milik Anda. Kami tidak mengklaim kepemilikan atasnya.',
        },
        {
          kind: 'paragraph',
          text: 'Anda memberikan kepada kami lisensi non-eksklusif, bebas royalti, dan terbatas **semata-mata untuk menyimpan, menampilkan, memproses, dan mencadangkan Konten Anda sepanjang diperlukan untuk mengoperasikan Layanan bagi Anda**. Lisensi ini tidak mencakup penggunaan Konten Anda untuk promosi, untuk melatih model kecerdasan buatan, atau untuk tujuan lain apa pun, dan berakhir ketika Konten Anda dihapus.',
        },
        {
          kind: 'paragraph',
          text: 'Anda menjamin bahwa Anda berhak memasukkan Konten Anda ke dalam Layanan. Apabila Konten Anda memuat data pribadi orang lain — misalnya nama dan status bacaan anggota kelompok pada Tilawah Tracker — Anda bertanggung jawab memastikan adanya dasar yang sah untuk memproses data tersebut, termasuk persetujuan orang tua atau wali apabila menyangkut anak.',
        },
      ],
    },

    {
      heading: '7. Hak Kekayaan Intelektual',
      blocks: [
        {
          kind: 'paragraph',
          text: `Seluruh perangkat lunak, desain, antarmuka, teks, grafik, dan materi lain pada Layanan, selain Konten Anda, merupakan milik ${company.legalName} atau pemberi lisensinya, dan dilindungi Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta serta ketentuan lain yang berlaku.`,
        },
        {
          kind: 'paragraph',
          text: `Nama "${company.brandName}", logo kami, dan merek terkait tidak boleh digunakan tanpa izin tertulis dari kami. Rincian lebih lanjut tercantum pada [Pemberitahuan Hukum](/legal) kami.`,
        },
        {
          kind: 'paragraph',
          text: 'Layanan kami menggunakan komponen perangkat lunak sumber terbuka yang tunduk pada lisensinya masing-masing.',
        },
      ],
    },

    {
      heading: '8. Ketersediaan Layanan dan Perubahannya',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Sebagian Layanan kami saat ini disediakan tanpa biaya. Kami tidak menjanjikan bahwa Layanan akan selamanya tersedia tanpa biaya.',
        },
        {
          kind: 'paragraph',
          text: 'Kami dapat mengubah, menambah, membatasi, atau menghentikan sebagian atau seluruh fitur Layanan. Untuk perubahan yang secara material merugikan Anda, atau penghentian Layanan, kami akan berupaya memberitahukannya terlebih dahulu melalui Layanan atau email, dan memberi Anda kesempatan yang wajar untuk mengunduh Konten Anda.',
        },
        {
          kind: 'paragraph',
          text: 'Kami tidak menjamin Layanan bebas dari gangguan. Pemeliharaan terjadwal maupun kejadian di luar kendali kami dapat menyebabkan Layanan tidak dapat diakses untuk sementara.',
        },
      ],
    },

    {
      heading: '9. Penangguhan dan Pengakhiran',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Anda dapat berhenti menggunakan Layanan kapan saja, dan meminta penghapusan data Anda sesuai prosedur pada [Kebijakan Privasi](/privacy).',
        },
        {
          kind: 'paragraph',
          text: 'Kami dapat menangguhkan atau mengakhiri akses Anda apabila Anda melanggar Ketentuan ini, apabila penggunaan Anda menimbulkan risiko hukum atau keamanan, atau apabila diwajibkan oleh hukum. Kecuali dalam hal pelanggaran berat atau kewajiban hukum yang mengharuskan tindakan segera, kami akan memberitahukan alasannya dan memberi Anda kesempatan untuk memperbaiki.',
        },
        {
          kind: 'paragraph',
          text: 'Ketentuan mengenai hak kekayaan intelektual, batasan tanggung jawab, ganti rugi, serta hukum yang berlaku tetap berlaku setelah pengakhiran.',
        },
      ],
    },

    {
      heading: '10. Penafian Jaminan',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Sepanjang diperkenankan oleh hukum, Layanan disediakan **"sebagaimana adanya" dan "sebagaimana tersedia"**. Kami tidak memberikan jaminan bahwa Layanan akan bebas dari kesalahan, selalu tersedia, atau memenuhi kebutuhan tertentu Anda.',
        },
        {
          kind: 'paragraph',
          text: 'Kami tetap berkewajiban menyediakan Layanan dengan itikad baik dan kehati-hatian yang wajar.',
        },
      ],
    },

    {
      heading: '11. Batasan Tanggung Jawab',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Sepanjang diperkenankan oleh hukum, kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial, termasuk kehilangan keuntungan, kehilangan peluang usaha, atau kehilangan data yang timbul dari penggunaan atau ketidakmampuan menggunakan Layanan.',
        },
        {
          kind: 'paragraph',
          text: 'Untuk Layanan yang disediakan tanpa biaya, tanggung jawab kami terbatas pada perbaikan Layanan atau pemulihan data sepanjang dimungkinkan secara teknis.',
        },
        {
          kind: 'note',
          text: 'Pembatasan pada bagian 10 dan 11 tidak berlaku sepanjang dilarang oleh peraturan perundang-undangan, termasuk Pasal 18 Undang-Undang No. 8 Tahun 1999 tentang Perlindungan Konsumen, dan tidak membatasi tanggung jawab kami atas kesengajaan, kelalaian berat, atau hal lain yang menurut hukum tidak dapat dibatasi.',
        },
      ],
    },

    {
      heading: '12. Ganti Rugi',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Anda setuju untuk membebaskan kami dari tuntutan pihak ketiga yang timbul dari pelanggaran Anda atas Ketentuan ini, dari Konten Anda, atau dari penggunaan Layanan oleh Anda secara melawan hukum, sepanjang tuntutan tersebut bukan disebabkan oleh kesalahan kami.',
        },
      ],
    },

    {
      heading: '13. Hukum yang Berlaku dan Penyelesaian Sengketa',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Ketentuan ini diatur oleh dan ditafsirkan menurut hukum Republik Indonesia.',
        },
        {
          kind: 'paragraph',
          text: `Apabila timbul sengketa, para pihak terlebih dahulu menyelesaikannya secara musyawarah dengan itikad baik dalam jangka waktu ${company.disputeNegotiationDays} (tiga puluh) hari kalender sejak pemberitahuan tertulis dari salah satu pihak.`,
        },
        {
          kind: 'paragraph',
          text: `Apabila musyawarah tidak mencapai kesepakatan, sengketa diselesaikan melalui **${company.courtVenue}**. Ketentuan ini tidak mengurangi hak Anda selaku konsumen untuk menempuh upaya penyelesaian sengketa yang tersedia menurut peraturan perundang-undangan, termasuk melalui Badan Penyelesaian Sengketa Konsumen.`,
        },
      ],
    },

    {
      heading: '14. Perubahan Ketentuan',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Kami dapat memperbarui Ketentuan ini. Untuk perubahan yang material, kami akan memberitahukannya melalui Layanan atau email sebelum perubahan berlaku, disertai tanggal berlaku yang baru.',
        },
        {
          kind: 'paragraph',
          text: 'Penggunaan Layanan setelah tanggal berlaku dianggap sebagai persetujuan Anda atas Ketentuan yang diperbarui. Apabila Anda tidak menyetujuinya, Anda dapat berhenti menggunakan Layanan dan meminta penghapusan data Anda.',
        },
      ],
    },

    {
      heading: '15. Kontak',
      blocks: [
        {
          kind: 'definitions',
          items: [
            { term: 'Penyelenggara Layanan', value: company.legalName },
            { term: 'Alamat', value: company.addressLine },
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
          ],
        },
      ],
    },
  ],

  callout: {
    title: 'Ketentuan yang Menggambarkan Layanan Sebenarnya',
    text: 'Ketentuan ini kami tulis agar sesuai dengan apa yang benar-benar kami jalankan — termasuk kenyataan bahwa akun dibuat melalui Google Sign-In, dan bahwa Konten Anda tetap milik Anda.',
  },
  contactPrompt: `Ada pertanyaan tentang ketentuan ini? Hubungi kami di [${company.email}](mailto:${company.email})`,
  backHome: 'Kembali ke Beranda',
}
