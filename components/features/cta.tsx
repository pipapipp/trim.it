"use client"

import { motion } from "framer-motion"

export default function CTA() {
    return (
        <section className="py-24 px-6">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="max-w-4xl mx-auto text-center p-12 rounded-3xl border border-neutral-200"
            >

                <h2 className="text-3xl font-semibold tracking-tight">
                    Start shortening your links today
                </h2>

                <p className="text-neutral-500 mt-4">
                    Simple, fast, and designed for modern workflows.
                </p>

                <button className="mt-8 px-6 py-3 rounded-xl bg-black text-white hover:bg-neutral-800 transition">
                    Try trim.it now
                </button>

            </motion.div>

        </section>
    )
}