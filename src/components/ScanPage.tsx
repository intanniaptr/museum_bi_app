"use client";
/* ==================================================
   IMPORTS
================================================== */
import {
    Images,
} from "lucide-react";

import {
    useEffect,
    useRef,
} from "react";

import { useRouter } from "next/navigation";

import BottomNavbar from "@/components/BottomNavbar";

/* ==================================================
   SCAN PAGE
================================================== */
export default function ScanPage() {
    /* ==========================================
        REFS
    ========================================== */
    const videoRef =
        useRef<HTMLVideoElement>(null);

    const fileInputRef =
        useRef<HTMLInputElement>(null);

    const streamRef =
        useRef<MediaStream | null>(null);
    /* ==========================================
        ROUTER
    ========================================== */
    const router =
        useRouter();
    /* ==========================================
        OPEN GALLERY
    ========================================== */
    const openGallery = () => {

        fileInputRef.current?.click();

    };
    /* ==========================================
        IMAGE UPLOAD HANDLER
    ========================================== */
    const handleImageSelect = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file =
            event.target.files?.[0];

        if (!file) return;

        sessionStorage.removeItem(
            "predictedClass"
        );

        sessionStorage.removeItem(
            "confidence"
        );

        sessionStorage.removeItem(
            "predictionReady"
        );

        router.push("/loading");

        try {

            const formData =
                new FormData();

            formData.append(
                "file",
                file
            );
            /* ==========================================
                SEND IMAGE TO MODELS
            ========================================== */
            const response =
                await fetch(
                    "https://intanniaptr-museum-bi-ai.hf.space/predict",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

            const result =
                await response.json();

            console.log(
                "HASIL AI:",
                result
            );

            sessionStorage.setItem(
                "predictedClass",
                result.class
            );

            sessionStorage.setItem(
                "confidence",
                result.confidence.toString()
            );

            if (result.class === "unknown") {

                sessionStorage.setItem(
                    "unknownObject",
                    "true"
                );

            } else {

                sessionStorage.removeItem(
                    "unknownObject"
                );

            }

            sessionStorage.setItem(
                "predictionReady",
                "true"
            );
            /* ==========================================
                HANDLE PREDICTION ERROR
            ========================================== */
        } catch (error) {

            sessionStorage.setItem(
                "predictionError",
                "true"
            );

            console.error(
                "Prediction Error:",
                error
            );

        }

    };
    /* ==========================================
        CAMERA CAPTURE
    ========================================== */
    const capturePhoto = () => {

        if (!videoRef.current)
            return;
        /* ==========================================
            CREATE CANVAS
        ========================================== */
        const canvas =
            document.createElement(
                "canvas"
            );

        canvas.width =
            videoRef.current.videoWidth;

        canvas.height =
            videoRef.current.videoHeight;

        const ctx =
            canvas.getContext("2d");

        if (!ctx) return;
        /* ==========================================
            CAPTURE FRAME
        ========================================== */
        ctx.drawImage(
            videoRef.current,
            0,
            0
        );
        /* ==========================================
            CONVERT TO IMAGE BLOB
        ========================================== */
        canvas.toBlob(
            async blob => {

                if (!blob) return;

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
                    "predictionError"
                );

                sessionStorage.removeItem(
                    "unknownObject"
                );

                router.push(
                    "/loading"
                );

                try {

                    const formData =
                        new FormData();

                    formData.append(
                        "file",
                        blob,
                        "capture.jpg"
                    );

                    const response =
                        await fetch(
                            "https://intanniaptr-museum-bi-ai.hf.space/predict",
                            {
                                method:
                                    "POST",
                                body:
                                    formData,
                            }
                        );

                    const result =
                        await response.json();

                    console.log(
                        "HASIL AI:",
                        result
                    );

                    sessionStorage.setItem(
                        "predictedClass",
                        result.class
                    );

                    sessionStorage.setItem(
                        "confidence",
                        result.confidence.toString()
                    );

                    if (result.class === "unknown") {

                        sessionStorage.setItem(
                            "unknownObject",
                            "true"
                        );

                    } else {

                        sessionStorage.removeItem(
                            "unknownObject"
                        );

                    }

                    sessionStorage.setItem(
                        "predictionReady",
                        "true"
                    );

                } catch (error) {

                    sessionStorage.setItem(
                        "predictionError",
                        "true"
                    );

                    console.error(
                        "Prediction Error:",
                        error
                    );

                }

            },
            "image/jpeg",
            0.9
        );

    };
    /* ==========================================
        START CAMERA
    ========================================== */
    useEffect(() => {
        /* ==========================================
            CAMERA INITIALIZATION
        ========================================== */
        const startCamera = async () => {

            try {

                const stream =
                    await navigator.mediaDevices.getUserMedia({
                        video: {
                            facingMode:
                                "environment",
                        },
                        audio: false,
                    });

                streamRef.current =
                    stream;

                if (videoRef.current) {

                    videoRef.current.srcObject =
                        stream;

                }

            } catch (error) {

                console.error(
                    "Gagal membuka kamera:",
                    error
                );

            }

        };

        startCamera();
        {/* ==========================================
    PAGE CONTAINER
========================================== */}
        return () => {

            streamRef.current
                ?.getTracks()
                .forEach(
                    track =>
                        track.stop()
                );

        };

    }, []);
    {/* ==========================================
    MOBILE CONTAINER
========================================== */}
    return (

        <main className="min-h-screen bg-[#0F172A] flex justify-center">

            <div className="w-full max-w-[430px] min-h-screen px-5 pt-4 pb-28">

                <div className="h-2" />

                <div className="flex items-center justify-center">

                    <h1
                        className="text-white text-[16px] font-semibold"
                        style={{
                            fontFamily:
                                "Playfair Display"
                        }}
                    >
                        Scan Objek
                    </h1>

                </div>

                <div className="relative mt-20 mx-auto w-[80%] overflow-hidden rounded-[40px]">

                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="aspect-square w-full object-cover"
                    />

                    <div className="absolute top-0 left-0 h-[55px] w-[55px] rounded-tl-[32px] border-l-[10px] border-t-[14px] border-[#AE8642]" />

                    <div className="absolute top-0 right-0 h-[55px] w-[55px] rounded-tr-[32px] border-r-[10px] border-t-[14px] border-[#AE8642]" />

                    <div className="absolute bottom-0 left-0 h-[55px] w-[55px] rounded-bl-[32px] border-b-[10px] border-l-[14px] border-[#AE8642]" />

                    <div className="absolute bottom-0 right-0 h-[55px] w-[55px] rounded-br-[32px] border-b-[10px] border-r-[14px] border-[#AE8642]" />

                </div>

                <div className="mt-16 relative flex items-center justify-center">

                    {/* GALERI */}

                    <button
                        onClick={openGallery}
                        className="absolute left-10 flex flex-col items-center"
                    >

                        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-lg">

                            <Images
                                size={28}
                                color="#0F172A"
                            />

                        </div>

                        <p
                            className="mt-3 text-[13px] text-white"
                        >
                            Unggah Foto
                        </p>

                    </button>

                    {/* CAPTURE */}

                    <button
                        onClick={capturePhoto}
                        className="flex h-[95px] w-[95px] items-center justify-center rounded-full border-[5px] border-[#AE8642] bg-white shadow-2xl"
                    >

                        <div className="h-[72px] w-[72px] rounded-full bg-[#F8F6F4]" />

                    </button>

                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageSelect}
                />
                {/* ==========================================
    BOTTOM NAVBAR
========================================== */}
                <BottomNavbar />

            </div>

        </main>

    );

}