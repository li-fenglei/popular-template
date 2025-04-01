import Link from 'next/link'
import Image from 'next/image'
import { Fingerprint } from 'lucide-react'

type ExampleCard = {
    title: string;
    image: string;
    link: string;
}

const examples: ExampleCard[] = [
    {
        title: "Twitter Prototype",
        image: "/images/twitter-prototype.png",
        link: "/examples/twitter"
    },
    {
        title: "AI search prototype",
        image: "/images/ai-search.png",
        link: "/examples/ai-search"
    },
    {
        title: "YouTube",
        image: "/images/youtube.png",
        link: "/examples/youtube"
    },
    {
        title: "AI Search Engine",
        image: "/images/ai-search-engine.png",
        link: "/examples/search-engine"
    },
    {
        title: "AI SaaS Boilerplate",
        image: "/images/ai-saas.png",
        link: "/examples/saas"
    },
    {
        title: "CopyWeb",
        image: "/images/copyweb.png",
        link: "/examples/copyweb"
    }
]

export default function ExampleCards() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-sm font-normal text-muted-foreground mb-4 px-2">Try these examples for free👇</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {examples.map((example, index) => (
                        <Link href={example.link} key={index} className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-48">
                                    <Image
                                        src={example.image}
                                        alt={example.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-lg">{example.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
} 