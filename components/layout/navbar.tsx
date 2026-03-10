"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
                ? "bg-neutral-950/90 backdrop-blur border-b border-white/10"
                : "bg-transparent"
            }`}>
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl font-semibold tracking-tight"
                >
                    trim<span className="text-blue-600">.it</span>
                </motion.div>

                <div className="hidden md:flex items-center gap-8 text-sm text-white-600">
                    <a href="#features" className="text-neutral-300 hover:text-white">
                        Features
                    </a>
                    <a href="#how" className="text-neutral-300 hover:text-white">
                        How it works
                    </a>
                    <a href="#stats" className="text-neutral-300 hover:text-white">
                        Stats
                    </a>
                </div>

                <button className="bg-white text-black hover:bg-neutral-200">
                    Get Started
                </button>

            </div>
        </nav>
    )
}