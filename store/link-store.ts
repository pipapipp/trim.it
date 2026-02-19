import { create } from 'zustand'

export interface LinkItem {
    id: number
    original: string
    short: string
    clicks: number
}

interface LinkStore {
    links: LinkItem[]
    addLink: (link: LinkItem) => void
    setLinks: (links: LinkItem[]) => void
}

export const useLinkStore = create<LinkStore>((set) => ({
    links: [],
    addLink: (link) => set((state) => ({ links: [link, ...state.links] })),
    setLinks: (links) => set({ links }),
}))
