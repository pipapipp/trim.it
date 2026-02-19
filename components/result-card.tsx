'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import QRCode from 'react-qr-code'
import { toast } from 'sonner'

export default function ResultCard({ shortUrl }: { shortUrl: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    toast.success('Copied successfully 🚀')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
      <Card className="max-w-2xl mx-auto rounded-3xl backdrop-blur-xl bg-white/40 dark:bg-white/10">
        <CardContent className="p-8 flex justify-between items-center">
          <p className="font-semibold break-all">{shortUrl}</p>
          <div className="flex items-center gap-4">
            <Button onClick={handleCopy} variant="secondary">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </Button>
            <QRCode value={shortUrl} size={64} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
