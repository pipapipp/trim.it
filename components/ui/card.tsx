import * as React from "react"
import { cn } from "../../lib/utils"

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border bg-white dark:bg-gray-900 shadow-md",
                className
            )}
            {...props}
        />
    )
}

export function CardContent({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("p-6", className)} {...props} />
    )
}
