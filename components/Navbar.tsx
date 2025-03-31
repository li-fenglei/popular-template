import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 px-6 md:px-12 border-b">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold">
                    CopyWeb
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                    Pricing
                </Link>
                <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">
                    Wall of love
                </Link>
                <Link href="/blocks" className="text-gray-600 hover:text-gray-900">
                    Blocks
                </Link>
            </div>

            <Button variant="outline">Sign In</Button>
        </nav>
    )
} 