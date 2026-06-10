import {
    Landmark,
    Banknote,
    Scissors,
    Crown,
    Sparkle,
    Building2,
    Users,
    Ban,
    User,
    ShipWheel,
    CirclePoundSterling,
    CircleStar,
} from "lucide-react";

export const museumData = {

    ris: {

        title: "Uang RIS",

        subtitle: "Uang Awal Kemerdekaan Indonesia",

        englishTitle: "The Federal Republic of Indonesia’s Money",

        image: "/uang_ris.png",

        headerColor: "#417031",

        description:
            "Uang RIS digunakan sebagai mata uang resmi Republik Indonesia Serikat pada tahun 1950 untuk menggantikan ORI dan ORIDA. Kehadirannya menjadi bagian penting dalam transisi sistem keuangan Indonesia pasca kemerdekaan.",

        sectionTitle: "Kronologi Singkat",

        timeline: [

            {
                year: "1949",

                title: "Konfrensi Meja Bundar (KMB)",

                description:
                    "KMB menghasilkan kesepakatan pembentukan Republik Indonesia Serikat (RIS).",

                icon: Landmark,
            },

            {
                year: "1950",

                title: "Penggantian Mata Uang",

                description:
                    "Pemerintah RIS menetapkan uang RIS sebagai alat pembayaran resmi menggantikan ORI dan ORIDA.",

                icon: Banknote,
            },

            {
                year: "1950",

                title: "Kebijakan Gunting Sjafruddin",

                description:
                    "Mentri keuangan Sjahruddin Prawiranegara menerapkan kebijakan “Gunting Sjafruddin” dengan memangkas uang kertas untuk mengatasi inflasi.",

                icon: Scissors,
            },

        ],

        facts:
            "Desain setengah uang hasil guntingan tetap mempertahankan ornamen asli era kolonial. Ini menunjukkan keterbatasan sumber daya namun tetap menjaga kontinuitas ekonomi.",

        location: "Ruang 26 | Lantai 2",

        locationDesc:
            "Koleksi ini dapat pada Ruangan Numismatik.",

        category: "uang-kertas",

        card: {
            title: "Uang RIS 10 Rupiah",
            year: "1950",
            categoryLabel: "Republik Indonesia Serikat",
        },
    },

    kacaPatri: {

        title: "Di bawah lindungan sang Dewa",

        subtitle: "",

        englishTitle: "Under patronage of the God",

        image: "/kaca_patri.png",

        headerColor: "#5B0000",

        description:
            "Kaca patri di rongga tangga ini menggambarkan Dewa Hermes, dewa pelindung perdagangan dalam mitologi Yunani. Dibuat oleh De Javasche Bank dan didirikan pada tahun 1828, sebagai simbol perlindungan dan kelancaran kegiatan perdagangan.",

        sectionTitle: "Arti di Balik Kaca Patri",

        timeline: [

            {
                title: "Dewa Hermes",

                description:
                    "Dewa pelindung perdagangan dalam mitologi Yunani, melambangkan kelancaran dan kepercayaan dalam aktivitas dagang.",

                icon: Crown,
            },

            {
                title: "Berdiri Sejak 1828",

                description:
                    "Mencandakan De Javasche Bank didirikan pada tahun 1828, menjadi salah satu bank terpenting di Hindia Belanda.",

                icon: Sparkle,
            },

            {
                title: "Tiga Kota Penting",

                description:
                    "Surabaya, Batavia, dan Semarang merupakan pusat perdagangan utama di wilayah kerja De Javasche Bank di Jawa dan Madura.",

                icon: Building2,
            },

        ],

        facts:
            "Simbol-simbol pada kaca patri ini mencerminkan nilai-nilai penting bagi De Javasche Bank.",

        trivia:
            "Kaca patri ini dibuat di Eropa dan dipasang pada masa awal berdirinya De Javasche Bank sebagai simbol identitas.",

        location: "Lantai 2",

        locationDesc:
            "Koleksi ini berada pada Lantai 2, berada di rongga tangga.",

        category: "kolonial",

        card: {
            title: "Kaca Patri",
            year: "1828",
            categoryLabel: "Warisan De Javasche Bank",
        },
    },

    uangJepang: {

        title: "Uang Jepang",

        subtitle: "Uang Token & Uang Invasi",

        englishTitle: "The Japanese Occupation Period",

        image: "/uang_jepang.png",

        headerColor: "#AF241C",

        description:
            "Pada masa pendudukan Jepang, pemerintah militer menerbitkan uang invasi sebagai alat pembayaran resmi di Indonesia. Uang ini digunakan untuk mengendalikan sistem ekonomi selama masa perang dan menggantikan penggunaan mata uang sebelumnya.",

        sectionTitle: "Kronologi Singkat",

        timeline: [

            {
                year: "1942",

                title: "Uang Invasi mulai diedarkan",

                description:
                    "pemerintah militer Jepang mulai mengedarkan uang invasi di Indonesia sebagai alat pembayaran resmi.",

                icon: Users,
            },

            {
                year: "1943",

                title: "Penerbitan bertulisan Daai Nippon Teikoku Seihu",

                description:
                    "Uang kertas diterbitkan dengan tulisan “Dai Nippon Teikoku Seihu”, menandakan kendali Jepang atas ekonomi.",

                icon: Banknote,
            },

            {
                year: "1945",

                title: "Penggunaan uang Jepang dihentikan",

                description:
                    "Setelah kedatangan Sekutu dan berakhirnya pendudukan Jepang, uang invasi tidak lagi berlaku.",

                icon: Ban,
            },

        ],

        facts:
            "Sebagian uang Jepang dicetak menggunakan Bahasa Indonesia untuk menatrik simpati masyarakat lokal selama masa pendudukan.",

        location: "Ruang 26 | Lantai 2",

        locationDesc:
            "Koleksi ini dapat pada Ruangan Numismatik.",

        category: "uang-kertas",

        card: {
            title: "Uang Invasi Jepang",
            year: "1942",
            categoryLabel: "Masa Kolonial Jepang",
        },
    },

    uangPemerintah: {

        title: "Nasionalisasi DJB",

        subtitle: "Uang Pemerintah & Bank Indonesia",

        englishTitle: "Nationalisation of DJB",

        image: "/uang_pemerintah.png",

        headerColor: "#215FA7",

        description:
            "Setelah Republik Indonesia kembali menjadi negara kesatuan pada tahun 1950, pemerintah mulai mengambil alih De Javasche Bank (DJB) dan membentuk sistem moneter nasional yang berada di bawah kendali Indonesia.",

        sectionTitle: "Kronologi Singkat",

        timeline: [

            {
                year: "1950",

                title: "RIS Dibubarkan",

                description:
                    "Republik Indonesia Serikat dibubarkan pada 17 Agustus 1950 dan Indonesia kembali menjadi NKRI.",

                icon: Ban,
            },

            {
                year: "1951",

                title: "Nasionalisasi de Javasche Bank (DJB)",

                description:
                    "Pemerintah memulai proses nasionalisasi DJB yang sebelumnya merupakan bank sentral Hindia Belanda.",

                icon: Banknote,
            },

            {
                year: "1953",

                title: "Uang Bank Indonesia mulai diedarkan",

                description:
                    "Uang kertas Bank Indonesia mulai resmi diedarkan sebagai alat pembayaran sah di Indonesia.",

                icon: User,
            },

        ],

        facts:
            "Sebagian uang Bank Indonesia awal masih dicetak di Belanda sebelum Indonesia memiliki percetakan uang sendiri.",

        location: "Ruang 26 | Lantai 2",

        locationDesc:
            "Koleksi ini dapat pada Ruangan Numismatik.",

        category: "uang-kertas",

        card: {
            title: "Uang Nasionalisasi DJB",
            year: "1950",
            categoryLabel: "Uang Pemerintah Indonesia",
        },
    },

    uangKhusus: {

        title: "Uang Bersambung",

        subtitle: "Uang Khusus",

        englishTitle: "Uncut Banknotes",

        image: "/uang_khusus.png",

        headerColor: "#AF241C",

        description:
            "Uang bersambung dicetak tanpa dipotong kertasnya, sehingga beberapa lembar uang tersambung menjadi satu. Koleksi ini diterbitkan salam jumlah terbatas untuk cendra mata dan koleksi resmi Bank Indonesia.",

        sectionTitle: "Bagaimana Uang Bersambung Dibuat?",

        timeline: [

            {
                title: "Dicetak Bersamaan",

                description:
                    "Uang dicetak beberapa lembar sekeligus dalam satu lembaran besar.",
            },

            {
                title: "Tidak Dipotong",

                description:
                    "Lembaran tersebut tidak dipotong sehingga lembarang uang tetap menyambung.",
            },

            {
                title: "Nomor Urut Berlanjut",

                description:
                    "Nomor seri pada setiap lembar tetap berurutan karena dicetak secara berkesinambungan.",
            },

            {
                title: "Menjadi Koleksi",

                description:
                    "Lembaran uang bersambung dikemas khusus sebagai souvenir dan koleksi resmi Bank Indonesia.",
            },

        ],

        facts:
            "Walaupun dicetak khusus untuk koleksi, uang bersambung tetap merupakan alat pembayaran yang sah di Indonesia.",

        trivia:
            "Uang rupiah bersambung dapat dibeli secara resmi melalui Bank Indonesia dan sering dijadikan koleksi, hadiah, atau mahar.",

        location: "Ruang 26 | Lantai 2",

        locationDesc:
            "Koleksi ini dapat pada Ruangan Numismatik.",

        category: "uang-kertas",

        card: {
            title: "Uang Bersambung",
            year: "2004",
            categoryLabel: "Uang Khusus",
        },
    },

    uangIslam: {

        title: "Kerajaan Islam",

        subtitle: "Uang Era Kerajaan Di Nusantara",

        englishTitle: "The Golden Era Of The Islamic Kingdoms",

        image: "/uang_islam.png",

        headerColor: "#5C0F0B",

        description:
            "Pada abad ke-15 , ketika islam berkembang di Nusantara, beredar berbagai mata uang yang dikeluarkan oleh kerajaan-kerajaan islam seperti Samudra Pasai, Aceh, Jambi, Palembang, Banten, dan Sumenep. Mata uang tersebut umumnya bertuliskan Arab.",

        sectionTitle: "Tentang Mata Uang Kerajaan Islam",

        timeline: [
            {
                description:
                    "Mata uang pada masa ini tidak hanya digunakan sebagai alat tukar, tetapi juga bukti kejayaan peradaban Islam di Nusantara yang terhubung dengan dunia melalui perdagangan.",
            }

        ],

        facts:
            "Beberapa uang era kerajaan sangat dicari kolektor karena keunikannya dan menajdi bukti sejarah penting perkembangan ekonomi di Nusantara.",

        location: "Ruang 26 | Lantai 2",

        locationDesc:
            "Koleksi ini dapat pada Ruangan Numismatik.",

        category: "uang-logam",

        card: {
            title: "Uang Kerajaan Islam",
            year: "Abad Ke-15",
            categoryLabel: "Uang Era Kerajaan Indonesia",
        },
    },

    uangKolonial: {

        title: "Uang Gulden",

        subtitle: "Uang Era Kolonial",

        englishTitle: "Gulden Money In the Archipelago",

        image: "/uang_kolonial.png",

        headerColor: "#215FA7",

        description:
            "Pada abad ke-19, pemerintah Hindia Belanda mulai memperkenalkan mata yang Gulden di Nusantara untuk menggantikan sistem pembayaran sebelumnya dan mengatur perdagangan kolonial.",

        sectionTitle: "Perjalanan Uang Gulden",

        timeline: [

            {
                year: "1815",

                title: "Creatie Emission diterbitkan",

                icon: Landmark,
            },

            {
                year: "1817",

                title: "Gulden Hindia Belanda Mulai Digunakan",

                icon: ShipWheel,
            },

            {
                year: "1832",

                title: "Terbit uang tembaga (Kopergold)",

                icon: CirclePoundSterling,
            },

            {
                year: "1875",

                title: "Muncul Recepis Perak",

                icon: CircleStar,
            },

        ],

        facts:
            "Beberapa uang kolonial menggunakan gambar Raja dan Ratu Belanda sebagai simbol kekuasaan di Hindia Belanda.",

        trivia:
            "Nama “Gulden” berasal dari mata uang Belanda yang digunakan luas di wilayah kolonial Nusantara selama lebih dari satu abad.",

        location: "Ruang 26 | Lantai 2",

        locationDesc:
            "Koleksi ini dapat pada Ruangan Numismatik.",

        category: "kolonial",

        card: {
            title: "Uang Gulden",
            year: "Abad Ke-19",
            categoryLabel: "Uang Era Kolonial",
        },
    },

    mesinCetak: {

        title: "Mesin Cetak ORI",

        englishTitle: "ORI Printing Machine",

        image: "/mesin_uang.png",

        headerColor: "#614129",

        description:
            "Mesin cetak ini digunakan untuk mencetak ORI (Oeang Republik Indonesia), mata uang pertama Indonesia setelah kemerdekaan. Mesin ini menjadi simbol perjuangan ekonomi Indonesia di tengah kondisi perang dan keterbatasan.",

        sectionTitle: "Perjalanan Mesin Cetak",

        timeline: [

            {
                title: "Dibawa ke Yogyakarta",

                description:
                    "Mesin dipindahkan dari Jakarta ke Yogyakarta demi keamanan.",
            },

            {
                title: "Digunakan Mencetak ORI",

                description:
                    "Digunakan untuk mencetak ORI sebagai mata uang Republik Indonesia.",
            },

            {
                title: "Terbit uang tembaga (Kopergold)",

                description:
                    "Kini mesin menjadi koleksi bersejarah di Museum BI.",
            },
        ],

        facts:
            "Mesin ini mampu mencetak sekitar 750 lembar uang per jam pada masanya.",

        trivia:
            "ORI merupakan singkatan dari “Oeang Republik Indonesia”.",

        location: "Ruang 02 | Lantai 1",

        locationDesc:
            "Koleksi ini berada pada R.Jeda percetakan & pengedaran uang.",

        category: "khusus",

        card: {
            title: "Mesin Cetak ORI",
            year: "1946",
            categoryLabel: "Percetakan Uang Nasional",
        },
    },

    grootBoek: {

        title: "Grootboek",

        englishTitle: "The Big Book",

        image: "/grootboek.png",

        headerColor: "#4C3B25",

        description:
            "Buku besar (Grootboek) merupakan jurnal pembukuan dari De Javasche Bank pada tahun 1933 - 1934. Berisi catatan transaksi dan keuangan perusahaan yang ditulis tangan dengan sangat rapi dan teliti.",

        sectionTitle: "Perjalanan Grootboek",

        timeline: [

            {
                title: "Dibuat di Belanda",

                description:
                    "Grootboek dibuat dan digunakan oleh De Javasche Bank.",
            },

            {
                title: "Dibawa ke Indonesia",

                description:
                    "Dibawa ke Hindia Belanda sebagai bagian dari oprasional bank.",
            },

            {
                title: "Menjadi arsip bersejarah",

                description:
                    "Digunakan untuk mencatat transaksi penting dan kini menjadi koleksi bersejarah.",
            },
        ],

        facts:
            "Grootboek ditulis sepenuhnya dengan tangan. Setiap angka dan keterangan dicatat dengan sangat teliti.",

        trivia:
            "Istilah “Grootboek” berasal dari bahasa Belanda yang berarti “Buku Besar”, yaitu buku utama transaksi keuangan.",

        location: "Ruang 02 | Lantai 2",

        locationDesc:
            "Koleksi ini berada pada R.Jeda percetakan & pengedaran uang.",

        category: "arsip",

        card: {
            title: "Grootboek",
            year: "1933",
            categoryLabel: "Administrasi De Javasche Bank",
        },
    },

    emasMoneter: {

        title: "Emas Moneter Indonesia",

        englishTitle: "Indonesia’s Gold Reserves",

        image: "/emas.png",

        headerColor: "#BC6F11",

        description:
            "Batang emas merupakan bagian dari cadangan emas De Javasche Bank yang disimpan dengan standar keamanan tinggi.",

        sectionTitle: "Perjalanan Cadangan Emas",

        timeline: [

            {
                title: "De Javasche Bank",

                description:
                    "Emas dikumpulkan dan disimpan sebagai cadangan untuk menjaga stabilitas sistem moneter.",
            },

            {
                title: "Dibawa ke Indonesia",

                description:
                    "Sebagian emas cadangan dibawa ke Indonesia dan disimpan di Bank Indonesia.",
            },

            {
                title: "Disimpan Dengan Aman",

                description:
                    "Digunakan untuk mencatat transaksi penting dan kini menjadi koleksi bersejarah.",
            },
        ],

        facts: [
            "Merupakan emas murni dengan kadar 99.99%",
            "Berat beragam variasi, mulai dari 1 kg - 12,5 kg.",
        ],

        trivia:
            "Istilah “Grootboek” berasal dari bahasa Belanda yang berarti “Buku Besar”, yaitu buku utama transaksi keuangan.",

        location: "Ruang 02 | Lantai 2",

        locationDesc:
            "Koleksi ini berada pada R.Jeda percetakan & pengedaran uang.",

        category: "khusus",

        card: {
            title: "Emas Moneter",
            year: "Abad Ke-19",
            categoryLabel: "Cadangan Emas Nasional",
        },
    },
};