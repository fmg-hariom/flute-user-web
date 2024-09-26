import MainHeader from "@/components/headers/MainHeader";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  weight: "400", // Specify the font weights you need
  subsets: ["latin"], // Include any subsets you need
  display: "swap", // Controls how the font is displayed while loading
});

export default function Register() {
  return (
    <div className="py-4 sm:py-8 px-0 bg-black text-white">
      <main>
        <div className="container mx-auto px-8">

        </div>
      </main>
    </div>
  );
}
