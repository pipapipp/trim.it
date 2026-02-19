'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ThemeToggle({ theme, setTheme }: any) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full backdrop-blur-xl bg-white/40 dark:bg-white/10 border border-white/20 shadow-lg"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <AnimatePresence mode="wait">
          {theme === 'light' ? (
            <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <Moon className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <Sun className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </div>
  )
}