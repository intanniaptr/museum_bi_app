import GuideHero from "@/components/GuideHero";
import BottomNavbar from "@/components/BottomNavbar";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F4] flex justify-center">

      <div className="w-full max-w-[430px] min-h-screen px-5 pt-5 pb-10">

        <GuideHero />

      </div>

    </main>
  );
}