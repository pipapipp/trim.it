"use client"

import { motion } from "framer-motion"
import { Link, QrCode, Zap, Shield } from "lucide-react"

const features = [
    {
        icon: Link,
        title: "Custom Short Links",
        desc: "Create personalized short URLs like trim.it/portfolio."
    },
    {
        icon: QrCode,
        title: "Instant QR Code",
        desc: "Generate QR codes automatically for every shortened link."
    },
    {
        icon: Zap,
        title: "Fast Redirection",
        desc: "Optimized routing ensures instant redirection performance."
    },
    {
        icon: Shield,
        title: "Secure Links",
        desc: "Links are protected and validated for better reliability."
    }
]

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="py-24 px-6 max-w-6xl mx-auto"
        >
            <div className="text-center mb-16">

                <h2 className="text-3xl font-semibold tracking-tight">
                    Why use trim.it?
                </h2>

                <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
                    A simple yet powerful tool to manage and share your links with
                    speed, clarity, and modern design.
                </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {features.map((feature, i) => {
                    const Icon = feature.icon

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl border border-neutral-200 hover:shadow-lg transition"
                        >
                            <Icon className="mb-4 text-blue-600" />

                            <h3 className="font-medium mb-2">
                                {feature.title}
                            </h3>

                            <p className="text-sm text-neutral-500">
                                {feature.desc}
                            </p>

                        </motion.div>
                    )
                })}

            </div>
        </section>
    )
}