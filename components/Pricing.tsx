import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Check } from 'lucide-react'

export default function Pricing() {
    const plans = [
        {
            name: "Hobby",
            popular: true,
            price: "$16.99",
            period: "month",
            description: "For hobby users",
            features: [
                "200 credits monthly",
                "Screenshot to code generation",
                "URL to code generation",
                "Figma to code generation",
                "Preview online & Export code"
            ],
            buttonText: "Get Hobby",
            note: "cancel anytime"
        },
        {
            name: "Pro",
            popular: false,
            price: "$28.99",
            period: "month",
            description: "For professional developers",
            features: [
                "400 credits monthly",
                "Screenshot to code generation",
                "URL to code generation",
                "Figma to code generation",
                "Preview online & Export code"
            ],
            buttonText: "Get Pro",
            note: "cancel anytime"
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Plans and Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Free your imagination with CopyWeb, enjoy the fantastic design to code experience.
                    </p>
                </div>

                <Tabs defaultValue="yearly" className="max-w-md mx-auto mb-12">
                    <TabsList className="grid grid-cols-3">
                        <TabsTrigger value="yearly">Yearly</TabsTrigger>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        <TabsTrigger value="payg">Pay as you go</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`bg-white p-8 rounded-lg border ${plan.popular ? 'border-blue-500 shadow-md' : ''}`}>
                            {plan.popular && (
                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                                    Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="mt-4 mb-6">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-gray-500">/ {plan.period}</span>
                            </div>
                            <p className="text-gray-600 mb-6">{plan.description}</p>

                            <div className="mb-8">
                                <p className="font-medium mb-4">Includes</p>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button className="w-full">{plan.buttonText}</Button>
                            <p className="text-center text-sm text-gray-500 mt-4">{plan.note}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 