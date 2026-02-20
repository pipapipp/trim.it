'use client'

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <div className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl opacity-30 top-[-200px] left-[-200px] animate-pulse" />
            <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-30 bottom-[-200px] right-[-200px] animate-pulse" />
        </div>
    )
}