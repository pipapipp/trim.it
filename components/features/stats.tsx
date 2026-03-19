"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"

const stats = [
    { value: 250, suffix: "+", label: "Links shortened" },
    { value: 150, suffix: "+", label: "QR codes generated" },
    { value: 300, suffix: "+", label: "Active users" },
]

export default function Stats() {
    return (
        <section id="stats" className="py-24 bg-neutral-950 text-white">

            <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        className="border-l border-white/10 first:border-none"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >

                        <h3 className="text-4xl font-bold">

                            <CountUp
                                end={stat.value}
                                duration={2}
                                separator=","
                                decimals={stat.value % 1 !== 0 ? 1 : 0}
                            />

                            {stat.suffix}

                        </h3>

                        <p className="text-neutral-400 text-sm mt-2">
                            {stat.label}
                        </p>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}