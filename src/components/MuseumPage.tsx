"use client";

/* ==================================================
   IMPORTS
================================================== */
import BottomNavbar from "@/components/BottomNavbar";

import {
    MapPin,
    CalendarDays,
    Camera,
    Building2,
    Ticket,
} from "lucide-react";

/* ==================================================
   MUSEUM PAGE
================================================== */
export default function MuseumPage() {

    return (
        <main className="min-h-screen bg-[#0F172A] flex justify-center">

            {/* ==========================================
                MOBILE CONTAINER
                ========================================== */}
            <div className="w-full max-w-[430px] min-h-screen px-5 pt-5 pb-30">

             {/* ==========================================
                STATUS BAR SPACING
                ========================================== */}
                <div className="h-2" />

            {/* ==========================================
                PAGE TITLE
                ========================================== */}
                <div className="flex justify-center">

                    <h1
                        className="text-white text-[16px] font-semibold"
                        style={{ fontFamily: "Poppins" }}
                    >
                        Tentang Museum
                    </h1>

                </div>

                {/* ==========================================
                    HERO SECTION
                    ========================================== */}
                <div className="bg-[#E8DDCB] rounded-[30px] overflow-hidden mt-3 shadow-xl">

                    {/* ==========================================
                        HERO IMAGE
                        ========================================== */}
                    <img
                        src="/museum_cover.png"
                        alt="Museum BI"
                        className="w-full h-[160px] object-cover"
                    />

                    {/* ==========================================
                        HERO CONTENT
                        ========================================== */}
                    <div className="px-5 py-3 bg-gradient-to-br from-[#6D562F] to-[#C5A876] shadow-xl">

                        <h2
                            className="text-[#D7CCB8] text-[24px] text-center font-bold"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Museum Bank Indonesia
                        </h2>
                        {/* ==========================================
                            MUSEUM DESCRIPTION
                            ========================================== */}
                        <p
                            className="text-[#3A3A3A] text-[13px] leading-[20px] mt-3 text-justify"
                            style={{ fontFamily: "Poppins" }}
                        >
                            Museum Bank Indonesia merupakan museum yang menempati
                            bekas gedung bersejarah De Javasche Bank di kawasan Kota
                            Tua Jakarta. Museum menyajikan perjalanan sistem keuangan
                            dan perkembangan Bank Indonesia.
                        </p>

                    </div>

                </div>

                {/* ==========================================
                    MUSEUM STATISTICS
                    ========================================== */}
                <div className="grid grid-cols-4 gap-3 mt-3">

                    {[
                        {
                            icon: Camera,
                            title: "1000+",
                            subtitle: "Koleksi",
                        },
                        {
                            icon: Building2,
                            title: "7",
                            subtitle: "Galeri",
                        },
                        {
                            icon: CalendarDays,
                            title: "2009",
                            subtitle: "Sejak",
                        },
                        {
                            icon: MapPin,
                            title: "Jakarta",
                            subtitle: "Lokasi",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#D9D9D9] rounded-[25px] py-3 flex flex-col items-center justify-center shadow-md"
                        >

                            <div className="w-[42px] h-[42px] min-w-[42px] rounded-full bg-[#FBF5EE] flex items-center justify-center">

                                <item.icon
                                    size={24}
                                    color="#AE8642"
                                />

                            </div>

                            <h3
                                className="text-[#0F172A] text-[16px] mt-2 font-semibold"
                                style={{ fontFamily: "Poppins" }}
                            >
                                {item.title}
                            </h3>

                            <p
                                className="text-[#5A5A5A] text-[10px]"
                                style={{ fontFamily: "Poppins" }}
                            >
                                {item.subtitle}
                            </p>

                        </div>
                    ))}
                </div>

                {/* ==========================================
                    LOCATION SECTION
                    ========================================== */}
                <div className="bg-[#F2EADC] rounded-[25px] p-3 mt-3 shadow-md">

                    <div className="flex items-center gap-2 mb-3">

                        <MapPin
                            size={20}
                            color="#AE8642"
                        />

                        <h2
                            className="text-[#0F172A] text-[20px] font-semibold"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Lokasi
                        </h2>

                    </div>

                    <div className="flex gap-4">

                        <div className="flex-1">

                            <p
                                className="text-[#3A3A3A] text-[12px] leading-[24px]"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Jl. Pintu Besar Utara No.3
                                Kota Tua, Jakarta Barat,
                                Daerah Khusus Ibukota Jakarta
                            </p>

                        </div>

                        <a
                            href="https://maps.app.goo.gl/GpqEManmxZgF1dez5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <iframe
                                src="https://www.google.com/maps?q=Museum+Bank+Indonesia&output=embed"
                                className="w-[100px] h-[80px] rounded-[18px] border-0"
                                loading="lazy"
                            ></iframe>

                        </a>

                    </div>

                </div>

                {/* ==========================================
                    VISITOR INFORMATION
                    ========================================== */}
                <div className="bg-[#F2EADC] rounded-[25px] p-3 mt-3 shadow-md">
                    <div className="flex items-center gap-3 mb-5">

                        <Ticket
                            size={22}
                            color="#5B4724"
                        />

                        <h2
                            className="text-[#0F172A] text-[20px] font-semibold"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Informasi Kunjungan
                        </h2>

                    </div>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-5">
                        <div>

                            <p
                                className="text-[#5B4724] text-[12px] mb-1"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Jam Buka
                            </p>

                            <h3
                                className="text-[#0F172A] text-[14px] font-semibold"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Selasa - Minggu
                            </h3>

                            <p
                                className="text-[#0F172A] text-[12px] mt-1"
                                style={{ fontFamily: "Poppins" }}
                            >
                                08.00–12.00, 13.00–15.00
                            </p>

                            <h3
                                className="text-[#0F172A] text-[14px] font-semibold mt-3"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Senin
                            </h3>

                            <p
                                className="text-[#0F172A] text-[12px] mt-1"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Tutup
                            </p>

                        </div>

                        {/* ==========================================
                            TICKET INFORMATION
                            ========================================== */}
                        <div>

                            <p
                                className="text-[#5B4724] text-[12px] mb-1"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Harga Tiket
                            </p>

                            <h3
                                className="text-[#0F172A] text-[14px] font-semibold"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Tiket Individu
                            </h3>

                            <p
                                className="text-[#0F172A] text-[12px] mt-1"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Rp5.000 / orang
                            </p>

                            <h3
                                className="text-[#0F172A] text-[14px] font-semibold mt-3"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Pelajar / Mahasiswa
                            </h3>

                            <p
                                className="text-[#0F172A] text-[12px] mt-1 leading-[15px]"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Gratis (Menunjukkan kartu pelajar aktif)
                            </p>

                        </div>

                    </div>

                </div>

                {/* ==========================================
                    FLOOR PLAN SECTION
                    ========================================== */}
                <div className="bg-[#F2EADC] rounded-[25px] p-3 mt-3 shadow-md">

                    <h2
                        className="text-[#0F172A] text-[20px] mb-3 font-semibold"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        Denah Museum
                    </h2>

                    <div className="space-y-3">

                        <img
                            src="/denah_lantai_1.png"
                            alt="Lantai 1"
                            className="rounded-[20px]"
                        />

                        <img
                            src="/denah_lantai_2.png"
                            alt="Lantai 2"
                            className="rounded-[20px]"
                        />

                    </div>

                </div>

                {/* ==========================================
                    BOTTOM NAVBAR
                    ========================================= */}
                <BottomNavbar />
            </div>
        </main>
    );
}