import { RecentEventCardType } from "@/types/cards";
import Image from "next/image";
import Link from "next/link";
import { OrangeButton } from "./Buttons";

export function RecentEventCard({ eventName, date, image, link }: RecentEventCardType) {
    return (
        <div className="group transition-all duration-300 hover:scale-[1.02] w-full">
            <div className="flex flex-col gap-3 sm:gap-4">
                {/* Image Container - Responsive sizing */}
                <div className="relative overflow-hidden bg-muted w-full aspect-[0.9] xs:aspect-[1] sm:w-[260px] sm:h-[280px] rounded-lg sm:rounded-xl shadow-md transition-all duration-300 group-hover:shadow-lg">
                    <Link href={link} className="block h-full w-full">
                        <Image
                            src={image || '/event-placeholder.jpg'}
                            fill
                            quality={100}
                            alt={eventName}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 320px) 280px,
                                   (max-width: 640px) 300px,
                                   (max-width: 768px) 220px,
                                   260px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                            <span className="text-white font-medium text-sm sm:text-base">View Details →</span>
                        </div>
                    </Link>
                </div>
                
                {/* Text Content - Responsive typography */}
                <div className="text-left space-y-1">
                    <p className="font-mono text-xs xs:text-sm text-muted-foreground dark:text-foreground/80">
                        {date}
                    </p>
                    <h1 className="text-base xs:text-lg sm:text-[22px] font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {eventName}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export function UpcomingEventCard({ 
    title = "Hack-N-Win 2.0",
    date = "25-July-2025",
    description = "Step into a world where creativity meets technology. Our events bring together designers, developers, and tech enthusiasts to collaborate, learn, and innovate. Don't miss out on this unique opportunity to connect with industry leaders, showcase your skills, and drive the future of design and development!",
    location = "Offline Event",
    image = ""
}) {
    const [day, month, year] = date.split('-');
    
    return (
        <div className="bg-card dark:bg-[#091B32] rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full">
            <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section - Responsive height and aspect ratio */}
                <div className="relative h-[200px] xs:h-[250px] sm:h-[280px] lg:h-auto lg:min-w-[300px] lg:max-w-[350px] xl:min-w-[350px]">
                    <Image
                        src={image || '/upcoming-event-placeholder.jpg'}
                        fill
                        className="object-cover"
                        alt={title}
                        sizes="(max-width: 640px) 100vw,
                               (max-width: 1024px) 50vw,
                               350px"
                        priority
                    />
                </div>
                
                {/* Content Section - Responsive padding and layout */}
                <div className="flex flex-col lg:flex-row p-4 sm:p-6 lg:p-6 xl:p-8 gap-4 sm:gap-6 lg:gap-8 w-full">
                    <div className="flex-1 space-y-3 sm:space-y-4">
                        <div className="flex items-start gap-3 sm:gap-4">
                            {/* Date Badge - Responsive sizing */}
                            <div className="border border-primary/30 dark:border-foreground/20 rounded-md sm:rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-center min-w-[70px] sm:min-w-[80px]">
                                <p className="text-xs sm:text-sm font-medium text-primary dark:text-foreground">{month}</p>
                                <p className="text-base sm:text-lg font-bold">{day}</p>
                            </div>
                            
                            {/* Title and Location - Responsive typography */}
                            <div>
                                <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-foreground line-clamp-2">
                                    {title}
                                </h1>
                                <p className="text-muted-foreground mt-1 flex items-center gap-1 text-xs xs:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xs:h-4 xs:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {location}
                                </p>
                            </div>
                        </div>
                        
                        {/* Description - Responsive typography and line clamping */}
                        <p className="text-muted-foreground dark:text-foreground/80 text-sm xs:text-base line-clamp-3 sm:line-clamp-4">
                            {description}
                        </p>
                    </div>
                    
                    {/* Actions - Responsive layout */}
                    <div className="flex flex-row-reverse xs:flex-row lg:flex-col items-center xs:items-end justify-between lg:justify-center gap-3 sm:gap-4 lg:gap-6 lg:pl-4 xl:pl-6 lg:border-l lg:border-border">
                        <div className="hidden lg:block flex-1"></div>
                        <OrangeButton 
                            label={"Register"} 
                            className="w-full xs:w-auto lg:w-full text-sm px-4 py-2 sm:px-6 sm:py-2"
                        />
                        <Link href="#" className="text-xs xs:text-sm font-medium text-primary hover:underline flex items-center gap-1">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xs:h-4 xs:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}