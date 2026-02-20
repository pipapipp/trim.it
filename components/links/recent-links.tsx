'use client'

import { useLinkStore } from '@/store/link-store'
import LinkCard from './link-card'

export default function RecentLinks() {
    const links = useLinkStore((state) => state.links)

    if (!links.length) return null

    return (
        <section className="max-w-2xl mx-auto mt-20 px-6 space-y-4">
            <h2 className="text-lg font-semibold text-white/70">
                Recent Links
            </h2>

            {links.map((link) => (
                <LinkCard key={link.id} link={link} />
            ))}
        </section>
    )
}