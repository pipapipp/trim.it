export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-white border-t border-white/10">

            <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

                <div>
                    <h3 className="font-semibold text-lg">
                        trim<span className="text-blue-500">.it</span>
                    </h3>

                    <p className="text-neutral-400 mt-3 text-sm">
                        A modern URL shortener designed for speed,
                        simplicity, and clean user experience.
                    </p>
                </div>

                <div>
                    <h4 className="font-medium mb-3">Product</h4>

                    <ul className="space-y-2 text-neutral-400 text-sm">
                        <li className="hover:text-white transition">Features</li>
                        <li className="hover:text-white transition">QR Codes</li>
                        <li className="hover:text-white transition">Analytics</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-3">Resources</h4>

                    <ul className="space-y-2 text-neutral-400 text-sm">
                        <li className="hover:text-white transition">Documentation</li>
                        <li className="hover:text-white transition">GitHub</li>
                        <li className="hover:text-white transition">Contact</li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-neutral-500 text-sm pb-6">
                © {new Date().getFullYear()} trim.it
            </div>

        </footer>
    )
}