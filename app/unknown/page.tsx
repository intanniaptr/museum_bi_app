"use client";

import {
    AlertCircle,
    RefreshCw,
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function UnknownPage() {

    const router = useRouter();

    return (

        <main className="min-h-screen bg-[#0F172A] flex justify-center">

            <div className="w-full max-w-[430px] min-h-screen flex flex-col items-center justify-center px-6">

                {/* ICON */}

                <div className="relative">

                    <div className="absolute inset-0 rounded-full bg-[#AE8642]/30 blur-3xl animate-pulse" />

                    <div className="relative w-[140px] h-[140px] rounded-full bg-gradient-to-br from-[#C89B4A] to-[#8B682C] flex items-center justify-center shadow-2xl">

                        <AlertCircle
                            size={80}
                            color="white"
                        />

                    </div>

                </div>

                {/* TITLE */}

                <h1
                    className="text-white text-[28px] mt-8 text-center"
                    style={{
                        fontFamily:
                            "Playfair Display"
                    }}
                >
                    Hasil Belum Dapat Dipastikan
                </h1>

                {/* DESC */}

                <p
                    className="text-[#DADADA] text-[14px] leading-[24px] text-center mt-5"
                    style={{
                        fontFamily:
                            "Poppins"
                    }}
                >
                    Sistem belum memperoleh
                    tingkat keyakinan yang cukup
                    untuk menampilkan informasi
                    koleksi secara akurat.
                </p>

                {/* CARD */}

                <div className="mt-8 bg-white/10 border border-white/10 rounded-[24px] p-5 w-full">

                    <p
                        className="text-white text-[13px] text-center leading-[22px]"
                        style={{
                            fontFamily:
                                "Poppins"
                        }}
                    >
                        Coba gunakan foto yang lebih jelas,
                        pencahayaan yang cukup,
                        dan pastikan objek museum
                        terlihat secara utuh.
                    </p>

                </div>

                {/* BUTTON */}

                <button
                    onClick={() => {

                        sessionStorage.clear();

                        router.push(
                            "/scan"
                        );

                    }}
                    className="mt-10 bg-[#AE8642] px-7 py-4 rounded-full flex items-center gap-3 shadow-xl"
                >

                    <RefreshCw
                        size={18}
                        color="white"
                    />

                    <span
                        className="text-white text-[14px]"
                        style={{
                            fontFamily:
                                "Poppins"
                        }}
                    >
                        Coba Lagi
                    </span>

                </button>

            </div>

        </main>

    );

}