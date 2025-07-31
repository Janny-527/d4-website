'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import { Heading, BigHeading } from "@/app/components/Headings";
import { useTheme } from "next-themes";
import teamImg from "@/app/assets/images/teamHeroImg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import CoreTeamCard from "@/app/components/CoreTeamCard";

interface TeamMember {
  name: string;
  bio: string;
  designation: string;
  image: string;
  link: string;
  theme?: 'light' | 'dark';
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function TeamPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`relative overflow-hidden ${theme === 'dark' ? 'text-white' : 'text-gray-800'} min-h-screen flex flex-col`}>
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <TeamHeroSection />
          <FounderSection />
          <CoreTeamSection />
          <PartnerSection />
        </div>
      </div>
      <Footer />
      {theme === 'dark' && <Background />}
    </div>
  );
}

function TeamHeroSection() {
  return (
    <div>
      <HeroSection
        title={"Our Team Members"}
        img={teamImg}
        description={"D4 Community is an inclusive, open-source initiative driven by passionate individuals from diverse backgrounds. With contributions from a dedicated group of members and continuous input from the wider community, our mission is to build the ultimate, free platform for design and development enthusiasts."}
      />
    </div>
  );
}

function FounderSection() {
  const { theme } = useTheme();
  
  const founderInfo = [
    {
      name: "Ayush Kumar Tiwari",
      title: "Tomorrow should be better than today",
      description: "We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.",
      position: "Co-Founder D4",
      image: "/founderImg/AyushKumarTiwari.png",
      link: "https://www.linkedin.com/in/itsayu",
      reverse: false
    }, 
    {
      name: "Sagar Malhotra",
      title: "See how we can help you progress",
      description: "We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research.",
      position: "Co-Founder D4",
      image: "/founderImg/Sagar.png",
      link: "https://www.linkedin.com/in/sagar0-0malhotra",
      reverse: true
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20 md:py-32"
    >
      <motion.div variants={fadeInUp}>
        <Heading 
          title={"From Our Founders"} 
          subtitle={"Meet the minds behind our community"}
        />
      </motion.div>

      <div className="mt-16 md:mt-24 space-y-32 lg:space-y-48">
        {founderInfo.map((founder, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            transition={{ delay: index * 0.3 }}
          >
            <div className={`flex flex-col ${founder.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="lg:w-1/2">
                <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                  
                  <div className={`relative z-10 w-full h-full rounded-2xl overflow-hidden border ${
                    theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="object-center"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <h3 className={`font-bold text-3xl md:text-4xl leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  {founder.title}
                </h3>
                
                <p className={`text-lg md:text-xl ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } leading-relaxed`}>
                  {founder.description}
                </p>
                
                <div className="pt-4">
                  <p className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {founder.name} - {founder.position}
                  </p>
                  
                  <a 
                    href={founder.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`inline-block mt-2 text-sm font-medium transition ${
                      theme === 'dark' 
                        ? 'text-purple-400 hover:text-purple-300' 
                        : 'text-purple-600 hover:text-purple-700'
                    }`}
                  >
                    Connect on LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function CoreTeamSection() {
  const { theme } = useTheme();
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const coreTeam: TeamMember[] = [
    {
      name: "Ayush Anshu",
      bio: "Friendly neighbourhood web developer",
      designation: "Web Team Lead",
      image: "/coreTeam/ayush24k.png",
      link: "https://www.linkedin.com/in/ayushanshu"
    },
    {
      name: "Devansh Srivastava",
      bio: "Devansh is a passionate and self-motivated individual currently in the final year of graduation, with a strong foundation in Python and experience working with NoSQL databases.",
      designation: "Management Lead",
      image: "/coreTeam/DevanshSrivastava.svg",
      link: "https://www.linkedin.com/in/devansh-srivastava-95a343204/"
    },
    {
      name: "Bhumika Varshney",
      bio: "A passionate and motivated second-year B.Tech Computer Science student with fundamental skills in programming and a keen interest in software engineering.",
      designation: "Social Media Team Lead",
      image: "/coreTeam/BhumikaVarshney.svg",
      link: "https://www.linkedin.com/in/bhumika-varshney-90ba64295/"
    },
    {
      name: "Devishi Aggarwal",
      bio: "Campus lead of D4 community, CU",
      designation: "Campus Lead CU",
      image: "/coreTeam/DevishiAggarwal.png",
      link: "https://www.linkedin.com/in/devishiaggarwal/"
    },
    {
      name: "Dhairya Ahuja",
      bio: "Developer",
      designation: "Social Media Team Lead",
      image: "/coreTeam/DhairyaAhuja.png",
      link: "https://www.linkedin.com/in/dhairya-ahuja-1b3b74286/"
    },
    {
      name: "Qazi Zaid",
      bio: "Graphic Designing Lead @D4 Community | Student Ambassador @ The Esports Club (TEC) | Campus Ambassador @HackwithIndia",
      designation: "Graphic Team Lead",
      image: "/coreTeam/QaziZaid.png",
      link: "https://www.linkedin.com/in/qazi-zaid/"
    }
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!autoScroll || !api) return;

    const scrollNext = () => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    };

    const interval = setInterval(scrollNext, 3500);
    return () => clearInterval(interval);
  }, [api, autoScroll]);

  const openPopUp = (member: TeamMember) => {
    setAutoScroll(false);
    setSelectedTeamMember(member);
  };

  const closePopUp = () => {
    setAutoScroll(true);
    setSelectedTeamMember(null);
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20"
    >
      <motion.div variants={fadeInUp}>
        <Heading title={"Core Team"} subtitle={"The powerhouse behind our community"} />
      </motion.div>

      <div className="py-20">
        <div className="lg:flex hidden flex-wrap justify-center gap-16">
          {coreTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ delay: index * 0.15 }}
              onClick={() => openPopUp(member)}
              className="cursor-pointer transform transition-transform hover:scale-105"
            >
              <CoreTeamCard
                name={member.name}
                bio={member.bio}
                designation={member.designation}
                image={member.image}
                link={member.link}
                // theme={theme === 'dark' ? 'dark' : 'light'}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="lg:hidden">
          <Carousel 
            setApi={setApi}
            className="w-full max-w-xs mx-auto"
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {coreTeam.map((member, index) => (
                <CarouselItem key={index}>
                  <div 
                    onClick={() => openPopUp(member)} 
                    className="cursor-pointer px-2"
                  >
                    <CoreTeamCard
                      name={member.name}
                      bio={member.bio}
                      designation={member.designation}
                      image={member.image}
                      link={member.link}
                    //   theme={theme === 'dark' ? 'dark' : 'light'}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className={theme === 'dark' ? 'bg-[#EC5735] text-white' : 'bg-purple-500 text-white'} />
              <CarouselNext className={theme === 'dark' ? 'bg-[#EC5735] text-white' : 'bg-purple-500 text-white'} />
            </div>
          </Carousel>
        </div>
      </div>

      {selectedTeamMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className={`${
              theme === 'dark' 
                ? 'bg-[#0E0C15]/80 border-[#EC5735] text-white' 
                : 'bg-white/90 border-purple-400 text-gray-800'
            } shadow-xl rounded-lg max-w-4xl w-full p-8 md:p-12 backdrop-blur-md border`}
          >
            <button
              className={`absolute top-4 right-4 ${
                theme === 'dark' 
                  ? 'text-white hover:text-[#EC5735]' 
                  : 'text-gray-800 hover:text-purple-700'
              }`}
              onClick={closePopUp}
            >
              &#x2715;
            </button>

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className={`relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-2 ${
                theme === 'dark' ? 'border-[#EC5735]' : 'border-purple-400'
              }`}>
                <Image
                  src={selectedTeamMember.image}
                  alt={selectedTeamMember.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div>
                <h3 className={`text-xl md:text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedTeamMember.name}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } font-light text-sm`}>
                  {selectedTeamMember.designation}
                </p>
                <a
                  href={selectedTeamMember.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  } hover:underline inline-flex items-center mt-2 text-sm`}
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <p className={`mt-6 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            } text-base`}>
              {selectedTeamMember.bio}
            </p>

            <button
              className={`mt-8 px-6 py-2 text-white rounded-lg transition ${
                theme === 'dark' 
                  ? 'bg-[#EC5735] hover:bg-[#a3412b]' 
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
              onClick={closePopUp}
            >
              Close
            </button>
          </div>
          <div className="fixed inset-0 bg-black/40 -z-10" onClick={closePopUp} />
        </div>
      )}
    </motion.div>
  );
}

function PartnerSection() {
  const { theme } = useTheme();
  
  const partners = [
    { name: "Partner 1", logo: "/api/placeholder/200/100" },
    { name: "Partner 2", logo: "/api/placeholder/200/100" },
    { name: "Partner 3", logo: "/api/placeholder/200/100" },
    { name: "Partner 4", logo: "/api/placeholder/200/100" },
    { name: "Partner 5", logo: "/api/placeholder/200/100" },
    { name: "Partner 6", logo: "/api/placeholder/200/100" },
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20"
    >
      <motion.div variants={fadeInUp}>
        <Heading title={"Our Partners"} subtitle={"Working together to empower developers"} />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className={`mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-8 rounded-2xl ${
          theme === 'dark' 
            ? 'bg-white/5 border border-white/10 backdrop-blur-md' 
            : 'bg-white/80 border border-gray-200 shadow-lg'
        }`}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center justify-center p-4 rounded-lg ${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10' 
                : 'bg-white hover:bg-gray-50'
            } transition-colors`}
          >
            <div className="relative h-16 w-full">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}