"use client";

import { useEffect, useRef, useState } from "react";
import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import eventImg from "@/app/assets/images/eventsHeroImg.png";
import { Heading } from "@/app/components/Headings";
import { RecentEventCard, UpcomingEventCard } from "@/app/components/EventCard";
import { RecentEventCardType } from "@/types/cards";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes"; // Import useTheme hook

// Custom Container component for consistent layout
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 md:px-8 w-full max-w-screen-xl ${className}`}>
      {children}
    </div>
  );
}

export default function EventPage() {
    // Theme handling for light/dark mode
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Handle hydration issue with theme
    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    return (
        <div className="relative overflow-hidden text-foreground bg-background transition-colors duration-300">
            <Container className="z-10 relative">
                <EventHeroSection />
            </Container>
            <EventSection />
            <Container className="z-10 relative">
                <UpcomingEventSection />
            </Container>
            {theme === 'dark' && <Background />}
            <Footer />
        </div>
    );
}

function EventHeroSection() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <HeroSection
                title={"All Events"}
                img={eventImg}
                description={"Step into a world where creativity meets technology. Our events bring together designers, developers, and tech enthusiasts to collaborate, learn, and innovate. Don't miss out on this unique opportunity to connect with industry leaders, showcase your skills, and drive the future of design and development!"}
            />
        </motion.div>
    );
}

interface UpcomingEvent {
    id: number;
    title: string;
    date: string;
    description: string;
    location: string;
    image: string;
}

function EventSection() {
    const RecentEventInfo: RecentEventCardType[] = [
        {
            date: "1-July-2025",
            eventName: "Hackathon",
            image: "/placeholder-event.jpg",
            link: "/events/hackathon-2025"
        }, 
        {
            date: "15-June-2025",
            eventName: "Design Workshop",
            image: "/placeholder-event.jpg",
            link: "/events/design-workshop"
        }, 
        {
            date: "30-May-2025",
            eventName: "Tech Conference",
            image: "/placeholder-event.jpg",
            link: "/events/tech-conference"
        }, 
        {
            date: "10-May-2025",
            eventName: "Coding Bootcamp",
            image: "/placeholder-event.jpg",
            link: "/events/coding-bootcamp"
        }
    ];

    // For staggered animation of cards
    const containerRef = useRef<HTMLDivElement>(null);
    
    return (
        <div className="bg-secondary/20 dark:bg-[#091B32] md:mt-[140px] mt-[80px] transition-colors duration-300">
            <Container className="z-10 relative flex flex-col gap-10 py-16 md:py-24">
                <motion.div 
                    className="px-4 md:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Heading title={"Recent Events"} />
                </motion.div>
                
                {/* Improved card container with proper centering and responsiveness */}
                <motion.div 
                    ref={containerRef}
                    className="w-full mx-auto px-4 md:px-0"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
                        {RecentEventInfo.map((props, k) => (
                            <motion.div
                                key={k}
                                className="w-full max-w-sm h-full"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: k * 0.15,
                                    ease: "easeOut" 
                                }}
                            >
                                <RecentEventCard 
                                    date={props.date} 
                                    eventName={props.eventName} 
                                    image={props.image} 
                                    link={props.link}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Upcoming Event in recent event section */}
                <motion.div 
                    className="relative overflow-hidden bg-muted lg:h-[720px] h-[360px] w-full max-w-[95%] md:max-w-[90%] self-center rounded-2xl md:rounded-3xl shadow-xl dark:shadow-primary/10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    whileHover={{ scale: 1.01 }}
                >
                    <Image
                        src="/upcoming-event-placeholder.jpg"
                        alt="Upcoming Event"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority
                    />
                    <motion.div 
                        className="absolute z-20 top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-center p-3 md:p-4 text-white font-medium">Upcoming Event</p>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-6 md:p-10">
                        <motion.div 
                            className="text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-2xl md:text-4xl font-bold mb-2">Annual Tech Summit</h3>
                            <p className="text-sm md:text-base mb-4 max-w-lg">Join us for the biggest tech event of the year featuring industry leaders and cutting-edge innovations.</p>
                            <motion.button 
                                className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Register Now
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}

function UpcomingEventSection() {
    const upcomingEvents: UpcomingEvent[] = [
        {
            id: 1,
            title: "Web Development Workshop",
            date: "15-August-2025",
            description: "Learn modern web development techniques from industry experts.",
            location: "Virtual",
            image: "/workshop-placeholder.jpg"
        },
        {
            id: 2,
            title: "UX Design Conference",
            date: "22-September-2025",
            description: "Explore the latest trends in user experience design.",
            location: "Quark City, Mohali",
            image: "/conference-placeholder.jpg"
        }
    ];

    return (
        <div className="py-16 md:py-28">
            <motion.div 
                className="px-4 md:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Heading title={"Upcoming Events"} />
            </motion.div>
            
            {/* Improved upcoming events cards with consistent sizing */}
            <div className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
                {upcomingEvents.map((event, index) => (
                    <motion.div
                        key={event.id}
                        className="w-full h-full"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ y: -5 }}
                    >
                        <UpcomingEventCard 
                            title={event.title}
                            date={event.date}
                            description={event.description}
                            location={event.location}
                            image={event.image}
                        />
                    </motion.div>
                ))}
            </div>
            <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <motion.button 
                    className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 dark:hover:bg-primary/80 transition-colors shadow-md dark:shadow-primary/20"
                    whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    View All Upcoming Events
                </motion.button>
            </motion.div>
        </div>
    );
}