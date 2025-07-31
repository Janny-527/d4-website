import Image from "next/image";


export default function Card({ src, title, description }: any) {

    

    return (
        <div className="p-4 flex flex-col gap-2">
            {src ? <Image className="sm:max-w-[72px] md:max-w-[60px] max-w-[40px]" src={src} alt="code icon" /> : <span></span> }
            <div>
                <h3 className="sm:text-[24px] text-[20px] font-bold">{title}</h3>
                <p className="sm:text-[18px] text-[16px] font-light pt-2">{description}</p>
            </div>
        </div>
    )
}