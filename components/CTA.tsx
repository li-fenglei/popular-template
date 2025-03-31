import { Button } from '@/components/ui/button'

export default function CTA() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Try CopyWeb Now</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Start converting designs to code in seconds. Shipping faster with CopyWeb.
                </p>
                <Button size="lg">Let's Start</Button>
            </div>
        </section>
    )
} 