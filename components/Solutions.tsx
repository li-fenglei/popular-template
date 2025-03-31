import { MonitorSmartphone, Globe, Figma, Layers, Code2, Smartphone } from 'lucide-react'

export default function Solutions() {
    const solutions = [
        {
            title: "Screenshot to Code",
            description: "Upload any design screenshot and get pixel-perfect code.",
            icon: <MonitorSmartphone className="h-8 w-8 text-blue-500" />
        },
        {
            title: "URL to Code",
            description: "Clone any website by simply pasting its URL.",
            icon: <Globe className="h-8 w-8 text-blue-500" />
        },
        {
            title: "Figma to Code",
            description: "Direct integration with Figma - convert your designs with one click.",
            icon: <Figma className="h-8 w-8 text-blue-500" />
        },
        {
            title: "Smart Component Detection",
            description: "AI automatically identifies and maps UI components.",
            icon: <Layers className="h-8 w-8 text-blue-500" />
        },
        {
            title: "Framework Choice",
            description: "Export to React, Vue, or clean HTML/CSS code.",
            icon: <Code2 className="h-8 w-8 text-blue-500" />
        },
        {
            title: "Responsive by Default",
            description: "All generated code is mobile-friendly and responsive.",
            icon: <Smartphone className="h-8 w-8 text-blue-500" />
        }
    ]

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">CopyWeb's Design-to-Code Solutions</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to convert designs into production-ready code efficiently.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg border">
                            <div className="mb-4">{solution.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                            <p className="text-gray-600">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 