export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 mt-24">

            <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

                <div>
                    <h3 className="font-semibold text-lg">
                        trim.it
                    </h3>

                    <p className="text-sm text-neutral-500 mt-3">
                        A modern URL shortener built for speed, simplicity,
                        and clean user experience.
                    </p>
                </div>

                <div>
                    <h4 className="font-medium mb-3">Product</h4>

                    <ul className="space-y-2 text-sm text-neutral-500">
                        <li>Features</li>
                        <li>Analytics</li>
                        <li>QR Codes</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-3">Resources</h4>

                    <ul className="space-y-2 text-sm text-neutral-500">
                        <li>Documentation</li>
                        <li>GitHub</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-sm text-neutral-400 pb-6">
                © {new Date().getFullYear()} trim.it — All rights reserved
            </div>

        </footer>
    )
}