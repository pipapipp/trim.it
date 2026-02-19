'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HeroSection({ onShorten }: { onShorten: (url: string) => void }) {
    const [url, setUrl] = useState('')

    return (
        <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
            <motion.h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Shorten. Share. Track.
            </motion.h1>

            <motion.div className="mt-10 w-full max-w-2xl">
                <div className="flex flex-col md:flex-row gap-4">
                    <Input
                        placeholder="Paste your long URL here..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="h-14 text-lg rounded-2xl backdrop-blur-xl bg-white/50 dark:bg-white/5"
                    />
                    <Button
                        onClick={() => {
                            if (!url) return
                            onShorten(url)
                            setUrl('')
                        }}
                        className="h-14 px-8 text-lg rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600"
                    >
                        <Link2 className="mr-2 w-5 h-5" /> Shorten
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}
