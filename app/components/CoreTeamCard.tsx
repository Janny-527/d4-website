import { TeamType } from "@/types/team";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function CoreTeamCard ({name, bio, designation, link, image}: TeamType) {
    return (
        <div>
            <div className="relative md:h-[420px] md:w-[320px] min-h-[320px] min-w-[220px] min rounded-3xl bg-[#ffffff] overflow-hidden ">
            <Image
                className="hover:scale-[1.1] ease-in-out transition-all"
                src={image}
                fill
                quality={100}
                objectFit="cover"
                alt={name}
            />
            <div className="bg-[#091B32] absolute z-10 bottom-[-12px] left-[-8px] text-center p-6 pb-9 rounded-xl">
                <h1 className="text-[16px] font-bold">{name}</h1>
                <p className="font-light text-[16px]">{designation}</p>
            </div>
            </div>
        </div>
    )
}