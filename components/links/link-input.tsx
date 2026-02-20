'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { useLinkStore } from '@/store/link-store'
import Button from '@/components/ui/button'

export default function LinkInput() {
    const [url, setUrl] = useState('')
    const [slug, setSlug] = useState('')
    const [loading, setLoading] = useState(false)
    const addLink = useLinkStore((state) => state.addLink)

    const handleShorten = async () => {
        if (!url) return

        setLoading(true)
        await new Promise((res) => setTimeout(res, 800))

        const result = addLink(url, slug)
        if (!result) alert('Slug already taken!')

        setUrl('')
        setSlug('')
        setLoading(false)
    }

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const buttonVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120
            }
        }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 w-full max-w-2xl space-y-4"
        >
            {/* Paste URL */}
            <motion.input
                variants={itemVariants}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your long URL..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />

            {/* Custom Slug */}
            <motion.div
                variants={itemVariants}
                className="flex gap-3"
            >
                <span className="px-4 py-3 bg-white/10 rounded-xl backdrop-blur-md">
                    trim.it/
                </span>

                <input
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="custom-slug (optional)"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                />
            </motion.div>

            {/* Button */}
            <motion.div variants={buttonVariants}>
                <Button
                    onClick={handleShorten}
                    loading={loading}
                    className="w-full"
                >
                    {loading ? 'Processing...' : 'Trim It'}
                </Button>
            </motion.div>
        </motion.div>
    )
}