"use client";
/* ==================================================
   IMPORTS
================================================== */
import {
    ArrowLeft,
    House,
    Landmark,
    ScanSearch,
    Lightbulb,
    MapPin,
} from "lucide-react";

import { museumData } from "@/data/museumData";
import BottomNavbar from "@/components/BottomNavbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/* ==================================================
   TYPES
================================================== */
type ResultData = {
    title: string;

    subtitle?: string;

    englishTitle?: string;

    image: string;

    headerColor: string;

    description: string;

    sectionTitle?: string;

    timeline?: any[];

    facts?: string | string[];

    trivia?: string;

    location: string;

    locationDesc: string;
};

/* ==================================================
   RESULT PAGE
================================================== */
export default function ResultPage() {

    const router = useRouter();
    const [data, setData] =
        useState<any>(null);

    const [confidence, setConfidence] =
        useState("");

    const confidenceNumber =
        Number(confidence);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const predictedClass =
            sessionStorage.getItem(
                "predictedClass"
            );

        const confidenceValue =
            sessionStorage.getItem(
                "confidence"
            );

        if (
            predictedClass &&
            confidenceValue &&
            museumData[
            predictedClass as keyof typeof museumData
            ]
        ) {

            const museumItem =
                museumData[
                predictedClass as keyof typeof museumData
                ];

            const oldHistory =
                JSON.parse(
                    localStorage.getItem(
                        "scanHistory"
                    ) || "[]"
                );

            const latestItem =
                oldHistory[0];

            if (
                latestItem?.title !== museumItem.title
            ) {

                const newHistory = [
                    {
                        title: museumItem.title,
                        category:
                            "Koleksi Museum",
                        image: museumItem.image,
                        confidence:
                            confidenceValue,
                    },
                    ...oldHistory,
                ].slice(0, 2);

                localStorage.setItem(
                    "scanHistory",
                    JSON.stringify(
                        newHistory
                    )
                );

            }
            console.log(
                "PREDICTED CLASS:",
                predictedClass
            );

            console.log(
                "AVAILABLE KEYS:",
                Object.keys(museumData)
            );

            if (
                predictedClass &&
                museumData[
                predictedClass as keyof typeof museumData
                ]
            ) {

                setData(
                    museumData[
                    predictedClass as keyof typeof museumData
                    ]
                );

            }

            if (confidenceValue) {

                setConfidence(
                    confidenceValue
                );

            }

            setLoading(false);

        }

        }, []);

    if (loading) {

        return (
            <main className="min-h-screen bg-[#0F172A] flex items-center justify-center">
                <p className="text-white">
                    Memuat hasil...
                </p>
            </main>
        );

    }

    if (!data) {

        return (
            <main className="min-h-screen bg-[#0F172A] flex items-center justify-center">
                <div className="text-center text-white">

                    <h2 className="text-xl">
                        Objek Tidak Ditemukan
                    </h2>

                    <p className="mt-2 text-sm opacity-80">
                        Prediksi tidak cocok dengan museumData
                    </p>

                </div>
            </main>
        );

    }

    return (
        <main className="min-h-screen bg-[#0F172A] flex justify-center">

            {/* MOBILE CONTAINER */}
            <div className="w-full max-w-[430px] min-h-screen px-5 pt-5 pb-[180px]">

                {/* STATUS SPACE */}
                <div className="h-2" />

                {/* HEADER */}
                <div className="relative flex items-center justify-center h-[40px]">

                    <button
                        className="absolute left-0 z-50"
                        onClick={() => {

                            sessionStorage.removeItem(
                                "predictedClass"
                            );

                            sessionStorage.removeItem(
                                "confidence"
                            );

                            sessionStorage.removeItem(
                                "predictionReady"
                            );

                            sessionStorage.removeItem(
                                "uploadedImage"
                            );

                            router.push("/scan");

                        }}
                    >

                        <ArrowLeft
                            size={28}
                            color="white"
                        />

                    </button>

                    <h1
                        className="text-white text-[16px]"
                        style={{
                            fontFamily: "Poppins"
                        }}
                    >
                        Hasil Pengenalan
                    </h1>

                </div>

                {/* IMAGE */}
                <div className="mt-8 rounded-[28px] overflow-hidden">

                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-[180px] object-cover"
                    />

                </div>

                {/* HERO CARD */}
                <div
                    className="rounded-[28px] px-6 py-2 -mt-1 relative shadow-xl"
                    style={{
                        backgroundColor: data.headerColor,
                    }}
                >

                    <p
                        className="text-[#FBF5ED] text-[12px] text-center opacity-90"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {data.subtitle}
                    </p>

                    <h2
                        className="text-white text-[32px] text-center leading-none mt-3"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        {data.title}
                    </h2>

                    <div className="mt-4 flex justify-center">

                        <div className="bg-white/20 rounded-full px-4 py-2">

                            <p
                                className="text-white text-[14px] font-semibold"
                                style={{
                                    fontFamily: "Poppins"
                                }}
                            >
                                Confidence: {confidence}%
                            </p>

                        </div>

                    </div>

                    <p
                        className="text-[#C5A876] text-[12px] text-center italic mt-3"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {data.englishTitle}
                    </p>

                </div>

                {confidenceNumber < 70 && (

                    <div className="bg-red-100 border border-red-300 rounded-[20px] p-4 mt-3">

                        <p className="text-red-700 text-center text-sm">

                            Tingkat keyakinan rendah.
                            Silakan coba foto lain.

                        </p>

                    </div>

                )}

                {/* DESCRIPTION */}
                <div className="bg-[#F8F6F4] rounded-[25px] p-4 mt-3 border border-[#D6C4A7] shadow-md">

                    <h2
                        className="text-[#2B1D0E] text-[20px] text-center mb-2"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        Deskripsi
                    </h2>

                    <p
                        className="text-[#3A3A3A] text-[12px] leading-[20px] text-justify"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {data.description}
                    </p>

                </div>

                {/* TIMELINE */}
                <div className="bg-[#E9E1D4] rounded-[25px] p-4 mt-3 shadow-md">

                    <h2
                        className="text-[#2B1D0E] text-[20px] mb-3"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        {data.sectionTitle}
                    </h2>

                    <div className="space-y-6">

                        {data.timeline?.map((item: any, index: number) => {
                            const Icon: any = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="flex gap-4"
                                >

                                    {/* ICON */}
                                    <div className="flex flex-col items-center">

                                        {Icon ? (

                                            <>
                                                <div className="w-[30px] h-[30px] min-w-[30px] rounded-full bg-[#F8F6F4] flex items-center justify-center">

                                                    <Icon
                                                        size={16}
                                                        color="#AE8642"
                                                    />

                                                </div>

                                                {index !== (data.timeline?.length ?? 0) - 1 && (

                                                    <div className="w-[2px] flex-1 bg-[#AE8642] mt-2" />

                                                )}
                                            </>

                                        ) : (

                                            <>
                                                <div className="w-[2px] h-full bg-[#AE8642]" />
                                            </>

                                        )}

                                    </div>

                                    {/* TEXT */}
                                    <div>

                                        <h3
                                            className="text-[#7A5A2B] text-[15px] italic"
                                            style={{ fontFamily: "Poppins" }}
                                        >
                                            {item.year}
                                        </h3>

                                        <h4
                                            className="text-[#1A1A1A] text-[14px] font-semibold mt-1"
                                            style={{ fontFamily: "Poppins" }}
                                        >
                                            {item.title}
                                        </h4>

                                        <p
                                            className="text-[#3A3A3A] text-[12px] leading-[24px] mt-1"
                                            style={{ fontFamily: "Poppins" }}
                                        >
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

                {/* FACTS + TRIVIA */}
                {(data.facts || data.trivia) && (

                    <div className="grid gap-3 mt-3">

                        {/* FACTS */}
                        {data.facts && (

                            <div className="relative overflow-hidden bg-gradient-to-br from-[#6D562F] to-[#C5A876] rounded-[22px] p-4 shadow-md text-justify">

                                <div className="relative z-10 flex items-start justify-between gap-3">

                                    <div>

                                        <div className="flex items-center gap-2 mb-3">

                                            <Lightbulb
                                                size={18}
                                                color="#FBF5ED"
                                            />

                                            <h3
                                                className="text-[#FBF5ED] text-[20px]"
                                                style={{ fontFamily: "Playfair Display" }}
                                            >
                                                Fakta Menarik
                                            </h3>

                                        </div>

                                        <div
                                            className="text-[#1A1A1A] text-[12px] leading-[20px]"
                                            style={{ fontFamily: "Poppins" }}
                                        >

                                            {Array.isArray(data.facts) ? (

                                                <ol className="list-decimal pl-5 space-y-1">

                                                    {data.facts.map((fact: string, index: number) => (

                                                        <li key={index}>
                                                            {fact}
                                                        </li>

                                                    ))}

                                                </ol>

                                            ) : (

                                                <p>{data.facts}</p>

                                            )}

                                        </div>

                                    </div>

                                </div>

                            </div>

                        )}

                        {/* TRIVIA */}
                        {data.trivia && (

                            <div className="bg-[#E9E1D4] rounded-[22px] p-4 border border-[#D6C4A7] shadow-md text-justify">

                                <h3
                                    className="text-[#2B1D0E] text-[20px] mb-3"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    Taukah Kamu?
                                </h3>

                                <p
                                    className="text-[#3A3A3A] text-[12px] leading-[20px]"
                                    style={{ fontFamily: "Poppins" }}
                                >
                                    {data.trivia}
                                </p>

                            </div>

                        )}

                    </div>

                )}

                {/* LOCATION */}
                <div className="bg-[#E9E1D4] rounded-[20px] p-5 mt-3 border border-[#D6C4A7] shadow-md">

                    <div className="flex items-center gap-2 mb-4">

                        <MapPin
                            size={20}
                            color="#AE8642"
                        />

                        <h2
                            className="text-[#2B1D0E] text-[20px]"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Lokasi Di Museum
                        </h2>

                    </div>

                    <h3
                        className="text-[#0F172A] text-[14px] font-semibold"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {data.location}
                    </h3>

                    <p
                        className="text-[#3A3A3A] text-[12px] mt-1"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {data.locationDesc}
                    </p>

                </div>
                

                {/* BOTTOM NAVBAR */}
                <BottomNavbar />
            </div>
        </main >
    );
}