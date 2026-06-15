"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {

  const router = useRouter();

  const [fadeOut, setFadeOut] =
    useState(false);

  /* ==========================================
     SPLASH TIMER
 ========================================== */
  useEffect(() => {

    const fadeTimer =
      setTimeout(() => {

        setFadeOut(true);

      }, 2500);

    const redirectTimer =
      setTimeout(() => {

        router.replace("/home");

      }, 3200);

    return () => {

      clearTimeout(fadeTimer);

      clearTimeout(redirectTimer);

    };

  }, [router]);

  return (

    <main
      className={`
    h-screen
    bg-[#0F172A]
    overflow-hidden
    transition-opacity
    duration-700
    ${fadeOut
          ? "opacity-0"
          : "opacity-100"
        }
  `}
    >

      {/* ==========================================
          MOBILE CONTAINER
      ========================================== */}
      <div
        className="
          w-full
          max-w-full
          min-h-screen
          bg-[#0F172A]
          flex
          flex-col
          items-center
        "
      >

        {/* ==========================================
            TOP CONTENT
        ========================================== */}
        <div
          className="
            flex
            flex-col
            items-center
            pt-20
          "
        >

          {/* ==========================================
              LOGO
          ========================================== */}
          <div
            className="
              mt-5
              mb-3
              flex
              h-[140px]
              w-[140px]
              items-center
              justify-center
              rounded-full
              bg-[#F1E7D3]
              shadow-xl
            "
          >

            <img
              src="/Logo_21.png"
              alt="BIstory Logo"
              className="w-[95px] object-contain"
            />

          </div>

          {/* ==========================================
              TITLE
          ========================================== */}
          <div className="text-center">

            <h1
              className="
                  text-[52px]
                  tracking-wide
                  leading-none
                  mt-5
                  bg-gradient-to-r
                  from-[#E3C27A]
                  via-[#C89B4A]
                  to-[#8B682C]
                  bg-clip-text
                  text-transparent
                "
              style={{
                fontFamily:
                  "Playfair Display"
              }}
            >
              BIstory
            </h1>

          </div>

          {/* ==========================================
              SUBTITLE
          ========================================== */}
          <div
            className="
    text-center
    mt-5
  "
          >

            {/* GARIS */}
            <div className="flex items-center justify-center gap-3 mb-4">

              <div className="w-20 h-[1px] bg-[#C89B4A]" />

              <div className="w-2 h-2 rounded-full bg-[#C89B4A]" />

              <div className="w-20 h-[1px] bg-[#C89B4A]" />

            </div>

            {/* TAGLINE */}
            <p
              className="
      text-[15px]
      text-[#E5E7EB]
      font-medium
      leading-[26px]
    "
              style={{
                fontFamily: "Poppins"
              }}
            >
              Discover the Story Behind
            </p>

            <p
              className="
      text-[15px]
      text-[#E5E7EB]
      font-medium
      mb-18
      leading-[26px]
    "
              style={{
                fontFamily: "Poppins"
              }}
            >
              Every Museum Collection
            </p>

          </div>
          {/* ==========================================
            BUILDING IMAGE
        ========================================== */}
          <div className="w-full mt-auto">

            <img
              src="/museum_bi.png"
              alt="Museum BI"
              className="
              w-full
              h-auto
              object-contain
            "
            />

          </div>

        </div>

      </div>

    </main>

  );

}
