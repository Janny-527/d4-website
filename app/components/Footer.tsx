'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import d4logo from "../assets/images/d4logo-dark.png";
import d4logoDark from "../assets/images/d4logo.png"; 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="relative z-[5] border-t border-[#EC5735]/30 bg-background/80 backdrop-blur-lg">
      <div className="container px-4 py-8">
        {/* Desktop View */}
        <div className="hidden xl:block">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Image 
                className="w-14 transition-transform hover:scale-105" 
                src={theme === 'dark' ? d4logoDark : d4logo} 
                alt="D4 Community Logo" 
                width={56}
                height={56}
              />
              <p className="text-2xl font-bold bg-gradient-to-r from-[#EC5735] to-[#A46FF2] bg-clip-text text-transparent">
                D4 Community
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-16">
              <FooterLinks
                heading="Legal & Policies"
                links={[
                  "Terms Of Usage",
                  "Privacy Policy",
                  "Cookie Policy",
                  "Code of Conduct",
                  "Accessibility Statement"
                ]}
              />
              
              <FooterLinks
                heading="Get Involved"
                links={[
                  "D4 Insider",
                  "Contribute",
                  "Mentor",
                  "Donate"
                ]}
              />
              
              <FooterLinks
                heading="About D4"
                links={[
                  "About Us",
                  "Our Team",
                  "Partners",
                  "Individual Support"
                ]}
              />
              
              <FooterLinks
                heading="Get Help"
                links={[
                  "Getting Started",
                  "Documentation",
                  "FAQs",
                  "Contact Us"
                ]}
              />
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="xl:hidden">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Image 
                className="w-12 transition-transform hover:scale-105" 
                src={theme === 'dark' ? d4logoDark : d4logo} 
                alt="D4 Community Logo" 
                width={48}
                height={48}
              />
              <p className="text-xl font-bold bg-gradient-to-r from-[#EC5735] to-[#A46FF2] bg-clip-text text-transparent">
                D4 Community
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="legal">
                <AccordionTrigger className="text-lg font-medium text-foreground">
                  Legal & Policies
                </AccordionTrigger>
                <AccordionContent>
                  <FooterLinks 
                    links={[
                      "Terms Of Usage",
                      "Privacy Policy",
                      "Cookie Policy",
                      "Code of Conduct",
                      "Accessibility Statement"
                    ]}
                  />
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="involved">
                <AccordionTrigger className="text-lg font-medium text-foreground">
                  Get Involved
                </AccordionTrigger>
                <AccordionContent>
                  <FooterLinks 
                    links={[
                      "D4 Insider",
                      "Contribute",
                      "Mentor",
                      "Donate"
                    ]}
                  />
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="about">
                <AccordionTrigger className="text-lg font-medium text-foreground">
                  About D4
                </AccordionTrigger>
                <AccordionContent>
                  <FooterLinks 
                    links={[
                      "About Us",
                      "Our Team",
                      "Partners",
                      "Individual Support"
                    ]}
                  />
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="help">
                <AccordionTrigger className="text-lg font-medium text-foreground">
                  Get Help
                </AccordionTrigger>
                <AccordionContent>
                  <FooterLinks 
                    links={[
                      "Getting Started",
                      "Documentation",
                      "FAQs",
                      "Contact Us"
                    ]}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`${theme === 'dark' ? 'bg-gradient-to-r from-[#091B32] to-[#0A1226]' : 'bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef]'}`}>
        <div className="container flex flex-col items-center justify-between gap-6 px-4 py-6 md:flex-row">
          <div className="flex gap-4">
            {[
              { 
                href: "https://discord.com/invite/RPpYB8JpUQ", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6">
                    <path fill="currentColor" d="M41.625 10.769531C37.644531 7.566406 31.347656 7.023438 31.078125 7.003906C30.660156 6.96875 30.261719 7.203125 30.089844 7.589844C30.074219 7.613281 29.9375 7.929688 29.785156 8.421875C32.417969 8.867188 35.652344 9.761719 38.578125 11.578125C39.046875 11.867188 39.191406 12.484375 38.902344 12.953125C38.710938 13.261719 38.386719 13.429688 38.050781 13.429688C37.871094 13.429688 37.6875 13.378906 37.523438 13.277344C32.492188 10.15625 26.210938 10 25 10C23.789063 10 17.503906 10.15625 12.476563 13.277344C12.007813 13.570313 11.390625 13.425781 11.101563 12.957031C10.808594 12.484375 10.953125 11.871094 11.421875 11.578125C14.347656 9.765625 17.582031 8.867188 20.214844 8.425781C20.0625 7.929688 19.925781 7.617188 19.914063 7.589844C19.738281 7.203125 19.34375 6.960938 18.921875 7.003906C18.652344 7.023438 12.355469 7.566406 8.320313 10.8125C6.214844 12.761719 2 24.152344 2 34C2 34.175781 2.046875 34.34375 2.132813 34.496094C5.039063 39.605469 12.972656 40.941406 14.78125 41C14.789063 41 14.800781 41 14.8125 41C15.132813 41 15.433594 40.847656 15.621094 40.589844L17.449219 38.074219C12.515625 36.800781 9.996094 34.636719 9.851563 34.507813C9.4375 34.144531 9.398438 33.511719 9.765625 33.097656C10.128906 32.683594 10.761719 32.644531 11.175781 33.007813C11.234375 33.0625 15.875 37 25 37C34.140625 37 38.78125 33.046875 38.828125 33.007813C39.242188 32.648438 39.871094 32.683594 40.238281 33.101563C40.601563 33.515625 40.5625 34.144531 40.148438 34.507813C40.003906 34.636719 37.484375 36.800781 32.550781 38.074219L34.378906 40.589844C34.566406 40.847656 34.867188 41 35.1875 41C35.199219 41 35.210938 41 35.21875 41C37.027344 40.941406 44.960938 39.605469 47.867188 34.496094C47.953125 34.34375 48 34.175781 48 34C48 24.152344 43.785156 12.761719 41.625 10.769531ZM18.5 30C16.566406 30 15 28.210938 15 26C15 23.789063 16.566406 22 18.5 22C20.433594 22 22 23.789063 22 26C22 28.210938 20.433594 30 18.5 30ZM31.5 30C29.566406 30 28 28.210938 28 26C28 23.789063 29.566406 22 31.5 22C33.433594 22 35 23.789063 35 26C35 28.210938 33.433594 30 31.5 30Z"/>
                  </svg>
                )
              },
              {
                href: "https://github.com/D4Community",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="w-6 h-6">
                    <path fill="currentColor" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
                  </svg>
                )
              },
              {
                href: "https://x.com/D4community",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6">
                    <path fill="currentColor" d="M5.9199219 6L20.582031 27.375L6.2304688 44L9.4101562 44L21.986328 29.421875L31.986328 44L44 44L28.681641 21.669922L42.199219 6L39.029297 6L27.275391 19.617188L17.933594 6L5.9199219 6zM9.7167969 8L16.880859 8L40.203125 42L33.039062 42L9.7167969 8z"/>
                  </svg>
                )
              },
              {
                href: "https://chat.whatsapp.com/Khwy3LEyjdX4Kx8VJ1MXmW",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6">
                    <path fill="currentColor" d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23S37.682,2,25,2zM36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681C37.062,30.587,37.062,31.755,36.57,33.116z"/>
                  </svg>
                )
              },
              {
                href: "https://www.linkedin.com/company/d4community/",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6">
                    <path fill="currentColor" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4zM17,20v19h-6V20H17zM11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47zM39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                  </svg>
                )
              },
              {
                href: "https://www.instagram.com/d4community",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6">
                    <path fill="currentColor" d="M16,3C8.83,3,3,8.83,3,16L3,34C3,41.17,8.83,47,16,47L34,47C41.17,47,47,41.17,47,34L47,16C47,8.83,41.17,3,34,3L16,3zM37,11C38.1,11,39,11.9,39,13C39,14.1,38.1,15,37,15C35.9,15,35,14.1,35,13C35,11.9,35.9,11,37,11zM25,14C31.07,14,36,18.93,36,25C36,31.07,31.07,36,25,36C18.93,36,14,31.07,14,25C14,18.93,18.93,14,25,14zM25,16C20.04,16,16,20.04,16,25C16,29.96,20.04,34,25,34C29.96,34,34,29.96,34,25C34,20.04,29.96,16,25,16z"/>
                  </svg>
                )
              }
            ].map((social, index) => (
              <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={`rounded-full ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} transition-colors`}
                >
                  {social.icon}
                </Button>
              </Link>
            ))}
          </div>
          
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} D4 Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ heading, links }: { heading?: string; links: string[] }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-3">
      {heading && (
        <h3 className="text-lg font-semibold text-foreground">
          {heading}
        </h3>
      )}
      <ul className="space-y-2">
        {links.filter(Boolean).map((link, index) => (
          <li key={index}>
            <a 
              href="#" 
              className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors text-sm`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}