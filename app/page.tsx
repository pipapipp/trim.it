'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import ThemeToggle from '@/components/theme-toggle'
import HeroSection from '@/components/hero-section'
import ResultCard from '@/components/result-card'
import RecentLinks from '@/components/recent-links'
import { useLinkStore } from '@/store/link-store'
import { generateShortCode } from '@/lib/utils'
import { loadFromStorage, saveToStorage } from '@/lib/storage'

export default function Home() {
  const { links, addLink, setLinks } = useLinkStore()
  const [shortUrl, setShortUrl] = useState<string | null>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    setLinks(loadFromStorage())
  }, [setLinks])

  useEffect(() => {
    saveToStorage(links)
  }, [links])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const handleShorten = (url: string) => {
    const code = generateShortCode()
    const newLink = {
      id: Date.now(),
      original: url,
      short: `${window.location.origin}/${code}`,
      clicks: Math.floor(Math.random() * 100),
    }

    addLink(newLink)
    setShortUrl(newLink.short)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#0f0f12] dark:to-[#1a1a22] transition-colors duration-500">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <HeroSection onShorten={handleShorten} />
      <AnimatePresence>
        {shortUrl && <ResultCard shortUrl={shortUrl} />}
      </AnimatePresence>
      <RecentLinks />
    </div>
  )
}