"use client";

/* ==================================================
   IMPORTS
================================================== */
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
    ScanSearch,
    Sparkles,
} from "lucide-react";

/* ==================================================
   LOADING PAGE
================================================== */
export default function LoadingPage() {

    /* ==========================================
       ROUTER
    ========================================== */
    const router =
        useRouter();

    /* ==========================================
       CHECK PREDICTION RESULT
    ========================================== */
    useEffect(() => {

        const checkResult = () => {

            const predictedClass =
                sessionStorage.getItem(
                    "predictedClass"
                );

            const unknownObject =
                sessionStorage.getItem(
                    "unknownObject"
                );

            const predictionError =
                sessionStorage.getItem(
                    "predictionError"
                );

            /* ==========================================
               ERROR STATE
            ========================================== */
            if (predictionError) {

                router.replace(
                    "/error"
                );

                return;

            }

            /* ==========================================
               PREDICTION COMPLETED
            ========================================== */
            if (predictedClass) {

                if (unknownObject) {

                    router.replace(
                        "/unknown"
                    );

                } else {

                    router.replace(
                        "/result"
                    );

                }

                return;

            }

            /* ==========================================
               CONTINUE POLLING
            ========================================== */
            setTimeout(
                checkResult,
                500
            );

        };

        checkResult();

    }, [router]);

    /* ==========================================
       RENDER PAGE
    ========================================== */
    return (

        <main className="min-h-screen bg-[#0F172A] flex justify-center">

            {/* ==========================================
                MOBILE CONTAINER
            ========================================== */}
            <div
                className="
                    w-full
                    max-w-[430px]
                    min-h-screen
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-6
                "
            >

                {/* ==========================================
                    SCAN ICON SECTION
                ========================================== */}
                <div className="relative">

                    {/* ==========================================
                        GLOW EFFECT
                    ========================================== */}
                    <div
                        className="
                            absolute
                            inset-0
                            rounded-full
                            bg-[#AE8642]/30
                            blur-3xl
                            animate-pulse
                        "
                    />

                    {/* ==========================================
                        MAIN ICON CONTAINER
                    ========================================== */}
                    <div
                        className="
                            relative
                            flex
                            h-[140px]
                            w-[140px]
                            items-center
                            justify-center
                            rounded-full
                            bg-gradient-to-br
                            from-[#C89B4A]
                            to-[#8B682C]
                            shadow-2xl
                        "
                    >

                        <ScanSearch
                            size={90}
                            color="white"
                            strokeWidth={2}
                        />

                    </div>

                </div>

                {/* ==========================================
                    PAGE TITLE
                ========================================== */}
                <h1
                    className="
                        mt-5
                        text-center
                        text-[28px]
                        text-white
                    "
                    style={{
                        fontFamily:
                            "Playfair Display",
                    }}
                >
                    Menganalisis Objek
                </h1>

                {/* ==========================================
                    PAGE DESCRIPTION
                ========================================== */}
                <p
                    className="
                        mt-6
                        text-center
                        text-[14px]
                        leading-[24px]
                        text-[#DADADA]
                    "
                    style={{
                        fontFamily:
                            "Poppins",
                    }}
                >
                    Sistem AI sedang mengenali
                    dan mengidentifikasi objek
                    museum yang dipindai.
                </p>

                {/* ==========================================
                    LOADING ANIMATION
                ========================================== */}
                <div
                    className="
                        mt-14
                        flex
                        items-center
                        gap-3
                    "
                >

                    {/* DOT 1 */}
                    <div
                        className="
                            h-3
                            w-3
                            rounded-full
                            bg-[#AE8642]
                            animate-bounce
                        "
                    />

                    {/* DOT 2 */}
                    <div
                        className="
                            h-3
                            w-3
                            rounded-full
                            bg-[#AE8642]
                            animate-bounce
                        "
                        style={{
                            animationDelay:
                                "0.2s",
                        }}
                    />

                    {/* DOT 3 */}
                    <div
                        className="
                            h-3
                            w-3
                            rounded-full
                            bg-[#AE8642]
                            animate-bounce
                        "
                        style={{
                            animationDelay:
                                "0.4s",
                        }}
                    />

                </div>

                {/* ==========================================
                    AI STATUS BADGE
                ========================================== */}
                <div
                    className="
                        mt-10
                        flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        px-3
                        py-2
                    "
                >

                    <Sparkles
                        size={18}
                        color="#AE8642"
                    />

                    <p
                        className="
                            text-[10px]
                            text-white
                        "
                        style={{
                            fontFamily:
                                "Poppins",
                        }}
                    >
                        Deep Learning Recognition Active
                    </p>

                </div>

            </div>

        </main>

    );

}