'use client'

import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Background from "../components/Background"
import { ParallaxProvider } from 'react-scroll-parallax';
import type { ReactNode } from 'react';

export default function PageLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <ParallaxProvider>
        <div className="bg-white dark:bg-[#0E0C15] text-white">
            <Navbar />
            <div className="">
                {/* {children} */}
          {children}
            </div>
            {/* <Footer /> */}
        </div>
        </ParallaxProvider>
    )
}