export default {
  site: {
    name: 'Penghitung Doa Personal',
    logoAlt: 'Logo tasbih Penghitung Doa Personal',
  },
  nav: {
    skipToContent: 'Lewati ke konten',
    aria: 'Navigasi utama',
    homeAria: 'Beranda Penghitung Doa Personal',
    features: 'Fitur',
    privacy: 'Kebijakan Privasi',
    contact: 'Kontak',
    deleteAccount: 'Hapus Akun',
  },
  langSwitcher: {
    label: 'Bahasa',
    ariaLabel: 'Pilih bahasa',
  },
  footer: {
    rights: '© 2026 Penghitung Doa Personal. Seluruh hak cipta dilindungi.',
    contactPrefix: 'Kontak: Discord',
    discord: 'birsheoran',
  },
  notFound: {
    title: 'Halaman tidak ditemukan',
    heading: 'Halaman ini tidak dapat ditemukan.',
    body: 'Halaman yang Anda cari mungkin telah dipindahkan atau tidak ada lagi.',
    cta: 'Buka halaman beranda',
  },
  home: {
    title: 'Penghitung Doa Personal',
    description:
      'Penghitung Doa Personal membantu Anda menghitung doa, memilih tema yang indah, dan memantau perkembangan harian dalam pengalaman yang tenang dan personal.',
    eyebrow: 'Hitung • Tema • Personalisasi',
    heading: 'Penghitung doa yang menenangkan, dibuat untuk ibadah harian Anda.',
    lede: 'Penghitung Doa Personal membantu Anda menghitung doa, menyesuaikan pengalaman dengan tema yang indah, dan mengikuti perkembangan ibadah dari waktu ke waktu tanpa gangguan yang tidak perlu.',
    ctaPrimary: 'Dapatkan aplikasinya',
    ctaSecondary: 'Baca kebijakan privasi',
    previewAria: 'Pratinjau tampilan aplikasi Penghitung Doa Personal',
    previewTitleA: 'Penghitung',
    previewTitleB: 'Doa',
    previewTitleC: 'Personal',
    previewSubtitle: 'Pilih gaya Anda',
    phoneHeading: 'Tema',
    phoneLede: 'Pilih tampilan yang paling nyaman untuk ibadah harian Anda.',
    themes: [
      { icon: '21', name: 'Kata Mengalir', desc: 'Gaya penghitung beranimasi yang tenang.' },
      { icon: '▣', name: 'Penghitung Digital', desc: 'Alat hitung genggam yang jernih.' },
      { icon: '○', name: 'Tasbih Progresif', desc: 'Setiap butir terisi seiring hitungan Anda.' },
    ],
    featuresHeading: 'Dirancang untuk rutinitas ibadah yang fokus.',
    features: [
      {
        icon: '🎨',
        title: 'Beragam tema',
        body: 'Pilih dari gaya visual yang tenang seperti Kata Mengalir, Penghitung Digital, Tasbih Progresif, dan Cahaya Suci.',
      },
      {
        icon: '📿',
        title: 'Penghitung doa',
        body: 'Pantau setiap sesi penghitungan dengan jelas, termasuk total harian dan perkembangan pribadi.',
      },
      {
        icon: '✨',
        title: 'Pengalaman personal',
        body: 'Atur aplikasi sesuai ibadah Anda dengan antarmuka rapi yang terasa personal, tenang, dan fokus.',
      },
    ],
    bannerHeading: 'Sederhana, menghormati, dan transparan.',
    bannerBody: 'Kami menggunakan Unity LevelPlay untuk iklan dan menjaga kebijakan tetap mudah dipahami.',
    bannerCta: 'Lihat Kebijakan Privasi',
  },
  privacy: {
    title: 'Kebijakan Privasi - Penghitung Doa Personal',
    description:
      'Bagaimana Penghitung Doa Personal menangani perkembangan penghitungan, data perangkat, iklan Unity LevelPlay, dan pembelian dalam aplikasi.',
    back: '← Kembali ke halaman utama',
    heading: 'Kebijakan Privasi',
    effectiveDate: 'Tanggal Berlaku: 9/5/2026',
    appNameLine: 'Nama Aplikasi: Penghitung Doa Personal',
    s1: {
      h: '1. Pendahuluan',
      p: 'Penghitung Doa Personal (“kami”, “milik kami”, atau “aplikasi”) adalah aplikasi penghitung doa yang dirancang untuk membantu pengguna menghitung doa dan memantau perkembangan penghitungan. Kami menghormati privasi Anda dan berkomitmen untuk melindunginya.',
    },
    s2: {
      h: '2. Informasi yang Kami Kumpulkan',
      personalLabel: 'Data Pribadi:',
      personalP:
        'Aplikasi tidak memerlukan akun dan dapat digunakan sepenuhnya tanpa masuk. Jika Anda memilih untuk membuat akun, kami mengumpulkan alamat email, nama tampilan, dan id akun Anda melalui Google Firebase agar akun Anda dapat dikenali dan data Anda dipulihkan.',
      progressLabel: 'Perkembangan Penghitung Doa:',
      progressP:
        'Aplikasi dirancang untuk mencatat perkembangan penghitung doa, seperti jumlah hitungan, target, rangkaian hari, atau riwayat sesi, agar pengguna dapat mengikuti ibadahnya. Informasi ini hanya digunakan untuk menyediakan fitur inti penghitungan dan perkembangan pada aplikasi.',
      nonPersonalLabel: 'Data Non-Pribadi:',
      nonPersonalP: 'Aplikasi dapat mengumpulkan data non-pribadi yang terbatas, seperti:',
      items: [
        'Penggunaan aplikasi, seperti durasi sesi dan layar yang dilihat',
        'Jenis perangkat dan sistem operasi',
        'Data interaksi iklan melalui Unity LevelPlay',
      ],
      closing:
        'Data ini hanya digunakan untuk meningkatkan performa aplikasi, pengalaman pengguna, dan fungsi periklanan.',
    },
    s3: {
      h: '3. Iklan',
      p: 'Aplikasi menampilkan iklan yang disediakan oleh Unity LevelPlay (Unity Technologies).',
      placementLabel: 'Di mana iklan muncul:',
      placementP:
        'Iklan hanya muncul di menu samping dan di layar sekunder. Iklan tidak pernah muncul pada penghitung doa atau selama doa berlangsung.',
      formatLabel: 'Format iklan:',
      formatP:
        'Hanya iklan banner yang ditampilkan. Tidak ada iklan interstisial, berhadiah, pembuka aplikasi, atau layar penuh.',
      dataP:
        'Unity dan mitra periklanannya dapat mengakses hal berikut untuk menayangkan dan mengukur iklan:',
      items: [
        'ID Iklan Google (AD_ID) milik perangkat',
        'Informasi dasar perangkat, seperti jenis perangkat dan sistem operasi',
        'Informasi dasar jaringan',
      ],
      optOut:
        'Anda dapat menyetel ulang ID iklan atau menonaktifkan personalisasi iklan di Setelan Android > Google > Iklan.',
      premiumNote: 'Membeli Lifetime Premium menghapus semua iklan secara permanen.',
      learnMore: 'Kebijakan privasi Unity:',
    },
    s4: {
      h: '4. Pembelian Dalam Aplikasi',
      p:
        'Aplikasi menawarkan satu pembelian sekali bayar, “Lifetime Premium”, yang menghapus semua iklan dan membuka tema premium.',
      billingP:
        'Pembelian diproses oleh Google Play Billing. Aplikasi tidak pernah melihat atau menyimpan detail kartu maupun pembayaran.',
      restoreP:
        'Google Play hanya memberikan status pembelian kepada aplikasi, sehingga akses Premium Anda dapat dipulihkan setelah menginstal ulang aplikasi atau di perangkat lain.',
      learnMore: 'Kebijakan privasi Google:',
    },
    s5: {
      h: '5. Data yang Dibagikan kepada Pihak Ketiga',
      p: 'Aplikasi membagikan data berikut kepada layanan pihak ketiga:',
      items: [
        {
          name: 'Unity LevelPlay / Unity Ads',
          data: 'ID iklan, informasi perangkat dan jaringan, digunakan untuk menayangkan dan mengukur iklan.',
        },
        {
          name: 'Google Play Billing',
          data: 'Status pembelian, digunakan untuk membuka dan memulihkan Lifetime Premium.',
        },
        {
          name: 'Google Firebase',
          data: 'Email akun, nama tampilan, dan id akun, hanya jika Anda memilih membuat akun. Aplikasi sepenuhnya dapat digunakan tanpa masuk.',
        },
      ],
    },
    s6: {
      h: '6. Izin',
      p: 'Aplikasi dapat meminta izin berikut:',
      items: [
        'Akses internet, untuk iklan dan fungsi aplikasi',
        'Akses penyimpanan atau data lokal aplikasi, untuk menyimpan perkembangan penghitung doa di perangkat',
      ],
      closing:
        'Aplikasi tidak mengakses kontak, foto, atau data pribadi sensitif lainnya kecuali jelas diperlukan oleh suatu fitur dan diizinkan oleh pengguna.',
    },
    s7: {
      h: '7. Keamanan Data',
      p: 'Kami tidak menyimpan data pribadi di server kami. Perkembangan penghitung doa digunakan untuk mendukung pengalaman aplikasi. Layanan pihak ketiga yang digunakan aplikasi mengikuti praktik keamanan mereka sendiri.',
    },
    s8: {
      h: '8. Privasi Anak',
      p: 'Aplikasi ini tidak ditujukan untuk anak di bawah usia 13 tahun. Kami tidak dengan sengaja mengumpulkan data pribadi dari anak-anak.',
    },
    s9: {
      h: '9. Perubahan Kebijakan Ini',
      p: 'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Pembaruan akan dipublikasikan di halaman ini dengan tanggal yang direvisi.',
    },
    s10: {
      h: '10. Hubungi Kami',
      p: 'Jika Anda memiliki pertanyaan, hubungi kami di:',
      emailLabel: 'Email:',
      deletionLabel: 'Penghapusan akun:',
      deletionLink: 'Hapus akun Penghitung Doa Personal Anda',
    },
  },
  deleteAccount: {
    title: 'Hapus Akun Penghitung Doa Personal Anda',
    description:
      'Pelajari cara menghapus akun Penghitung Doa Personal dan data cloud terkait secara permanen.',
    eyebrow: 'Penghapusan akun Google Play',
    heading: 'Hapus Akun Penghitung Doa Personal Anda',
    intro:
      'Pengguna dapat menghapus akun Penghitung Doa Personal beserta seluruh data cloud terkait secara permanen. Halaman ini dapat diakses publik dan tidak memerlukan login.',
    how: {
      h: 'Cara menghapus akun Anda',
      steps: [
        'Buka aplikasi Penghitung Doa Personal.',
        'Buka <strong>Profil → Pengaturan Lanjutan → Hapus Akun</strong>.',
        'Baca peringatannya lalu konfirmasi penghapusan.',
        'Akun Anda dan data cloud terkait akan dihapus secara permanen.',
      ],
    },
    data: {
      h: 'Data yang dihapus',
      p: 'Saat akun dihapus, data berikut akan dihapus secara permanen:',
      items: [
        'Akun Firebase Authentication',
        'Alamat email',
        'Profil pengguna',
        'Sesi doa',
        'Statistik harian',
        'Statistik sepanjang waktu',
        'Target doa',
        'Preferensi dan pengaturan yang tersinkronisasi',
        'Data cloud lain apa pun yang terkait dengan akun',
      ],
    },
    retention: {
      h: 'Penyimpanan data',
      p: 'Kami tidak dengan sengaja menyimpan data akun pribadi setelah akun dihapus, kecuali jika diwajibkan oleh hukum yang berlaku atau untuk tujuan keamanan, pencegahan penipuan, atau kepatuhan hukum yang sah.',
    },
    help: {
      h: 'Butuh bantuan?',
      p: 'Untuk bantuan, hubungi:',
      emailLabel: 'Email:',
    },
  },
} as const;
