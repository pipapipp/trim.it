'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
    children: ReactNode
    onClick?: () => void
    loading?: boolean
    className?: string
    disabled?: boolean
}

export default function Button({
    children,
    onClick,
    loading = false,
    className,
    disabled = false,
}: ButtonProps) {
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 25px rgba(59,130,246,0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 100 }}
            onClick={onClick}
            disabled={disabled || loading}
            className={clsx(
                `
        relative
        overflow-hidden
        px-6 py-3
        rounded-xl
        font-semibold
        text-white
        bg-gradient-to-r
        from-blue-500
        to-purple-500
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        `,
                className
            )}
        >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-400" />

            <span className="relative flex items-center justify-center gap-2">
                {loading && (
                    <Loader2 className="animate-spin" size={18} />
                )}
                {children}
            </span>
        </motion.button>
    )
}