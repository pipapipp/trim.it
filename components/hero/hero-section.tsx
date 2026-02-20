'use client'

import { motion } from 'framer-motion'
import LinkInput from '../links/link-input'

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center text-center mt-20 px-6">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
            >
                Trim Your Long Links Instantly
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-white/60 max-w-xl"
            >
                Create clean, short and shareable URLs in seconds.
            </motion.p>

            <LinkInput />
        </section>
    )
}