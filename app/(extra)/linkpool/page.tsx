import Background from "@/app/components/Background";
import Image from "next/image";

import d4logo from "@/app/assets/images/d4logo.png"
export default function LinkPool() {
    return (
        <div className="relative overflow-hidden text-white">
            <div className="container z-10 relative">
                <LinkSection />
            </div>
            <p className="text-center text-slate-500 text-[14px] pb-4"> Built by D4 Web Team <a href="https://github.com/ayush24k" target="_blank">@ayush24k</a></p>
            <Background />
        </div>
    )
}

function LinkSection() {
    return (
        <div className="flex justify-center items-center">
            <div className="md:py-30 py-24">
                <div className="flex flex-col justify-center items-center text-center">
                    <Image
                        className="md:w-[auto] w-[120px]"
                        src={d4logo}
                        alt="d4logo"
                    />
                    <h1 className="font-normal md:text-[24px] text-[18px]">D4 Community</h1>
                    <p className="font-light md:text-[18px] text-[16px] pt-2">An Open-Source Tech Community made by Students for the Students</p>
                </div>
                <div className="py-12">
                    <LinkButtons />
                </div>
            </div>
        </div>
    )
}

function LinkButtons() {
    const LinkButtons = [{
        label: "WhatsApp Group",
        icon: "d4logo",
        link: "https://chat.whatsapp.com/Khwy3LEyjdX4Kx8VJ1MXmW"
    }, {
        label: "LinkedIn",
        icon: "",
        link: "https://www.linkedin.com/company/d4community"
    }, {
        label: "Github",
        icon: "",
        link: "https://github.com/D4Community"
    }, {
        label: "Twitter",
        icon: "",
        link: "https://twitter.com/D4community"
    }, {
        label: "Instagram",
        icon: "",
        link: "https://www.instagram.com/d4community"
    }, {
        label: "Discord",
        icon: "",
        link: "https://discord.com/invite/RPpYB8JpUQ"
    }, {
        label: "Apply to be a Volunteer",
        icon: "",
        link: "https://forms.gle/CY8eDostKx2t8Wx49"
    }, {
          label: "Whatsapp Channel",
          icon: "",
          link: "https://whatsapp.com/channel/0029Va8QbTU8V0trPdleNl2I"
     }]

    return (
        <div className="flex flex-col gap-6">
            {LinkButtons.map((prop, index) => {
                return (
                    <div className="flex flex-col items-center" key={index}>
                        <a href={prop.link} target="_blank" className="bg-[#0E0C15]/80 shadow-sm border-slate-300 border-[1px] py-[16px] text-[15px] w-[95%] rounded-sm font-medium text-slate-300 text-center cursor-pointer hover:shadow-lg-[#ec5745] hover:border-[#ec5745] transition flex justify-center items-center gap-3">
                            {/* <Image className="w-[45px]" src={d4logo} alt={prop.label} /> */}
                            {prop.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}