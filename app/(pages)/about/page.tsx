'use client';

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import { Heading, BigHeading } from "@/app/components/Headings";
import FounderCard from "@/app/components/FounderCard";
import { FounderType } from "@/types/founder";
import { useTheme } from "next-themes";
import aboutHeroImg from '@/public/images/abouthero.png';

interface GlassCardProps {
    title: string;
    description?: string;
    delay?: number;
    value: number;
    index?: number;
    key?: number; 
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

// Glass Card Component for Pillars
const GlassCard = ({ title, description, delay = 0 }: GlassCardProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: delay * 0.15 }}
      className={`rounded-2xl overflow-hidden border ${
        theme === 'dark' 
          ? 'border-white/10 backdrop-blur-lg bg-white/5' 
          : 'border-gray-200 bg-white/80'
      } shadow-lg h-full`}
    >
      <div className="p-8 h-full flex flex-col">
        <div className={`bg-gradient-to-br from-purple-500/20 to-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
          <span className="text-3xl bg-gradient-to-r from-[#A46FF2] to-[#E49976] bg-clip-text text-transparent font-bold">
            D4
          </span>
        </div>
        <h3 className={`text-2xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
        <p className={`text-lg font-light ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} flex-1`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Counter Component
const CounterCard = ({ title, value, index }: GlassCardProps) => {
  const { theme } = useTheme();
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  
  useEffect(() => {
    let intervalId: number | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let current = 0;
          intervalId = window.setInterval(() => {
            current += 1;
            if (current <= value) {
              setCount(current);
            } else if (intervalId) { 
                clearInterval(intervalId);
            }
          }, 60);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [value]);
  
  return (
    <motion.div 
      ref={counterRef}
      variants={fadeInUp}
      transition={{ delay: (index ?? 0) * 0.15 }}
      className="text-center"
    >
      <h3 className="text-gray-400 text-lg md:text-xl mb-2">{title}</h3>
      <p className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-[#A46FF2] to-[#E49976] bg-clip-text text-transparent">
        {count}+
      </p>
    </motion.div>
  );
};

export default function AboutPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative overflow-hidden text-foreground min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <AboutHeroSection />
        </div>
        <ReachSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <FounderSection />
        </div>
      </div>
      <Footer />
      {theme === 'dark' && <Background />}
    </div>
  );
}

function AboutHeroSection() {
  const AboutCards = [
    {
      title: "Descite",
      description: "Develop Skills!! This is the first step in your journey. Learn the basics of programming and get a solid foundation."
    }, 
    {
      title: "Develop",
      description: "Build it!! Time to turn your dreams and ideas into reality by writing the code and creating your tech masterpiece."
    }, 
    {
      title: "Debug",
      description: "Fix it!! When things inevitably go haywire, you identify errors, issues and finally hunt down and fix those bugs."
    }, 
    {
      title: "Deploy",
      description: "Share it!! After your creation is polished and perfected, deploy it to the world, making it accessible to users."
    }
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
    <HeroSection
        title={"About D4 Community"}
        img={aboutHeroImg} // Use imported image
        description={"An open-source, student-driven organization committed to nurturing community growth."}
        description2={"Our mission is to inspire and facilitate communication and collaboration among members of the tech community, share best practices, and promote technical expertise."}
        description3={"We are dedicated to creating an inclusive environment that welcomes individuals of all skill levels, from absolute beginners to seasoned experts."}
    />

      <motion.div 
        variants={fadeInUp}
        className="py-20"
      >
        <Heading
          title={"Our Pillars"}
          subtitle={"The foundations of our community"}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {AboutCards.map((props, k) => (
            <GlassCard 
              key={k}
              title={props.title} 
              description={props.description}
              delay={k} 
              value={0}
              index={0}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ReachSection() {
  const { theme } = useTheme();
  const reachInfo = [
    {
      title: "Successful Events",
      reach: 10
    }, 
    {
      title: "Community Partners",
      reach: 10
    }, 
    {
      title: "Sponsors",
      reach: 10
    }, 
    {
      title: "College Partners",
      reach: 10
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={`py-20 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-[#0A1226] to-[#091B32]' 
          : 'bg-gradient-to-b from-[#f0f4f8] to-[#e2e8f0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative flex flex-col gap-10">
        <motion.div variants={fadeInUp}>
          <Heading 
            title={"Our Reach"} 
            subtitle={"Making an impact across the globe"}
          />
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className={`relative ${
            theme === 'dark' 
              ? 'bg-white/10 backdrop-blur-md border border-white/10' 
              : 'bg-white/60 backdrop-blur-md border border-gray-200'
          } rounded-2xl shadow-xl overflow-hidden h-[240px] sm:h-[340px] md:h-[500px] lg:h-[600px]`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
          <Image 
            src="/extra/map.png"
            fill
            style={{ objectFit: "cover" }}
            alt="D4 Community's global reach"
            className="z-0 opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="w-40 h-40 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
          </div>
        </motion.div>
        
        <motion.div
          variants={staggerContainer} 
          className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12"
        >
          {reachInfo.map((prop, i) => (
            <CounterCard 
              key={i}
              title={prop.title}
              value={prop.reach}
              index={i} 
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// function FounderSection() {
//   const FounderInfo: FounderType[] = [
//     {
//       name: "Ayush Kumar Tiwari - Co-Founder D4",
//       title: "Tomorrow should be better than today.",
//       description: "We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.",
//       link: "https://www.linkedin.com/in/itsayu",
//       image: "/founderImg/AyushKumarTiwari.png",
//       reverse: true
//     }, 
//     {
//       name: "Sagar Malhotra - Co-Founder D4",
//       title: "See how we can help you progress",
//       description: "We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research.",
//       link: "https://www.linkedin.com/in/sagar0-0malhotra",
//       image: "/founderImg/Sagar.png",
//       reverse: false
//     }
//   ];

//   return (
//     <motion.div 
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={staggerContainer}
//       className="py-20 md:py-32"
//     >
//       <motion.div variants={fadeInUp}>
//         <Heading 
//           title={"From D4 Founders"} 
//           subtitle={"Meet the minds behind our community"}
//         />
//       </motion.div>

//       <div className="mt-16 md:mt-24 lg:mt-32 space-y-32 lg:space-y-48">
//         {FounderInfo.map((props, k) => (
//           <motion.div
//             key={k}
//             variants={fadeInUp}
//             transition={{ delay: k * 0.3 }}
//           >
//             <FounderCard 
//               name={props.name}
//               title={props.title}
//               description={props.description}
//               link={props.link}
//               src={props.image}
//               reverse={props.reverse}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

function FounderSection() {
    const { theme } = useTheme();
    const founderInfo = [
      {
        name: "Ayush Kumar Tiwari",
        title: "Tomorrow should be better than today",
        description: "We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.",
        link: "https://www.linkedin.com/in/itsayu",
        image: "/founderImg/AyushKumarTiwari.png",
        position: "Co-Founder D4"
      }, 
      {
        name: "Sagar Malhotra",
        title: "See how we can help you progress",
        description: "We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research.",
        link: "https://www.linkedin.com/in/sagar0-0malhotra",
        image: "/founderImg/Sagar.png",
        position: "Co-Founder D4"
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
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="relative inline-block">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              From Our Founders
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#A46FF2] to-[#E49976]"></div>
          </div>
        </motion.div>
  
        <div className="space-y-32 lg:space-y-48">
          {founderInfo.map((founder, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={founder.image}
                    width={500}
                    height={500}
                    alt={founder.name}
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              
              <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="space-y-6">
                  <h3 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {founder.title}
                  </h3>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {founder.description}
                  </p>
                  <div className="pt-4">
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {founder.name} - {founder.position}
                    </p>
                  </div>
                  <div className="pt-2">
                    <a 
                      href={founder.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm font-medium ${
                        theme === 'dark' 
                          ? 'text-purple-400 hover:text-purple-300' 
                          : 'text-purple-600 hover:text-purple-800'
                      } transition-colors`}
                    >
                      Connect on LinkedIn
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
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