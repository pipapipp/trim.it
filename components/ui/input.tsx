import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={cn(
                    "flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900",
                    className
                )}
                {...props}
            />
        )
    }
)

Input.displayName = "Input"
