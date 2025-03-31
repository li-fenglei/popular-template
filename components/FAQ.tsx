import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    const faqs = [
        {
            question: "What input formats does CopyWeb support?",
            answer: "CopyWeb supports multiple input formats: Figma designs through direct integration, website URLs for cloning, and image screenshots of any design. All formats are processed with high accuracy."
        },
        {
            question: "How does the code generation work?",
            answer: "Our AI analyzes your input (Figma, URL, or screenshot) to identify UI components, layout structure, and styling. It then generates clean, well-organized code in your chosen framework while maintaining design fidelity."
        },
        {
            question: "What frameworks are supported?",
            answer: "We support popular frameworks including React, Vue.js, and plain HTML/CSS. Pro users get additional framework options including Next.js and Nuxt.js."
        },
        {
            question: "Can I customize the generated code?",
            answer: "Yes! All generated code is fully customizable through our online editor. You can modify components, styles, and functionality before exporting."
        },
        {
            question: "Is the generated code production-ready?",
            answer: "Yes, our AI generates clean, optimized, and well-structured code that follows best practices. The code includes responsive design, semantic HTML, and optimized assets ready for production deployment."
        },
        {
            question: "What about API integrations and backend functionality?",
            answer: "Currently, CopyWeb focuses on frontend code generation. Future versions will include support for API integrations and backend functionality. For now, you can easily extend the generated frontend code with your own backend services."
        }
    ]

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">
                        Have more questions? Contact us with email: [email protected]
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                            <AccordionTrigger className="text-lg font-medium px-4">{faq.question}</AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 text-gray-600">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
} 