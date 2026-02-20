import { create } from 'zustand'

interface Link {
    id: string
    original: string
    slug: string
    short: string
    createdAt: number
}

interface LinkStore {
    links: Link[]
    addLink: (url: string, customSlug?: string) => string | null
    updateSlug: (id: string, newSlug: string) => boolean
}

export const useLinkStore = create<LinkStore>((set, get) => ({
    links: [],

    addLink: (url, customSlug) => {
        const slug =
            customSlug?.trim() ||
            Math.random().toString(36).substring(2, 8)

        const exists = get().links.find((l) => l.slug === slug)
        if (exists) return null

        const newLink = {
            id: crypto.randomUUID(),
            original: url,
            slug,
            short: `trim.it/${slug}`,
            createdAt: Date.now(),
        }

        set((state) => ({
            links: [newLink, ...state.links],
        }))

        return slug
    },

    updateSlug: (id, newSlug) => {
        const exists = get().links.find((l) => l.slug === newSlug)
        if (exists) return false

        set((state) => ({
            links: state.links.map((link) =>
                link.id === id
                    ? {
                        ...link,
                        slug: newSlug,
                        short: `trim.it/${newSlug}`,
                    }
                    : link
            ),
        }))

        return true
    },
}))