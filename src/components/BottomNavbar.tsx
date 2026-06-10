"use client";

import Link from "next/link";
import {
    House,
    Landmark,
    ScanSearch,
} from "lucide-react";

import { usePathname } from "next/navigation";

/* ==================================================
   BOTTOM NAVBAR
================================================== */
export default function BottomNavbar() {

    const pathname =
        usePathname();

    /* ==========================================
       NAVBAR COLORS
    ========================================== */
    const activeColor =
        "#AE8642";

    const inactiveColor =
        "#0F172A";

    return (

        <div
            className="
                fixed
                bottom-5
                left-1/2
                w-[90%]
                max-w-[300px]
                -translate-x-1/2
                rounded-full
                bg-white
                shadow-xl
                z-50
            "
        >

            {/* ==========================================
                NAVBAR CONTAINER
            ========================================== */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    px-8
                    py-3
                "
            >

                {/* ==========================================
                    HOME MENU
                ========================================== */}
                <Link
                    href="/home"
                    className="flex flex-col items-center"
                >

                    <House
                        size={28}
                        color={
                            pathname === "/home"
                                ? activeColor
                                : inactiveColor
                        }
                    />

                    <span
                        className="mt-1 text-[10px]"
                        style={{
                            fontFamily: "Poppins",
                            color:
                                pathname === "/home"
                                    ? activeColor
                                    : inactiveColor,
                        }}
                    >
                        Home
                    </span>

                </Link>

                {/* ==========================================
                    SCAN BUTTON
                ========================================== */}
                <Link
                    href="/scan"
                    className={`
                        absolute
                        left-1/2
                        -translate-x-1/2
                        -top-6
                        flex
                        h-[64px]
                        w-[64px]
                        items-center
                        justify-center
                        rounded-full
                        shadow-xl
                        transition-all
                        duration-300
                        ${pathname === "/scan"
                            ? "bg-[#AE8642] scale-110"
                            : "bg-gradient-to-br from-[#C89B4A] to-[#8B682C]"
                        }
                    `}
                >

                    <ScanSearch
                        size={34}
                        color="white"
                    />

                </Link>

                {/* ==========================================
                    MUSEUM MENU
                ========================================== */}
                <Link
                    href="/museum"
                    className="flex flex-col items-center"
                >

                    <Landmark
                        size={28}
                        color={
                            pathname === "/museum"
                                ? activeColor
                                : inactiveColor
                        }
                    />

                    <span
                        className="mt-1 text-[10px]"
                        style={{
                            fontFamily: "Poppins",
                            color:
                                pathname === "/museum"
                                    ? activeColor
                                    : inactiveColor,
                        }}
                    >
                        Museum
                    </span>

                </Link>

            </div>

        </div>

    );

}