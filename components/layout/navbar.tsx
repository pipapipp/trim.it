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
                ? "bg-neutral-900/70 backdrop-blur-md border-b border-white/10"
                : "bg-transparent"
            }`}>
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl font-semibold text-white text-lg"
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

                <div className="flex items-center gap-3">
                    <button className="text-sm px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition">
                        Login
                    </button>
                    <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition">
                        Get Started
                    </button>
                </div>

            </div>
        </nav>
    )
}