import Image from "next/image";
import { BlueButton } from "./Buttons";

import d4logo from "../assets/images/d4logo-dark.png";
import d4logoDark from "../assets/images/d4logo.png";

export default function HeroSection({ title, description, description2, description3, img }: any) {
    return (
        <div className="md:pt-52 pt-36 py-28 flex justify-center items-center gap-20">
            <div className="flex lg:flex-row flex-col-reverse gap-14">
                <div>
                    <h1 className="sm:text-[55px] text-[42px] font-semibold sm:leading-[60px] leading-[50px] bg-[linear-gradient(to_left,#E49976,#A46FF2)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                        {title}
                    </h1>
                    <div className="flex flex-col gap-5 pt-5 max-w-[1780px] font-light md:text-[22px] text-[16px] mb-20">
                        <p>{description}</p>
                        <p>{description2}</p>
                        <p>{description3}</p>
                    </div>
                    {/* <div className="flex flex-col md:flex-row items-center gap-10 pt-11 b"> */}
                    <div className="flex flex-col md:flex-row items-center gap-10 pt-11 border-t border-gray-800">
                        <div>
                            {/* Light logo */}
                            <Image
                                className="sm:w-[85px] min-w-[78px] block dark:hidden"
                                src={d4logo}
                                alt="d4 logo light"
                            />
                            {/* Dark logo */}
                            <Image
                                className="sm:w-[85px] min-w-[78px] hidden dark:block"
                                src={d4logoDark}
                                alt="d4 logo dark"
                            />
                        </div>
                        <p className="max-w-[450px] font-light sm:text-[16px] text-[14px]">
                            is an autonomous, community financed, not-for-profit organisation.
                        </p>
                        <BlueButton label={"learn more"} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image className="lg:max-w-[360px] max-w-[260px]" src={img} alt="About" />
                </div>
            </div>
        </div>
    );
}
