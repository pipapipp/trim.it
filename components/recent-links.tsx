'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { useLinkStore } from '@/store/link-store'

export default function RecentLinks() {
  const links = useLinkStore((state) => state.links)

  return (
    <section className="px-6 pb-32">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {links.map((link, index) => (
          <motion.div key={link.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
            <Card className="rounded-2xl backdrop-blur-xl bg-white/40 dark:bg-white/10">
              <CardContent className="p-6">
                <p className="truncate text-sm text-gray-500">{link.original}</p>
                <p className="truncate font-medium">{link.short}</p>
                <p className="text-xs text-gray-400 mt-2">{link.clicks} clicks</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}