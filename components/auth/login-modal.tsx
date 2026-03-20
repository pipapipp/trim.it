"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"

export default function LoginModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean
    onClose: () => void
}) {
    const [mode, setMode] = useState<"login" | "signup">("login")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 px-4 space-y-4"
                        key={mode}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-md p-8 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-xl"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-white">
                                    {mode === "login" ? "Welcome Back" : "Create a New Account"}
                                </h2>

                                <button onClick={onClose}>
                                    <X className="text-neutral-400 hover:text-white" />
                                </button>
                            </div>

                            {mode === "signup" && (
                                <input 
                                    type="text"
                                    placeholder="Username"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                                />
                            )}

                            {/* Input */}
                            <div className="space-y-4">

                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />

                            </div>

                            {/* Button */}
                            <button
                                className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition"
                            >
                                {mode === "login" ? "Login" : "Create Account"}
                            </button>

                            {/* Divider */}
                            <div className="flex items-center gap-4 my-6">
                                <div className="flex-1 h-px bg-white/10" />
                                <span className="text-sm text-neutral-400">or</span>
                                <div className="flex-1 h-px bg-white/10" />
                            </div>

                            {/* Google Button */}
                            <button className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition">
                                Continue with Google
                            </button>

                            {/* Footer */}
                            <p className="text-sm text-neutral-400 text-center mt-6">
                                {mode === "login" ? (
                                    <>
                                        Don't have an account?{" "}
                                        <span
                                            onClick={() => setMode("signup")}
                                            className="text-white hover:underline cursor-pointer"
                                        >
                                            Sign Up
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        Already have an account?{" "}
                                        <span
                                            onClick={() => setMode("login")}
                                            className="text-white hover:underline cursor-pointer"
                                        >
                                            Login
                                        </span>
                                    </>
                                )}
                            </p>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}