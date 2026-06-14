import { museumData } from "@/data/museumData";
import { categoryData } from "@/data/categoryData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;

    const category =
        categoryData[slug as keyof typeof categoryData];

    const items = Object.entries(museumData).filter(
        ([_, item]: any) => item.category === slug
    );

    return (

        <main className="min-h-screen bg-[#F8F6F4] px-6 pt-10 pb-10">

            {/* BACK */}
            <div className="flex items-center gap-3">

                <Link href="/home">
                    <ArrowLeft
                        className="w-7 h-7 text-[#0F172A]"
                    />
                </Link>

                <h1
                    className="text-[28px] text-[#0F172A]"
                    style={{ fontFamily: "Playfair Display" }}
                >
                    {category?.title}
                </h1>

            </div>

            <p
                className="text-[#3A3A3A] text-[15px] mt-3"
                style={{ fontFamily: "Poppins" }}
            >
                {category?.description}
            </p>

            {/* COLLECTION GRID */}
            <div className="grid grid-cols-2 gap-5 mt-6">

                {items.map(([key, item]: any) => (

                    <div
                        key={key}
                        className="
        bg-[#F3EEE6]
        rounded-[22px]
        p-3
        border border-[#DDD2BF]
        shadow-sm
    "
                    >

                        <div className="relative">

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[110px] object-cover rounded-[14px]"
                            />

                            {item.card?.year && (

                                <div
                                    className="
                    absolute
                    top-2
                    left-2
                    bg-[#F8F6F4]
                    text-[#8B682C]
                    text-[11px]
                    font-medium
                    px-2
                    py-1
                    rounded-full
                    shadow-sm
                "
                                    style={{ fontFamily: "Poppins" }}
                                >
                                    {item.card.year}
                                </div>

                            )}

                        </div>

                        <div className="mt-3">

                            <h2
                                className="
                text-[#0F172A]
                text-[15px]
                font-semibold
                leading-tight
            "
                                style={{ fontFamily: "Poppins" }}
                            >
                                {item.card?.title ?? item.title}
                            </h2>

                            {item.card?.categoryLabel && (

                                <p
                                    className="
                    text-[#9A8A6D]
                    text-[12px]
                    mt-2
                    leading-relaxed
                "
                                    style={{ fontFamily: "Poppins" }}
                                >
                                    {item.card.categoryLabel}
                                </p>

                            )}

                        </div>

                    </div>
                ))}
        </div>
        </main >

    );
}