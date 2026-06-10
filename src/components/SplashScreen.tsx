"use client";

/* ==================================================
   IMPORTS
================================================== */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/* ==================================================
   SPLASH SCREEN
================================================== */
export default function SplashScreen() {

  /* ==========================================
      HOOKS
  ========================================== */
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

      }, 1800);

    const redirectTimer =
      setTimeout(() => {

        router.replace("/home");

      }, 4000);

    return () => {

      clearTimeout(fadeTimer);

      clearTimeout(
        redirectTimer
      );

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
        ${
          fadeOut
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
            pt-12
          "
        >

          {/* ==========================================
              LOGO
          ========================================== */}
          <img
            src="/Logo.png"
            alt="Museum BI Logo"
            className="w-[80px] mb-5"
          />

          {/* ==========================================
              TITLE
          ========================================== */}
          <div className="text-center">

            <h1
              className="
                text-[#AE8642]
                text-[40px]
                leading-none
                mt-5
              "
              style={{
                fontFamily:
                  "Playfair Display"
              }}
            >
              MUSEUM BI
            </h1>

            <h2
              className="
                text-[#DADADA]
                text-[40px]
                leading-none
                mt-1
                mb-5
              "
              style={{
                fontFamily:
                  "Playfair Display"
              }}
            >
              AI GUIDE
            </h2>

          </div>

          {/* ==========================================
              SUBTITLE
          ========================================== */}
          <div
            className="
              text-[#DADADA]
              text-center
              mt-5
              text-white
            "
            style={{
              fontFamily:
                "Poppins"
            }}
          >

            <p className="text-[14px] font-medium">
              Jelajahi Sejarah Keuangan
            </p>

            <p className="text-[14px] font-medium mt-1">
              Indonesia Dengan AI
            </p>

          </div>

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

    </main>

  );
}