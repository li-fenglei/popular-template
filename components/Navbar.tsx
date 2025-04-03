"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Heart } from 'lucide-react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const scrollToSection = (id: any) => {
        setIsMenuOpen(false)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="relative flex items-center justify-between py-4 px-6 md:px-12">
            <div className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="CopyWeb Logo"
                    width={32}
                    height={32}
                    className="mr-2"
                />
                <Link href="/" className="text-2xl font-bold">
                    CopyWeb
                </Link>
            </div>

            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center space-x-6">
                <button
                    onClick={() => scrollToSection('pricing')}
                    className="text-gray-600 hover:text-gray-900"
                >
                    Pricing
                </button>
                <Link href="/testimonials" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <Heart className="h-4 w-4" /> Wall of love
                </Link>
                <Link href="/blocks" className="text-gray-600 hover:text-gray-900">
                    Blocks
                </Link>
            </div>

            {/* 桌面端登录按钮 */}
            <div className="hidden md:block">
                <Button variant="outline">Sign In</Button>
            </div>

            {/* 移动端菜单按钮 */}
            <button
                className="md:hidden text-gray-600 focus:outline-none"
                onClick={toggleMenu}
            >
                {isMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>

            {/* 移动端折叠菜单 */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
                    <div className="flex flex-col p-4 space-y-4">
                        <button
                            onClick={() => scrollToSection('pricing')}
                            className="text-gray-600 hover:text-gray-900 py-2 text-left"
                        >
                            Pricing
                        </button>
                        <Link
                            href="/testimonials"
                            className="text-gray-600 hover:text-gray-900 py-2 flex items-center gap-1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Wall of love <Heart className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/blocks"
                            className="text-gray-600 hover:text-gray-900 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blocks
                        </Link>
                        <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                            Sign In
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
} 