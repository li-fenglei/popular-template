import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">CopyWeb</h3>
                        <p className="text-gray-600 mb-4">
                            CopyWeb is an AI-powered tool that lets you clone any website design from a screenshot or URL, helping developers build faster.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Features</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">URL to Code</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Screenshot to Code</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Figma to Code</Link></li>
                        </ul>
                    </div>

                    <div className="md:text-right">
                        <Link href="/" className="text-2xl font-bold">
                            CopyWeb
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
                    <p className="text-gray-600 mb-4 md:mb-0">
                        © 2025 • CopyWeb All rights reserved. build with ShipAny
                    </p>

                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 