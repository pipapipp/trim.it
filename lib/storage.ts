import { LinkItem } from '../store/link-store'

export const saveToStorage = (links: LinkItem[]) => {
    localStorage.setItem('links', JSON.stringify(links))
}

export const loadFromStorage = (): LinkItem[] => {
    const stored = localStorage.getItem('links')
    return stored ? JSON.parse(stored) : []
}
