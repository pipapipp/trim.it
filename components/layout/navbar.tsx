'use client'

import { motion } from 'framer-motion'

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center px-8 py-6"
        >
            <h1 className="text-xl font-bold tracking-wide">
                trim<span className="text-blue-400">.it</span>
            </h1>

            <span className="text-sm text-white/60">
                Smart URL Shortener
            </span>
        </motion.nav>
    )
}