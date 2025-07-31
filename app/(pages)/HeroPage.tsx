'use client';

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Background from "../components/Background";
import HeroImage from "../assets/images/heroimg.png";
import { BlueButton, OrangeButton } from "@/app/components/Buttons";
import { useTheme } from "next-themes";

import d4logo from "../assets/images/d4logo-dark.png";
import d4logoDark from "../assets/images/d4logo.png"; 
import card1 from "../assets/images/heroCard1.png";
import card2 from "../assets/images/heroCard2.png";
import card3 from "../assets/images/heroCard3.png";

import bracketIcon from "../assets/icons/bracketIcon.png";
import chatIcon from "../assets/icons/chatIcon.png";
import terminalIcon from "../assets/icons/terminalIcon.png";
import mentoringImg from "../assets/images/mentoringImg.png";
import mentoring1 from "../assets/icons/mentoring1.png";
import mentoring2 from "../assets/icons/mentoring2.png";
import mentoring3 from "../assets/icons/mentoring3.png";

import { BigHeading, Heading } from "../components/Headings";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StaticImageData } from 'next/image';

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

interface GlassCardProps {
    src: string | StaticImageData;
    title: string;
    description?: string;
    iconBg?: string;
    delay?: number;
  }

  interface MarqueeLineProps {
    direction?: "left" | "right";
    speed?: number;
    index: number;
    pausedLines: number[];
    setPausedLines: React.Dispatch<React.SetStateAction<number[]>>;
  }
  

const programmingLanguages = [
  "JavaScript", "Python", "Java", "C++", "C#", "Ruby", 
  "Go", "Swift", "Kotlin", "Rust", "TypeScript", "PHP",
  "Scala", "Perl", "R", "Dart", "Elixir", "Haskell",
  "Clojure", "Erlang", "F#", "OCaml", "Lua", "Julia",
  "Assembly", "Bash", "SQL", "HTML", "CSS", "React",
  "Angular", "Vue", "Node.js", "Django", "Flask", "Spring",
  "Laravel", "Express", "GraphQL", "MongoDB", "PostgreSQL"
];

const GlassCard = ({ src, title, description, iconBg = "bg-purple-500/20", delay = 0 }: GlassCardProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: delay * 0.15 }}
      className={`rounded-2xl overflow-hidden border ${
        theme === 'dark' 
          ? 'border-white/10 backdrop-blur-lg bg-white/5' 
          : 'border-gray-200 bg-white/80'
      } shadow-lg`}
    >
      <div className="p-8 h-full flex flex-col">
        <div className={`${iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
          <Image src={src} alt={title} width={40} height={40} />
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

const MarqueeLine = ({ direction = "left", speed = 50, index, pausedLines, setPausedLines } : MarqueeLineProps) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const handleHoverStart = () => {
    setPausedLines(prev => [...prev, index]);
    controls.start({
      x: direction === "left" ? "0%" : "-100%",
      transition: { duration: 0.5, ease: "easeOut" }
    });
  };

  const handleHoverEnd = () => {
    setPausedLines(prev => prev.filter(i => i !== index));
    controls.start({
      x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }
    });
  };

  useEffect(() => {
    if (!pausedLines.includes(index)) {
      controls.start({
        x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        transition: {
          duration: pausedLines.length > 0 ? speed * 2 : speed, // Slow down when other lines are paused
          repeat: Infinity,
          ease: "linear",
        }
      });
    }
  }, [pausedLines, index, direction, speed, controls]);

  return (
    <div 
      className="overflow-hidden py-4"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={controls}
      >
        {[...programmingLanguages, ...programmingLanguages].map((lang, i) => (
          <div key={`${index}-${i}`} className="inline-flex items-center mx-6 md:mx-8">
            <span className={`text-2xl md:text-3xl font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:${theme === 'dark' ? 'text-white' : 'text-gray-800'} transition-colors duration-300`}>
              {lang}
            </span>
            <span className="mx-3 md:mx-4 text-gray-500">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const InteractiveMarquee = () => {
  const [pausedLines, setPausedLines] =  useState<number[]>([]);
  const { theme } = useTheme();

  return (
    <div className="mt-20 md:mt-28 lg:mt-36 space-y-2 md:space-y-4">
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-[#0A1226]' : 'from-white'} to-transparent z-10 pointer-events-none h-16`} />
        <MarqueeLine 
          direction="left" 
          speed={60} 
          index={0} 
          pausedLines={pausedLines} 
          setPausedLines={setPausedLines}
        />
      </div>
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-[#0A1226]' : 'from-white'} to-transparent z-10 pointer-events-none h-16`} />
        <MarqueeLine 
          direction="right" 
          speed={70} 
          index={1} 
          pausedLines={pausedLines} 
          setPausedLines={setPausedLines} 
        />
      </div>
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-[#0A1226]' : 'from-white'} to-transparent z-10 pointer-events-none h-16`} />
        <MarqueeLine 
          direction="left" 
          speed={80} 
          index={2} 
          pausedLines={pausedLines} 
          setPausedLines={setPausedLines} 
        />
      </div>
    </div>
  );
};

export default function HeroPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`relative overflow-hidden ${theme === 'dark' ? 'text-white' : 'text-gray-800'} min-h-screen flex flex-col`}>
      <Navbar />
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <HeroSection />
          <InfoSection />
          <MentorSection />
          <InteractiveMarquee />
          <FooterCall />
        </div>
      </div>
      <Footer />
      {theme === 'dark' && <Background />}
    </div>
  );
}

function HeroSection() {
  const { theme } = useTheme();

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="pt-[12rem] lg:pt-[12rem]"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col lg:items-start items-center text-center lg:text-left space-y-10">
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-[#A46FF2] via-[#C97ECC] to-[#E49976] text-transparent bg-clip-text"
          >
            Master Coding with <br className="hidden lg:block" />D4 Community
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className={`text-xl md:text-2xl lg:text-3xl font-light max-w-2xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Learn 70+ languages through interactive challenges and expert mentoring
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center lg:justify-start gap-5 w-full"
          >
            <OrangeButton label={"Get Started"} className="px-10 py-4 text-lg" />
            <BlueButton label={"How It Works"} className="px-10 py-4 text-lg" />
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className={`flex flex-col sm:flex-row items-center gap-6 pt-16 w-full border-t ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            } mt-8`}
          >
            <div className="flex items-center gap-5">
              <Image
                className="w-16 sm:w-20"
                src={theme === 'dark' ? d4logoDark : d4logo}
                alt="D4 logo"
              />
              <p className={`text-base font-light ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Community-powered • Free forever • Open learning
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeInUp}
          className="hidden lg:block relative"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-20 left-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <Image
            className="w-full max-w-2xl mx-auto relative z-10"
            src={HeroImage}
            alt="Hero image showcasing programming interface"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

function InfoSection() {
  const { theme } = useTheme();

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20 md:py-28 lg:py-36"
    >
      <div className="max-w-6xl mx-auto mb-20 md:mb-28">
        <BigHeading 
          title="6400+ Coding Challenges" 
          subtitle="From beginner to expert level - grow at your own pace"
        />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 mb-20 md:mb-28 items-center">
        <div className="flex flex-col gap-12">
          <motion.p 
            variants={fadeInUp}
            className={`text-2xl md:text-3xl lg:text-4xl font-medium ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } leading-relaxed`}
          >
            Learn by solving real-world problems with our structured curriculum
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className={`rounded-2xl overflow-hidden border ${
                theme === 'dark' 
                  ? 'border-white/10 backdrop-blur-lg bg-white/5' 
                  : 'border-gray-200 bg-white/80'
              } shadow-lg`}
            >
              <div className="p-8 flex items-center gap-8">
                <div className="flex-shrink-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-5 rounded-xl">
                  <Image 
                    className="w-16 md:w-20" 
                    src={card1} 
                    alt="Algorithm Challenges" 
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl md:text-3xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>Algorithm Challenges</h3>
                  <p className={`text-lg font-light ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>Sharpen your problem-solving skills with carefully designed algorithm exercises.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className={`rounded-2xl overflow-hidden border ${
                theme === 'dark' 
                  ? 'border-white/10 backdrop-blur-lg bg-white/5' 
                  : 'border-gray-200 bg-white/80'
              } shadow-lg`}
            >
              <div className="p-8 flex items-center gap-8">
                <div className="flex-shrink-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-5 rounded-xl">
                  <Image 
                    className="w-16 md:w-20" 
                    src={card2} 
                    alt="Data Structures" 
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl md:text-3xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>Data Structures</h3>
                  <p className={`text-lg font-light ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>Master essential data structures through practical implementation tasks.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className={`rounded-2xl overflow-hidden border ${
                theme === 'dark' 
                  ? 'border-white/10 backdrop-blur-lg bg-white/5' 
                  : 'border-gray-200 bg-white/80'
              } shadow-lg`}
            >
              <div className="p-8 flex items-center gap-8">
                <div className="flex-shrink-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-5 rounded-xl">
                  <Image 
                    className="w-16 md:w-20" 
                    src={card3} 
                    alt="Pattern Recognition" 
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl md:text-3xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}>Pattern Recognition</h3>
                  <p className={`text-lg font-light ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>Learn to identify and apply common programming patterns efficiently.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeInUp}
          className={`hidden md:block relative h-full min-h-[600px] rounded-3xl overflow-hidden border ${
            theme === 'dark' 
              ? 'border-white/10 backdrop-blur-lg bg-white/5' 
              : 'border-gray-200 bg-white/80'
          } shadow-xl`}
        >
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
                <h3 className={`text-3xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>Interactive Learning</h3>
                <p className={`text-xl ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } mb-8`}>Experience our coding environment with real-time feedback</p>
                
                <div className={`w-full max-w-md rounded-xl p-6 border ${
                  theme === 'dark' 
                    ? 'border-white/10 backdrop-blur-lg bg-white/5' 
                    : 'border-gray-200 bg-white/90'
                } shadow-lg`}>
                  <div className="flex gap-3 mb-4">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  </div>
                  
                  <div className={`font-mono text-base text-left ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  } space-y-3`}>
                    <p className="text-purple-400">function solveChallenge(input) {'{'}</p>
                    <p className="text-blue-400 ml-6">// Your solution here</p>
                    <p className={`ml-6 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>return optimizedResult</p>
                    <p className="text-purple-400">{'}'}</p>
                    <p className="text-green-400">// Test cases automatically verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Heading 
          title="Flexible Learning Paths" 
          subtitle="Choose the approach that works best for you"
          className="mb-16"
        />
        
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12"
        >
          <GlassCard 
            src={bracketIcon} 
            title="Local Development" 
            description="Use our CLI to work offline and integrate with your favorite tools." 
            iconBg="bg-purple-500/20"
            delay={0}
          />
          <GlassCard 
            src={terminalIcon} 
            title="Browser IDE" 
            description="Code directly in your browser with zero setup required." 
            iconBg="bg-blue-500/20"
            delay={1}
          />
          <GlassCard 
            src={chatIcon} 
            title="Smart Feedback" 
            description="Get automated analysis and suggestions before mentor review." 
            iconBg="bg-orange-500/20"
            delay={2}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

function MentorSection() {
  const { theme } = useTheme();
  
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={`py-20 md:py-28 lg:py-36 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-[#0A1226] to-[#091B32]' 
          : 'bg-gradient-to-b from-gray-50 to-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            variants={fadeInUp}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
              <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
              <div className={`relative z-10 rounded-2xl overflow-hidden border ${
                theme === 'dark' 
                  ? 'border-white/10 backdrop-blur-lg bg-white/5' 
                  : 'border-gray-200 bg-white/80'
              } shadow-xl`}>
                <Image 
                  className="w-full max-w-lg mx-auto"
                  src={mentoringImg} 
                  alt="Mentoring illustration" 
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="order-1 md:order-2 space-y-8"
          >
            <BigHeading 
              title="Expert Code Reviews" 
              subtitle="Personalized feedback to level up your skills"
            />
            <p className={`text-xl md:text-2xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } leading-relaxed`}>
              Our mentors provide detailed reviews highlighting improvements, alternative approaches, and language best practices you won't find in documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <OrangeButton label="Request Mentoring" className="px-8 py-4 text-lg" />
              <BlueButton label="Become a Mentor" className="px-8 py-4 text-lg" variant="outline" />
            </div>
          </motion.div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Heading 
            title="Why Mentoring Works" 
            subtitle="The proven path to mastery"
            className="mb-16"
          />
          
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12"
          >
            <GlassCard 
              src={mentoring1} 
              title="Knowledge Gaps" 
              description="Mentors identify blind spots in your understanding and suggest targeted learning." 
              iconBg="bg-purple-500/20"
              delay={0}
            />
            <GlassCard 
              src={mentoring2} 
              title="Best Practices" 
              description="Learn the idioms and patterns that distinguish good code from great code." 
              iconBg="bg-blue-500/20"
              delay={1}
            />
            <GlassCard 
              src={mentoring3} 
              title="Community Growth" 
              description="Both giving and receiving feedback accelerates everyone's learning curve." 
              iconBg="bg-orange-500/20"
              delay={2}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function FooterCall() {
  const { theme } = useTheme();
  
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          className={`rounded-3xl p-12 lg:p-16 overflow-hidden border ${
            theme === 'dark' 
              ? 'border-white/10 backdrop-blur-lg bg-white/5' 
              : 'border-gray-200 bg-white/80'
          } shadow-2xl`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-8 max-w-2xl">
              <Image 
                className="w-28 md:w-32" 
                src={theme === 'dark' ? d4logoDark : d4logo} 
                alt="D4 logo" 
              />
              <h3 className={`font-bold text-4xl md:text-5xl leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                Ready to transform your coding journey?
              </h3>
              <p className={`font-light ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } text-xl`}>
                Join our community of developers who are mastering programming through practice and mentorship.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <OrangeButton label="Start Learning" className="px-10 py-5 text-lg w-full sm:w-auto" />
              <BlueButton label="Explore Challenges" className="px-10 py-5 text-lg w-full sm:w-auto" variant="outline" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}