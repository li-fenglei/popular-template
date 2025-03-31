import { CheckCircle } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">What is CopyWeb</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        CopyWeb is an AI-powered web cloning tool that converts any website design into production-ready code instantly.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Screenshot to Code</h3>
                        <p className="text-gray-600">
                            Upload a screenshot and get clean, responsive code instantly.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">URL to Clone</h3>
                        <p className="text-gray-600">
                            Enter any URL and clone the entire website structure automatically.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Instant Export</h3>
                        <p className="text-gray-600">
                            Export to React, Vue, or plain HTML/CSS with one click.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
} 