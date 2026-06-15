"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ScanSearch,
    BookOpen,
    MapPin,
    Building2,
    Lightbulb
} from "lucide-react";

const features = [
    {
        icon: ScanSearch,
        title: "Scan Koleksi",
        desc: "Kenali objek museum menggunakan kamera AI.",
    },
    {
        icon: BookOpen,
        title: "Informasi Koleksi",
        desc: "Lihat deskripsi, fakta, dan sejarah koleksi.",
    },
    {
        icon: MapPin,
        title: "Lokasi Koleksi",
        desc: "Temukan posisi koleksi di area museum.",
    },
    {
        icon: Building2,
        title: "Museum BI",
        desc: "Jelajahi informasi Museum Bank Indonesia.",
    },
];

const steps = [
    "Buka Scan",
    "Arahkan Kamera",
    "Identifikasi",
    "Lihat Informasi",
    "Jelajahi Koleksi",
];

const collections = [
    { title: "Uang Kertas", image: "/kertas.png" },
    { title: "Uang Logam", image: "/logam.png" },
    { title: "Kolonial", image: "/kolonial.png" },
    { title: "Arsip", image: "/arsip.png" },
    { title: "Khusus", image: "/khusus.png" },
];

export default function GuideHero() {
    return (
        <div>

            {/* ==========================================
            HERO
            ========================================== */}
            <section
                className="
    relative
    mt-3
    overflow-hidden
    rounded-[28px]
    bg-[#0F172A]
    text-white
    px-5
    pt-5
    pb-5
  "
            >

                <Link href="/home">
                    <ArrowLeft size={22} />
                </Link>

                <div className="mt-4 max-w-[180px]">

                    <h1
                        className="text-[25px] leading-tight"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        Fitur Aplikasi
                        <br />
                        BIstory
                    </h1>

                    <p
                        className="mt-3 text-[12px] leading-[22px] text-[#DADADA]"
                        style={{ fontFamily: "Poppins" }}
                    >
                        Pelajari fitur yang tersedia untuk membantu mengenali koleksi dan menjelajahi Museum Bank Indonesia.
                    </p>

                </div>

                <img
                    src="/museum-guide.png"
                    alt="Museum BI"
                    className="
      absolute
      bottom-[-65px]
      right-[-5px]
      w-[220px]
      object-contain
    "
                />

            </section>

            {/* ==========================================
                CONTENT
                ========================================== */}
            <div className="mt-3">

                <section
                    className="
    rounded-[24px]
    border
    border-[#E6D8B8]
    bg-[#FFF8E9]
    p-5
  "
                >

                    <div className="flex items-center gap-2 mb-3">

                        <Building2
                            size={20}
                            color="#AE8642"
                        />

                        <h2
                            className="text-[#0F172A] text-[22px]"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Tentang Aplikasi
                        </h2>

                    </div>

                    <div className="border-l-4 border-[#C89B4A] pl-4">

                        <p
                            className="text-[13px] leading-[24px] text-[#555]"
                            style={{ fontFamily: "Poppins" }}
                        >
                            BIstory merupakan aplikasi klasifikasi koleksi
                            Museum Bank Indonesia berbasis Convolutional Neural
                            Network (CNN) yang dikembangkan untuk membantu
                            pengunjung mengenali objek museum secara interaktif.
                        </p>

                    </div>

                </section>
                {/* ==========================================
            FITUR UTAMA
            ========================================== */}
                <section>

                    <h2
                        className="text-[24px] text-[#0F172A]"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        Fitur Utama
                    </h2>

                    <div className="mt-4 grid grid-cols-2 gap-3">

                        {features.map((item, index) => {
                            const Icon = item.icon;

                            const isDark =
                                index === 0 || index === 3;

                            return (
                                <div
                                    key={item.title}
                                    className={`
        rounded-[24px]
        border
        p-5
        min-h-[180px]
        ${isDark
                                            ? "bg-[#0F172A] border-[#0F172A] text-white"
                                            : "bg-[#FFF8E9] border-[#E6D8B8] text-[#0F172A]"
                                        }
      `}
                                >

                                    <div
                                        className={`
          mb-4
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          ${isDark
                                                ? "bg-[#C89B4A]"
                                                : "bg-[#0F172A]"
                                            }
        `}
                                    >
                                        <Icon
                                            size={26}
                                            color={isDark ? "#0F172A" : "#C89B4A"}
                                        />
                                    </div>

                                    <h3
                                        className="mb-2 text-[18px]"
                                        style={{ fontFamily: "Playfair Display" }}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`
          text-[13px]
          leading-[22px]
          ${isDark
                                                ? "text-[#E5E7EB]"
                                                : "text-[#555]"
                                            }
        `}
                                        style={{ fontFamily: "Poppins" }}
                                    >
                                        {item.desc}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </section>

                {/* ==========================================
                CARA MENGGUNAKAN
                ========================================== */}
                <section className="mt-8">

                    <h2
                        className="text-[24px] text-[#0F172A]"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        Cara Menggunakan
                    </h2>

                    <p
                        className="mt-2 text-[13px] text-[#666]"
                        style={{ fontFamily: "Poppins" }}
                    >
                        Ikuti langkah berikut untuk mengenali koleksi Museum Bank Indonesia.
                    </p>

                    <div className="mt-6 flex items-start justify-between">

                        {steps.map((step, index) => (

                            <div
                                key={index}
                                className="relative flex flex-col items-center w-[65px]"
                            >

                                {/* GARIS */}
                                {index !== steps.length - 1 && (
                                    <div
                                        className="
              absolute
              top-[20px]
              left-[42px]
              w-[45px]
              border-t-2
              border-dashed
              border-[#D9B26A]
            "
                                    />
                                )}

                                {/* BULATAN */}
                                <div
                                    className="
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#F3E5C5]
            text-[#8B682C]
            font-semibold
            shadow-sm
          "
                                >
                                    {index + 1}
                                </div>

                                {/* TEXT */}
                                <p
                                    className="
            mt-3
            text-center
            text-[11px]
            leading-[16px]
            text-[#333]
          "
                                    style={{ fontFamily: "Poppins" }}
                                >
                                    {step}
                                </p>

                            </div>

                        ))}

                    </div>

                </section>

                {/* ==========================================
                TIPS
                ========================================== */}
                <section
                    className="
    relative
    mt-8
    overflow-hidden
    rounded-[24px]
    bg-gradient-to-br
    from-[#C39A55]
    to-[#A37A3F]
    p-5
  "
                >

                    <div className="flex items-center gap-2 mb-4">

                        <Lightbulb
                            size={18}
                            color="#FBF5ED"
                        />

                        <h3
                            className="text-[#FBF5ED] text-[20px]"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Tips Penggunaan
                        </h3>

                    </div>

                    <div className="border-l-4 border-[#FBF5ED] pl-4">

                        <ul
                            className="
        space-y-2
        text-[14px]
        leading-[20px]
        text-[#0F172A]
      "
                            style={{ fontFamily: "Poppins" }}
                        >
                            <li>• Pastikan objek terlihat jelas.</li>
                            <li>• Gunakan pencahayaan yang cukup.</li>
                            <li>• Hindari gambar yang buram.</li>
                            <li>• Fokuskan kamera pada satu objek.</li>
                        </ul>

                    </div>

                    <Lightbulb
                        size={90}
                        className="
      absolute
      right-[-10px]
      bottom-[-10px]
      text-white
      opacity-10
    "
                    />

                </section>

                {/* ==========================================
                    COPYRIGHT
                ========================================== */}
                <div className="mt-8 pb-4 text-center">

                    <p
                        className="text-[14px] text-[#AE8642]"
                        style={{ fontFamily: "Poppins" }}
                    >
                        © 2026 Museum BI AI
                    </p>

                    <p
                        className="mt-1 text-[12px] text-[#777]"
                        style={{ fontFamily: "Poppins" }}
                    >
                        Intannia Putri • Universitas Gunadarma
                    </p>

                </div>

            </div>

        </div>
    );
}