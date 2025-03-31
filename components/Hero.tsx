import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Upload, Globe, Figma, MessageSquare } from 'lucide-react'
import Navbar from './Navbar'

export default function Hero() {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Web Design to Code in Seconds
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                    Convert screenshots, website URL into code components instantly.
                </p>

                <Tabs defaultValue="image" className="max-w-2xl mx-auto">
                    <TabsList className="grid grid-cols-4 mb-8">
                        <TabsTrigger value="image">Image</TabsTrigger>
                        <TabsTrigger value="website">Website</TabsTrigger>
                        <TabsTrigger value="figma">Figma</TabsTrigger>
                        <TabsTrigger value="prompt">Prompt</TabsTrigger>
                    </TabsList>

                    <TabsContent value="image" className="border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center">
                        <Upload className="h-12 w-12 text-gray-400 mb-4" />
                        <p className="text-gray-500 mb-2">drag, paste or click to upload</p>
                        <p className="text-gray-400 text-sm">supported: PNG, JPG, JPEG, WEBP, up to 2.5MB</p>
                        <Button className="mt-6">please sign in</Button>
                    </TabsContent>

                    {/* 其他标签内容类似 */}
                    <TabsContent value="website" className="border-2 border-dashed rounded-lg p-12">
                        <Globe className="h-12 w-12 text-gray-400 mb-4 mx-auto" />
                        <p className="text-center text-gray-500">Enter website URL</p>
                    </TabsContent>

                    <TabsContent value="figma" className="border-2 border-dashed rounded-lg p-12">
                        <Figma className="h-12 w-12 text-gray-400 mb-4 mx-auto" />
                        <p className="text-center text-gray-500">Connect to Figma</p>
                    </TabsContent>

                    <TabsContent value="prompt" className="border-2 border-dashed rounded-lg p-12">
                        <MessageSquare className="h-12 w-12 text-gray-400 mb-4 mx-auto" />
                        <p className="text-center text-gray-500">Describe what you want</p>
                    </TabsContent>
                </Tabs>

                <div className="mt-16">
                    <h2 className="text-2xl font-semibold mb-6">Design to Code with Popular Frameworks</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['HTML', 'Next.js', 'React', 'TailwindCSS', 'Shadcn/UI', 'Nuxt', 'Vue'].map((tech) => (
                            <div key={tech} className="px-4 py-2 bg-gray-100 rounded-full">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 