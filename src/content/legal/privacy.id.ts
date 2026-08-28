import {
  company,
  coveredApps,
  dataResidency,
  googleScopes,
  googleUserDataFields,
  legalEffectiveDateLabel,
  subProcessors,
} from '../../config/company'

import type { LegalDocument } from './types'

const scopeList = googleScopes.join(', ')

export const privacyId: LegalDocument = {
  locale: 'id',
  title: 'Kebijakan Privasi',
  intro:
    'Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda, termasuk data yang kami terima dari Google ketika Anda masuk menggunakan Akun Google.',
  lastUpdated: `Terakhir diperbarui: ${legalEffectiveDateLabel.id}`,
  languageSwitch: { label: 'Read this page in English', to: '/en/privacy' },

  sections: [
    {
      heading: '1. Identitas Pengendali Data Pribadi',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Pengendali Data Pribadi atas pemrosesan yang diuraikan dalam kebijakan ini adalah:',
        },
        {
          kind: 'definitions',
          items: [
            { term: 'Nama badan hukum', value: company.legalName },
            { term: 'Bentuk badan hukum', value: company.entityType },
            { term: 'Nomor Induk Berusaha (NIB)', value: company.nib },
            { term: 'Alamat', value: company.addressLine },
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
            { term: 'Situs web', value: `[${company.website}](${company.website})` },
            {
              term: 'Sertifikat pendirian',
              value: `[Lihat sertifikat di AHU Kemenkumham](${company.ahuCertificateUrl})`,
            },
          ],
        },
        {
          kind: 'paragraph',
          text: 'Seluruh pertanyaan, permintaan pelaksanaan hak, dan pengaduan terkait data pribadi dapat Anda sampaikan ke alamat email di atas.',
        },
      ],
    },

    {
      heading: '2. Ruang Lingkup',
      blocks: [
        {
          kind: 'paragraph',
          text: `Kebijakan ini berlaku untuk situs [${company.website}](${company.website}) dan untuk aplikasi berikut yang diterbitkan oleh ${company.legalName} dengan nama aplikasi **${company.brandName}** pada layar persetujuan (consent screen) Google:`,
        },
        {
          kind: 'list',
          items: coveredApps.map(
            (app) => `**${app.name}** — ${app.descriptionId} [${app.url}](${app.url})`,
          ),
        },
        {
          kind: 'paragraph',
          text: `Tilawah Tracker memiliki pemberitahuan privasi tersendiri yang merinci pemrosesan khusus aplikasi tersebut: [${coveredApps[0].privacyPolicyUrl}](${coveredApps[0].privacyPolicyUrl}). Pemberitahuan itu bersifat melengkapi kebijakan ini. Apabila terdapat pertentangan, ketentuan dalam kebijakan ini yang berlaku.`,
        },
        {
          kind: 'paragraph',
          text: 'Apabila kami menerbitkan aplikasi baru yang menggunakan Akun Google Anda, kami akan menambahkannya ke daftar di atas dan memberitahukan perubahan tersebut sebelum pemrosesan dimulai.',
        },
      ],
    },

    {
      heading: '3. Dasar Pemrosesan Data Pribadi',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Sesuai Pasal 20 Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, kami memproses data pribadi Anda berdasarkan:',
        },
        {
          kind: 'list',
          items: [
            '**Persetujuan Anda** — diberikan secara tegas ketika Anda menyetujui layar persetujuan Google dan memilih untuk masuk ke aplikasi kami.',
            '**Pelaksanaan perjanjian** — pemrosesan yang diperlukan untuk menyediakan layanan yang Anda minta, sebagaimana diatur dalam Ketentuan Layanan kami.',
            '**Kepentingan sah** — menjaga keamanan sistem, mencegah penyalahgunaan, dan memperbaiki kesalahan teknis, sepanjang tidak melebihi hak dan kepentingan Anda.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Anda dapat menarik persetujuan sewaktu-waktu. Penarikan persetujuan tidak membatalkan keabsahan pemrosesan yang telah dilakukan sebelumnya.',
        },
      ],
    },

    {
      heading: '4. Data yang Kami Kumpulkan',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Kami membedakan data berdasarkan sumbernya.',
        },
        {
          kind: 'paragraph',
          text: '**a. Data dari Akun Google Anda.** Diuraikan lengkap pada bagian 5 di bawah.',
        },
        {
          kind: 'paragraph',
          text: '**b. Data yang Anda masukkan sendiri.** Data yang Anda isi ketika menggunakan aplikasi kami — misalnya nama kelompok, pembagian juz, dan status bacaan pada Tilawah Tracker — serta isi pesan yang Anda kirimkan kepada kami.',
        },
        {
          kind: 'paragraph',
          text: '**c. Data teknis.** Situs ini adalah situs statis dan tidak memiliki kode server yang mencatat data pengunjung. Namun, sebagaimana pada setiap layanan internet, permintaan Anda melewati lapisan jaringan dan hosting yang mencatat alamat IP, jenis peramban, dan waktu akses untuk keperluan keamanan dan pencegahan penyalahgunaan. Pencatatan ini dilakukan oleh penyedia jaringan kami, bukan oleh kode aplikasi kami.',
        },
        {
          kind: 'paragraph',
          text: '**d. Penyimpanan lokal peramban.** Diuraikan pada bagian 13.',
        },
        {
          kind: 'note',
          text: 'Kami tidak memasang Google Analytics, piksel pelacak, tag manager, maupun perangkat analitik pihak ketiga lainnya pada situs ini.',
        },
      ],
    },

    {
      heading: '5. Data Pengguna Google (Google User Data)',
      blocks: [
        {
          kind: 'paragraph',
          text: `Aplikasi kami menggunakan Google Sign-In dan **hanya** meminta cakupan (scope) non-sensitif berikut: \`${scopeList}\`. Kami tidak meminta akses ke Gmail, Google Drive, Kalender, Kontak, maupun layanan Google lainnya.`,
        },
        {
          kind: 'paragraph',
          text: '**Data yang kami akses.** Dari cakupan di atas, kami menerima:',
        },
        { kind: 'list', items: [...googleUserDataFields.id] },
        {
          kind: 'paragraph',
          text: '**Cara kami menggunakannya.** Data tersebut digunakan semata-mata untuk membuat dan mengenali akun Anda, menampilkan identitas Anda di dalam aplikasi, menghubungkan Anda dengan kelompok atau data yang menjadi hak Anda, dan mengirimkan pemberitahuan terkait layanan.',
        },
        {
          kind: 'paragraph',
          text: '**Siapa yang menangani proses masuknya.** Alur masuk Google ditangani oleh sistem kami sendiri yang berjalan pada server kami di Indonesia. Kami tidak menggunakan penyedia autentikasi pihak ketiga selain Google sebagai penyedia identitas.',
        },
        {
          kind: 'paragraph',
          text: '**Cara kami menyimpannya.** Pengenal akun, alamat email, nama tampilan, dan URL foto profil disimpan pada basis data kami sendiri di Indonesia, sebagaimana diuraikan pada bagian 9. Kami tidak menyimpan kata sandi Akun Google Anda — kami tidak pernah menerimanya.',
        },
        {
          kind: 'paragraph',
          text: '**Cara kami membagikannya.** Data pengguna Google tidak dibagikan kepada pihak ketiga mana pun selain penyedia infrastruktur yang tercantum pada bagian 7, yang bertindak atas instruksi kami.',
        },
        {
          kind: 'paragraph',
          text: 'Kami secara tegas **tidak** melakukan hal-hal berikut terhadap data pengguna Google:',
        },
        {
          kind: 'list',
          items: [
            'Menjual atau mengalihkan data kepada pialang data (data broker), agregator, atau penjual informasi.',
            'Menggunakan data untuk iklan, termasuk penargetan ulang (retargeting), iklan yang dipersonalisasi, atau iklan berbasis minat.',
            'Menggunakan data untuk menentukan kelayakan kredit atau untuk tujuan penilaian keuangan.',
            'Menggunakan data untuk melatih model kecerdasan buatan atau pembelajaran mesin, baik yang dipersonalisasi maupun tidak.',
            'Mengizinkan manusia membaca data Anda, kecuali atas persetujuan tegas Anda, untuk keperluan keamanan seperti investigasi penyalahgunaan, atau apabila diwajibkan oleh hukum.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Penggunaan dan pengalihan informasi yang kami terima dari Google API tunduk pada [Kebijakan Data Pengguna Layanan Google API](https://developers.google.com/terms/api-services-user-data-policy), termasuk persyaratan Penggunaan Terbatas (Limited Use).',
        },
        {
          kind: 'paragraph',
          text: 'Anda dapat mencabut akses aplikasi kami ke Akun Google Anda kapan saja melalui [halaman izin Akun Google](https://myaccount.google.com/permissions). Pencabutan akses menghentikan akses kami ke depan, dan tidak dengan sendirinya menghapus data yang telah tersimpan — untuk itu, ajukan permintaan penghapusan sebagaimana diuraikan pada bagian 9.',
        },
      ],
    },

    {
      heading: '6. Tujuan Pemrosesan',
      blocks: [
        { kind: 'paragraph', text: 'Kami memproses data pribadi Anda untuk tujuan berikut:' },
        {
          kind: 'list',
          items: [
            'Menyediakan, mengoperasikan, dan memelihara layanan yang Anda gunakan.',
            'Mengautentikasi Anda dan mengamankan akses ke akun Anda.',
            'Menampilkan identitas dan data Anda di dalam aplikasi, termasuk kepada anggota kelompok yang Anda ikuti sepanjang fitur tersebut mengharuskannya.',
            'Berkomunikasi dengan Anda mengenai layanan, perubahan kebijakan, dan tanggapan atas permintaan Anda.',
            'Mendeteksi, mencegah, dan menangani gangguan keamanan, penyalahgunaan, dan kesalahan teknis.',
            'Memenuhi kewajiban hukum yang berlaku bagi kami.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Kami tidak memproses data Anda untuk tujuan lain tanpa terlebih dahulu memberitahukannya kepada Anda dan, apabila diperlukan, memperoleh persetujuan Anda.',
        },
      ],
    },

    {
      heading: '7. Pembagian dan Pengungkapan Data',
      blocks: [
        {
          kind: 'paragraph',
          text: '**Kami tidak menjual data pribadi Anda.** Kami membagikan data hanya kepada pihak-pihak berikut, sebatas yang diperlukan untuk mengoperasikan layanan:',
        },
        {
          kind: 'table',
          head: ['Pihak', 'Negara pemrosesan', 'Peran'],
          rows: subProcessors.map((p) => [p.name, p.country, p.purposeId]),
        },
        {
          kind: 'paragraph',
          text: 'Selain itu, kami dapat mengungkapkan data pribadi apabila diwajibkan oleh peraturan perundang-undangan, perintah pengadilan, atau permintaan sah dari aparat penegak hukum. Dalam hal demikian, kami akan memberitahukan Anda sepanjang pemberitahuan tersebut tidak dilarang oleh hukum.',
        },
      ],
    },

    {
      heading: '8. Transfer Data ke Luar Wilayah Indonesia',
      blocks: [
        {
          kind: 'paragraph',
          text: '**Data akun dan data aplikasi Anda kami simpan di Indonesia.** Meskipun demikian, sebagian penyedia layanan yang kami gunakan memproses data di luar wilayah Republik Indonesia, sebagaimana tercantum pada tabel di bagian 7. Transfer tersebut terbatas pada: saat Anda melakukan autentikasi melalui Google, saat permintaan Anda melewati jaringan Cloudflare, dan saat peramban Anda mengunduh berkas font dari Google Fonts.',
        },
        {
          kind: 'paragraph',
          text: 'Sesuai Pasal 56 Undang-Undang No. 27 Tahun 2022, transfer data pribadi ke luar wilayah Indonesia kami lakukan dengan memastikan negara tujuan atau penerima data memiliki tingkat pelindungan data pribadi yang setara atau lebih tinggi, atau dengan mengandalkan perjanjian pemrosesan data dan jaminan kontraktual yang mengikat penerima. Untuk seluruh penyedia pada tabel di bagian 7, kami mengandalkan perjanjian pemrosesan data yang mereka sediakan. Apabila kedua dasar tersebut tidak terpenuhi, transfer dilakukan berdasarkan persetujuan Anda.',
        },
      ],
    },

    {
      heading: '9. Penyimpanan, Retensi, dan Penghapusan',
      blocks: [
        {
          kind: 'paragraph',
          text: `**Lokasi penyimpanan.** ${dataResidency.appHostingId} ${dataResidency.databaseId}`,
        },
        { kind: 'paragraph', text: '**Jangka waktu retensi.** Kami menerapkan jangka berikut:' },
        {
          kind: 'table',
          head: ['Jenis data', 'Jangka waktu retensi'],
          rows: [
            ['Data akun dan data pengguna Google', 'Selama akun Anda aktif'],
            [
              'Data akun setelah permintaan penghapusan',
              'Dihapus dari sistem produksi paling lambat 30 hari kalender',
            ],
            [
              'Salinan cadangan (backup)',
              'Terhapus mengikuti siklus cadangan, paling lama 90 hari',
            ],
            ['Catatan log teknis dan keamanan', 'Paling lama 90 hari'],
            [
              'Data yang wajib disimpan menurut peraturan perundang-undangan',
              'Sesuai jangka waktu yang diwajibkan peraturan terkait',
            ],
          ],
        },
        {
          kind: 'paragraph',
          text: `**Cara meminta penghapusan.** Kirimkan permintaan ke [${company.email}](mailto:${company.email}) dengan subjek "Permintaan Penghapusan Data" dari alamat email Akun Google yang Anda gunakan. Kami akan mengonfirmasi penerimaan permintaan dan menanggapinya paling lambat 14 hari kalender.`,
        },
        {
          kind: 'paragraph',
          text: 'Setelah jangka retensi berakhir, data dihapus atau dianonimkan sehingga tidak lagi dapat dikaitkan dengan Anda.',
        },
      ],
    },

    {
      heading: '10. Keamanan dan Pemberitahuan Kegagalan Pelindungan',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Kami menerapkan langkah teknis dan organisasional yang wajar untuk melindungi data pribadi Anda, antara lain enkripsi lalu lintas data melalui HTTPS, pembatasan akses berdasarkan kebutuhan, pemisahan lingkungan pengembangan dan produksi, serta pemutakhiran komponen perangkat lunak secara berkala.',
        },
        {
          kind: 'paragraph',
          text: 'Tidak ada sistem yang sepenuhnya kebal. Apabila terjadi kegagalan pelindungan data pribadi, sesuai Pasal 46 Undang-Undang No. 27 Tahun 2022 kami akan menyampaikan pemberitahuan tertulis **paling lambat 3 x 24 jam** kepada Anda sebagai Subjek Data Pribadi dan kepada lembaga yang berwenang. Pemberitahuan tersebut memuat data pribadi yang terungkap, kapan dan bagaimana hal itu terjadi, serta upaya penanganan dan pemulihan yang kami lakukan.',
        },
      ],
    },

    {
      heading: '11. Hak Anda sebagai Subjek Data Pribadi',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Undang-Undang No. 27 Tahun 2022 memberi Anda hak-hak berikut, dan kami berkomitmen memenuhinya:',
        },
        {
          kind: 'list',
          items: [
            '**Hak atas informasi** — memperoleh kejelasan identitas kami, dasar kepentingan hukum, tujuan permintaan dan penggunaan data pribadi Anda (Pasal 5).',
            '**Hak memperbaiki** — melengkapi, memperbarui, dan/atau memperbaiki kesalahan atau ketidakakuratan data pribadi Anda (Pasal 6).',
            '**Hak akses** — memperoleh akses dan salinan data pribadi Anda (Pasal 7).',
            '**Hak menghapus** — mengakhiri pemrosesan, menghapus, dan/atau memusnahkan data pribadi Anda (Pasal 8).',
            '**Hak menarik persetujuan** — menarik kembali persetujuan yang telah Anda berikan (Pasal 9).',
            '**Hak atas keputusan otomatis** — mengajukan keberatan atas tindakan pengambilan keputusan yang hanya didasarkan pada pemrosesan otomatis (Pasal 10).',
            '**Hak menunda atau membatasi** — menunda atau membatasi pemrosesan data pribadi secara proporsional (Pasal 11).',
            '**Hak menuntut ganti rugi** — menggugat dan menerima ganti rugi atas pelanggaran pemrosesan data pribadi Anda (Pasal 12).',
            '**Hak portabilitas** — memperoleh dan menggunakan data pribadi Anda dalam format yang lazim digunakan dan dapat dibaca mesin (Pasal 13).',
          ],
        },
        {
          kind: 'paragraph',
          text: `**Cara mengajukan.** Sesuai Pasal 14, permohonan diajukan secara tercatat. Kirimkan permohonan ke [${company.email}](mailto:${company.email}) dari alamat email yang terhubung dengan akun Anda, sebutkan hak yang ingin Anda gunakan, dan lampirkan keterangan yang kami perlukan untuk memastikan identitas Anda. Kami akan menanggapi paling lambat 14 hari kalender sejak permohonan diterima dan tidak memungut biaya.`,
        },
        {
          kind: 'paragraph',
          text: 'Pelaksanaan sebagian hak dapat dikecualikan atau ditunda dalam hal-hal yang ditentukan Pasal 15 Undang-Undang No. 27 Tahun 2022, misalnya untuk kepentingan penegakan hukum atau proses peradilan. Apabila hal itu terjadi, kami akan menjelaskan alasannya kepada Anda.',
        },
      ],
    },

    {
      heading: '12. Data Pribadi Anak',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Layanan kami tidak ditujukan untuk anak. Sesuai Pasal 25 dan Pasal 26 Undang-Undang No. 27 Tahun 2022, pemrosesan data pribadi anak dilakukan dengan persetujuan orang tua atau wali.',
        },
        {
          kind: 'paragraph',
          text: 'Sebagian layanan kami, seperti Tilawah Tracker, dapat digunakan dalam kelompok yang beranggotakan peserta di bawah umur. Dalam hal demikian, koordinator kelompok bertanggung jawab memastikan persetujuan orang tua atau wali telah diperoleh sebelum memasukkan data peserta tersebut.',
        },
        {
          kind: 'paragraph',
          text: `Apabila Anda orang tua atau wali dan mengetahui bahwa data anak Anda diproses tanpa persetujuan, hubungi [${company.email}](mailto:${company.email}) dan kami akan menghapus data tersebut.`,
        },
      ],
    },

    {
      heading: '13. Cookie dan Penyimpanan Lokal Peramban',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Situs ini **tidak menggunakan cookie pelacak**, cookie iklan, maupun cookie analitik.',
        },
        {
          kind: 'paragraph',
          text: 'Kami menggunakan satu entri penyimpanan lokal peramban (`localStorage`) dengan kunci `theme`, yang menyimpan pilihan Anda antara tampilan terang dan gelap. Entri ini tersimpan di peramban Anda sendiri, tidak pernah dikirimkan ke server kami, dan dapat Anda hapus kapan saja melalui pengaturan peramban.',
        },
        {
          kind: 'paragraph',
          text: 'Aplikasi yang memerlukan sesi login dapat menggunakan cookie atau penyimpanan lokal tambahan yang bersifat wajib untuk menjaga Anda tetap masuk. Cookie semacam itu tidak digunakan untuk pelacakan.',
        },
      ],
    },

    {
      heading: '14. Perubahan Kebijakan Ini',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Sesuai Pasal 21 ayat (2) Undang-Undang No. 27 Tahun 2022, apabila terdapat perubahan atas informasi yang tercantum di sini, kami akan memberitahukan Anda **sebelum** perubahan tersebut berlaku.',
        },
        {
          kind: 'paragraph',
          text: 'Pemberitahuan disampaikan melalui aplikasi, melalui email ke alamat yang terhubung dengan akun Anda, atau dengan pengumuman yang jelas pada halaman ini, disertai tanggal berlaku yang baru.',
        },
      ],
    },

    {
      heading: '15. Kontak dan Pengaduan',
      blocks: [
        {
          kind: 'paragraph',
          text: `Pertanyaan, permintaan pelaksanaan hak, dan pengaduan mengenai data pribadi dapat Anda sampaikan ke [${company.email}](mailto:${company.email}).`,
        },
        {
          kind: 'definitions',
          items: [
            { term: 'Pengendali Data Pribadi', value: company.legalName },
            { term: 'Alamat', value: company.addressLine },
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
          ],
        },
        {
          kind: 'paragraph',
          text: 'Apabila Anda menilai penanganan kami belum memadai, Anda berhak menyampaikan pengaduan kepada lembaga yang berwenang di bidang pelindungan data pribadi, dalam hal ini Kementerian Komunikasi dan Digital Republik Indonesia.',
        },
      ],
    },
  ],

  callout: {
    title: 'Komitmen Kami terhadap Privasi Anda',
    text: 'Kami meminta akses sekecil mungkin, menyimpannya selama mungkin diperlukan saja, dan tidak pernah memperdagangkannya. Bila ada bagian dari kebijakan ini yang tidak Anda pahami, tanyakan kepada kami — kami akan menjelaskannya.',
  },
  contactPrompt: `Punya pertanyaan tentang privasi Anda? Hubungi kami di [${company.email}](mailto:${company.email})`,
  backHome: 'Kembali ke Beranda',
}
