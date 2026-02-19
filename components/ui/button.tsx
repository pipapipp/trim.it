import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "outline"
    size?: "default" | "sm" | "lg" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        const base =
            "inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none"

        const variants = {
            default: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md",
            secondary:
                "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-white",
            outline:
                "border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800",
        }

        const sizes = {
            default: "h-10 px-4",
            sm: "h-8 px-3 text-sm",
            lg: "h-12 px-6 text-lg",
            icon: "h-10 w-10 p-0",
        }

        return (
            <button
                ref={ref}
                className={cn(base, variants[variant], sizes[size], className)}
                {...props}
            />
        )
    }
)

Button.displayName = "Button"
