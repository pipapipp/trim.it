"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"

const stats = [
    {
        number: '' + "+", 
        label: "Links shortened"
    },
    {
        number: "5K+",
        label: "QR codes generated"
    },
    {
        number: "2K+",
        label: "Active users"
    },
    {
        number: "99.9%",
        label: "Uptime"
    }
]

export default function Stats() {
    return (
        <section id="stats" className="py-24 bg-neutral-950 text-white border-t border-white/10">

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >

                        <h3 className="text-4xl font-bold">
                            {stat.number}
                            <CountUp
                                end={250}
                                duration={2}
                                separator=","
                            />
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