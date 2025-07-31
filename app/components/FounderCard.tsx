'use client'
import Image from "next/image";

export default function FounderCard ({name, title, description, src, link, reverse}: any) {
    return (
        <div className={`flex lg:flex-row flex-col-reverse lg:gap-3 gap-10 items-center justify-between lg:px-28 ${reverse == true ? `lg:flex-row-reverse` : null}`}>
            <div className="md:max-w-[600px] md:space-y-4 space-y-4 lg:text-left text-center">
                <h1 className="md:text-[32px] text-[24px] font-bold">{title}</h1>
                <p className="text-[18px] font-light">{description}</p>
                <p className="text-[22px] bg-[linear-gradient(to_left,#A46FF2,#E49976)] text-transparent bg-clip-text [-webkit-background-clip:text] cursor-pointer">
                <a 
                target="_blank"
                href={link}
                >{name}</a>
                </p>
            </div>
            <div className="bg-slate-300 md:min-h-[420px] md:min-w-[420px] min-h-[320px] min-w-[280px] rounded-lg relative overflow-hidden">
                <Image 
                src={src}
                quality={100}
                fill
                alt={name}
                objectFit="cover"
                />
            </div>
        </div>
    )
}