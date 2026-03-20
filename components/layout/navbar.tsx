"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import LoginModal from "../auth/login-modal"
import { useAuthStore } from "../../store/auth-store"
import { supabase } from "../../lib/supabase"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)
    const user = useAuthStore((state) => state.user)
    const handleLogout = async () => {
        await supabase.auth.signOut()
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleClick = () => setOpenMenu(false)
        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [])

    return (
        <>
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

                        {user ? (
                            <div className="relative">

                                {/* USER BUTTON */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setOpenMenu(!openMenu)
                                    }}
                                    className="text-sm px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
                                >
                                    {user.email}
                                </button>

                                {/* DROPDOWN */}
                                {openMenu && (
                                    <div className="absolute right-0 mt-2 w-40 rounded-xl bg-neutral-900 border border-white/10 shadow-lg overflow-hidden">

                                        <button
                                            className="w-full text-left px-4 py-2 text-sm text-neutral-300 hover:bg-white/10"
                                        >
                                            Dashboard
                                        </button>

                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
                                        >
                                            Logout
                                        </button>

                                    </div>
                                )}

                            </div>
                        ) : (
                            <button
                                onClick={() => setOpenLogin(true)}
                                className="text-sm px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition"
                            >
                                Login
                            </button>
                        )}

                        {/* GET STARTED */}
                        <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition">
                            Get Started
                        </button>

                    </div>

                </div>
            </nav>
            <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
        </>
    )
}