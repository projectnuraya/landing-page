import { company, legalEffectiveDateLabel } from '../../config/company'

import type { LegalDocument } from './types'

export const legalNoticeId: LegalDocument = {
  locale: 'id',
  title: 'Pemberitahuan Hukum',
  intro: `Informasi hukum dan identitas badan hukum ${company.legalName}.`,
  lastUpdated: `Terakhir diperbarui: ${legalEffectiveDateLabel.id}`,
  languageSwitch: { label: 'Read this page in English', to: '/en/legal' },

  sections: [
    {
      heading: '1. Informasi Perusahaan',
      blocks: [
        {
          kind: 'definitions',
          items: [
            { term: 'Nama perusahaan', value: company.legalName },
            { term: 'Bentuk badan hukum', value: company.entityType },
            { term: 'Nomor Induk Berusaha (NIB)', value: company.nib },
            {
              term: 'Status pendirian',
              value: 'Terdaftar pada Kementerian Hukum Republik Indonesia',
            },
            { term: 'Alamat', value: company.addressLine },
            { term: 'Merek dagang', value: company.brandName },
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
            { term: 'Situs web', value: `[${company.website}](${company.website})` },
            {
              term: 'Sertifikat pendirian',
              value: `[Lihat sertifikat di AHU Kemenkumham](${company.ahuCertificateUrl})`,
            },
          ],
        },
      ],
    },

    {
      heading: '2. Hak Cipta dan Merek Dagang',
      blocks: [
        {
          kind: 'paragraph',
          text: `© ${company.legalName}. Semua hak dilindungi undang-undang. "${company.brandName}", logo Nuraya, dan merek terkait lainnya merupakan merek dagang milik ${company.legalName}. Penggunaan merek tersebut tanpa izin tertulis dari kami tidak diperkenankan.`,
        },
        {
          kind: 'paragraph',
          text: 'Seluruh konten, desain, grafik, susunan, dan materi lain pada situs ini dilindungi oleh Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta serta perjanjian hak cipta internasional yang berlaku bagi Indonesia.',
        },
        {
          kind: 'paragraph',
          text: 'Anda diperkenankan mengakses, membaca, dan mencetak halaman situs ini untuk keperluan pribadi dan non-komersial. Penggunaan lain memerlukan izin tertulis dari kami.',
        },
      ],
    },

    {
      heading: '3. Kepatuhan Hukum',
      blocks: [
        {
          kind: 'paragraph',
          text: `${company.legalName} beroperasi sesuai peraturan perundang-undangan Republik Indonesia, termasuk namun tidak terbatas pada:`,
        },
        {
          kind: 'list',
          items: [
            'Undang-Undang No. 40 Tahun 2007 tentang Perseroan Terbatas beserta perubahannya.',
            'Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik, sebagaimana diubah dengan Undang-Undang No. 19 Tahun 2016 dan Undang-Undang No. 1 Tahun 2024.',
            'Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi.',
            'Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta.',
            'Undang-Undang No. 8 Tahun 1999 tentang Perlindungan Konsumen.',
            'Peraturan Pemerintah No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik.',
            'Peraturan pelaksana dan regulasi terkait lainnya yang berlaku bagi kegiatan usaha kami.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Cara kami memenuhi kewajiban berdasarkan Undang-Undang No. 27 Tahun 2022 diuraikan dalam [Kebijakan Privasi](/privacy) kami.',
        },
      ],
    },

    {
      heading: '4. Penafian',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Informasi pada situs ini disediakan untuk keperluan informasi umum dan tidak dimaksudkan sebagai nasihat hukum, keuangan, profesional, atau teknis untuk keadaan tertentu Anda.',
        },
        {
          kind: 'paragraph',
          text: 'Kami berupaya menjaga informasi tetap akurat dan mutakhir, namun tidak memberikan jaminan atas kelengkapan, keakuratan, atau kesesuaiannya untuk tujuan tertentu. Keputusan yang Anda ambil berdasarkan informasi di situs ini menjadi tanggung jawab Anda sendiri.',
        },
      ],
    },

    {
      heading: '5. Tautan Eksternal',
      blocks: [
        {
          kind: 'paragraph',
          text: `Situs kami memuat tautan ke situs pihak ketiga yang tidak dioperasikan atau dikendalikan oleh ${company.legalName}. Kami tidak memiliki kendali atas konten, kebijakan privasi, maupun praktik situs tersebut, dan tidak bertanggung jawab atasnya.`,
        },
        {
          kind: 'paragraph',
          text: 'Adanya tautan tidak berarti kami mendukung atau menjamin isi situs yang dituju. Kami menyarankan Anda membaca ketentuan dan kebijakan privasi setiap situs pihak ketiga yang Anda kunjungi.',
        },
      ],
    },

    {
      heading: '6. Lisensi Sumber Terbuka',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Layanan kami dibangun menggunakan komponen perangkat lunak sumber terbuka. Kami menghormati hak cipta dan ketentuan lisensi setiap pustaka dan kerangka kerja pihak ketiga yang kami gunakan, dan memenuhi kewajiban atribusi yang disyaratkan lisensinya.',
        },
        {
          kind: 'paragraph',
          text: `Daftar komponen sumber terbuka yang kami gunakan beserta lisensinya tersedia atas permintaan melalui [${company.email}](mailto:${company.email}). Sebagian pekerjaan kami juga kami publikasikan di [GitHub](${company.github}).`,
        },
      ],
    },

    {
      heading: '7. Pelaporan Pelanggaran',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Apabila Anda menilai hak kekayaan intelektual Anda telah dilanggar, atau menemukan konten yang melanggar hukum pada layanan kami, sampaikan laporan kepada kami:',
        },
        {
          kind: 'definitions',
          items: [
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
            { term: 'Subjek', value: 'Pelaporan Pelanggaran — [Jenis Pelanggaran]' },
          ],
        },
        {
          kind: 'paragraph',
          text: 'Sertakan uraian pelanggaran, bukti kepemilikan hak, lokasi konten yang dilaporkan, serta data kontak Anda. Kami akan meninjau setiap laporan dan mengambil tindakan yang sesuai menurut hukum yang berlaku.',
        },
        {
          kind: 'paragraph',
          text: 'Laporan mengenai kerentanan keamanan dapat Anda kirimkan ke alamat yang sama dengan subjek "Laporan Keamanan". Kami menghargai pengungkapan yang bertanggung jawab dan tidak akan menempuh upaya hukum terhadap pelapor yang beritikad baik.',
        },
      ],
    },

    {
      heading: '8. Yurisdiksi',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Pemberitahuan hukum ini, serta setiap hal yang timbul dari atau berkaitan dengan penggunaan layanan kami, diatur oleh dan ditafsirkan menurut hukum Republik Indonesia.',
        },
        {
          kind: 'paragraph',
          text: `Sengketa terlebih dahulu diupayakan penyelesaiannya secara musyawarah dalam jangka waktu ${company.disputeNegotiationDays} (tiga puluh) hari kalender. Apabila tidak tercapai kesepakatan, sengketa diselesaikan melalui **${company.courtVenue}**, sesuai ketentuan yang sama dengan bagian 13 [Ketentuan Layanan](/terms) kami.`,
        },
        {
          kind: 'paragraph',
          text: 'Ketentuan ini tidak mengurangi hak Anda selaku konsumen untuk menempuh upaya penyelesaian sengketa lain yang tersedia menurut peraturan perundang-undangan.',
        },
      ],
    },

    {
      heading: '9. Kontak',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Untuk pertanyaan mengenai pemberitahuan hukum ini atau hal hukum lain terkait layanan kami, hubungi:',
        },
        {
          kind: 'definitions',
          items: [
            { term: 'Perusahaan', value: company.legalName },
            { term: 'Alamat', value: company.addressLine },
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
          ],
        },
        {
          kind: 'paragraph',
          text: 'Kami menggunakan satu alamat email untuk seluruh korespondensi agar tidak ada pesan yang tersesat di alamat yang tidak terpantau.',
        },
      ],
    },
  ],

  callout: {
    title: 'Komitmen Kami terhadap Transparansi',
    text: 'Identitas badan hukum kami, nomor registrasi, dan cara menghubungi kami tercantum lengkap di halaman ini — bukan tersembunyi di balik formulir. Bila ada yang perlu diperjelas, tanyakan kepada kami.',
  },
  contactPrompt: `Punya pertanyaan hukum? Hubungi kami di [${company.email}](mailto:${company.email})`,
  backHome: 'Kembali ke Beranda',
}
