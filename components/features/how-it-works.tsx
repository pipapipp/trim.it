"use client"

import { motion } from "framer-motion"

const steps = [
    {
        step: "01",
        title: "Paste your link",
        desc: "Insert the long URL you want to shorten into the input field."
    },
    {
        step: "02",
        title: "Customize your slug",
        desc: "Create a personalized short link like trim.it/portfolio."
    },
    {
        step: "03",
        title: "Share anywhere",
        desc: "Copy the link or download the QR code to share instantly."
    }
]

export default function HowItWorks() {
    return (
        <section id="how" className="py-24 max-w-6xl mx-auto px-6">

            <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold tracking-tight">
                    How trim.it works
                </h2>

                <p className="text-neutral-500 mt-4">
                    Shorten your links in just a few seconds.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="p-6 rounded-2xl border border-neutral-200 hover:shadow-lg transition"
                    >
                        <span className="text-sm text-blue-600 font-medium">
                            {step.step}
                        </span>

                        <h3 className="mt-3 font-semibold text-lg">
                            {step.title}
                        </h3>

                        <p className="text-neutral-500 text-sm mt-2">
                            {step.desc}
                        </p>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}