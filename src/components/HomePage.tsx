"use client";

import Link from "next/link";
import { ScanSearch } from "lucide-react";
import { useEffect, useState } from "react";

import BottomNavbar from "@/components/BottomNavbar";

/* ==================================================
   TYPES
================================================== */
type ScanHistory = {
  title: string;
  category: string;
  image: string;
  confidence: string;
};

/* ==================================================
   CATEGORY DATA
================================================== */
const categoryData = [
  {
    title: "Uang Kertas",
    image: "/kertas.png",
    slug: "uang-kertas",
  },
  {
    title: "Uang Logam",
    image: "/logam.png",
    slug: "uang-logam",
  },
  {
    title: "Kolonial",
    image: "/kolonial.png",
    slug: "kolonial",
  },
  {
    title: "Arsip",
    image: "/arsip.png",
    slug: "arsip",
  },
  {
    title: "Khusus",
    image: "/khusus.png",
    slug: "khusus",
  },
];

/* ==================================================
   HOME PAGE
================================================== */
export default function HomePage() {

  /* ==========================================
      STATES
  ========================================== */
  const [historyData, setHistoryData] =
    useState<ScanHistory[]>([]);

  /* ==========================================
      LOAD SCAN HISTORY
  ========================================== */
  useEffect(() => {

    const history =
      JSON.parse(
        localStorage.getItem(
          "scanHistory"
        ) || "[]"
      );

    setHistoryData(history);

  }, []);

  /* ==========================================
      RENDER PAGE
  ========================================== */
  return (

    <main className="min-h-screen bg-[#F8F6F4] flex justify-center">

      {/* ==========================================
          MOBILE CONTAINER
      ========================================== */}
      <div className="w-full max-w-[430px] min-h-screen px-5 pt-5 pb-30">

        {/* ==========================================
            STATUS BAR SPACING
        ========================================== */}
        <div className="h-2" />

        {/* ==========================================
            HEADER
        ========================================== */}
        <div className="flex items-start justify-between">

          <div>

            <p
              className="mb-2 text-[14px] text-[#1A1A1A]"
              style={{ fontFamily: "Poppins" }}
            >
              Selamat Datang,
            </p>

            <h1
              className="text-[20px] leading-tight text-[#0F172A]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Jelajahi Koleksi
              <br />
              Museum Bank Indonesia
            </h1>

          </div>

        </div>
        {/* ==========================================
            SCAN CARD
        ========================================== */}
        <div className="mt-3 flex items-center justify-between rounded-[30px] bg-[#0F172A] px-6 py-5">

          {/* ==========================================
              LEFT CONTENT
          ========================================== */}
          <div>

            <h2
              className="mb-3 text-[20px] text-white"
              style={{ fontFamily: "Playfair Display" }}
            >
              Scan Objek
            </h2>

            <p
              className="text-[14px] leading-[20px] text-[#DADADA]"
              style={{ fontFamily: "Poppins" }}
            >
              Kenali objek museum
              <br />
              melalui kamera
            </p>

            {/* ==========================================
                SCAN BUTTON
            ========================================== */}
            <Link
              href="/scan"
              className="
                mt-5
                inline-block
                rounded-full
                bg-gradient-to-br
                from-[#C89B4A]
                to-[#8B682C]
                px-6
                py-2.5
                text-[14px]
                text-white
                shadow-xl
              "
              style={{ fontFamily: "Poppins" }}
            >
              Mulai Scan
            </Link>

          </div>

          {/* ==========================================
              SCAN ICON
          ========================================== */}
          <ScanSearch
            size={100}
            color="#AE8642"
            strokeWidth={1.8}
          />

        </div>
        {/* ==========================================
            GUIDE CARD
            ========================================== */}
        <Link href="/guide">

          <div
            className="
      mt-2
      rounded-[24px]
      border
      border-[#D9B26A]
      bg-[#F9F5EE]
      px-3
    "
          >

            <div className="flex items-center">

              {/* LEFT */}
              <div className="flex-1">

                <h2
                  className="text-[18px] text-[#2B1E12] leading-tight"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  ✨ Kenali Fitur BIstory
                </h2>

                <p
                  className="mt-3 text-[14px] leading-[24px] text-[#333]"
                  style={{ fontFamily: "Poppins" }}
                >
                  Pelajari cara menggunakan fitur aplikasi untuk mengenali koleksi museum.
                </p>

                <div
                  className="
    mt-4
    inline-block
    rounded-full
    bg-gradient-to-br
    from-[#C89B4A]
    to-[#8B682C]
    px-6
    py-3
    text-[14px]
    text-white
    shadow-xl
  "
                  style={{ fontFamily: "Poppins" }}
                >
                  Pelajari Fitur
                </div>

              </div>

              {/* RIGHT IMAGE */}
              <img
                src="/museum-guide.png"
                alt="Museum BI"
                className="
                    ml-2
                    translate-y-10
                    w-[140px]
                    flex-shrink-0
                  "
              />

            </div>

          </div>

        </Link>
        {/* ==========================================
            CATEGORY SECTION
        ========================================== */}
        <div className="mt-3" >

          <h2
            className="mb-3 text-[20px] text-[#1A1A1A]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Kategori Koleksi
          </h2>
        </div>

        {/* ==========================================
              CATEGORY GRID
          ========================================== */}
        <div className="grid grid-cols-5 gap-2">

          {categoryData.map((item) => (

            <Link
              key={item.slug}
              href={`/kategori/${item.slug}`}
              className="flex flex-col items-center"
            >

              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#C89B4A] to-[#8B682C] shadow-md">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[42px] w-[42px] object-contain"
                />

              </div>

              <p
                className="mt-2 text-center text-[11px] text-[#1A1A1A]"
                style={{ fontFamily: "Poppins" }}
              >
                {item.title}
              </p>

            </Link>

          ))}

        </div>

        {/* ==========================================
            SCAN HISTORY
        ========================================== */}
        < div className="mt-3" >

          <div className="mb-3 flex items-center justify-between">

            <h2
              className="text-[20px] text-[#1A1A1A]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Riwayat Scan
            </h2>

          </div>

          {/* ==========================================
              HISTORY CONTENT
          ========================================== */}
          {
            historyData.length > 0 ? (

              historyData.map((item, index) => (

                <div
                  key={index}
                  className="
                  mb-2
                  flex
                  items-center
                  gap-4
                  rounded-[20px]
                  border
                  border-[#DADADA]
                  bg-white
                  p-3
                "
                >

                  {/* ==========================================
                    HISTORY IMAGE
                ========================================== */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[70px] rounded-[10px] object-contain"
                  />

                  {/* ==========================================
                    HISTORY INFORMATION
                ========================================== */}
                  <div>

                    <h3
                      className="mb-2 text-[16px] text-[#0F172A]"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mb-1 text-[12px] text-[#1A1A1A]"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {item.category}
                    </p>

                    <p
                      className="text-[10px] text-[#4E7B3C]"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {item.confidence}% Tingkat Keyakinan
                    </p>

                  </div>

                </div>

              ))

            ) : (

              <div className="rounded-[20px] border border-[#DADADA] bg-white p-4 text-center">

                <p
                  className="text-[12px] text-[#666]"
                  style={{ fontFamily: "Poppins" }}
                >
                  Belum ada riwayat scan
                </p>

              </div>

            )
          }


          {/* ==========================================
            BOTTOM NAVBAR
        ========================================== */}
          <BottomNavbar />

        </div>

      </div>

    </main>

  );

}