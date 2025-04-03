import Image from 'next/image'

// 技术框架数据
const frameworks = [
    {
        name: "HTML5",
        logo: "/images/frameworks/html.svg",
        alt: "HTML5 logo"
    },
    {
        name: "Next.js",
        logo: "/images/frameworks/nextjs.svg",
        alt: "Next.js logo"
    },
    {
        name: "React",
        logo: "/images/frameworks/react.svg",
        alt: "React logo"
    },
    {
        name: "Tailwind CSS",
        logo: "/images/frameworks/tailwindcss.svg",
        alt: "Tailwind CSS logo"
    },
    {
        name: "Shadcn/ui",
        logo: "/images/frameworks/shadcn.svg",
        alt: "Shadcn/ui logo"
    },
    {
        name: "Vue",
        logo: "/images/frameworks/vue.svg",
        alt: "Vue logo"
    }
]

export default function TechFrameworks() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-700 mb-12">
                    Design to Code with Popular Frameworks
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                    {frameworks.map((framework, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-12 h-12 md:w-16 md:h-16">
                                <Image
                                    src={framework.logo}
                                    alt={framework.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 