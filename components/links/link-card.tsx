'use client'

import { useState, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Download, QrCode } from 'lucide-react'

export default function LinkCard({ link }: any) {
    const [showQR, setShowQR] = useState(false)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const downloadQR = () => {
        if (!canvasRef.current) return
        const url = canvasRef.current
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream')

        const a = document.createElement('a')
        a.href = url
        a.download = `${link.slug}-qr.png`
        a.click()
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-6 rounded-xl space-y-4"
        >
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-white/60 truncate max-w-xs">
                        {link.original}
                    </p>
                    <p className="font-semibold text-lg">
                        {link.short}
                    </p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    onClick={() =>
                        navigator.clipboard.writeText(
                            `https://${link.short}`
                        )
                    }
                    className="p-2 hover:bg-white/10 rounded-lg"
                >
                    <Copy size={18} />
                </motion.button>
            </div>

            {/* Toggle QR */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setShowQR(!showQR)}
                className="flex items-center gap-2 text-sm text-blue-400"
            >
                <QrCode size={16} />
                {showQR ? 'Hide QR Code' : 'Show QR Code'}
            </motion.button>

            {/* QR Section */}
            <AnimatePresence>
                {showQR && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center gap-4 pt-4"
                    >
                        <QRCodeCanvas
                            value={`https://${link.short}`}
                            size={160}
                            bgColor="transparent"
                            fgColor="#ffffff"
                            ref={canvasRef}
                        />

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 0px 20px rgba(59,130,246,0.6)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            onClick={downloadQR}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-medium"
                        >
                            <Download size={16} />
                            Download QR Code
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}