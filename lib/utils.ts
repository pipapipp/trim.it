export const generateShortCode = () =>
    Math.random().toString(36).substring(2, 8)

export function cn(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ")
}
