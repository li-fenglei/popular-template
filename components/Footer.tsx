import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="py-12 border-t">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <div className="flex items-center mb-4">
                            <Image
                                src="/logo.png"
                                alt="CopyWeb Logo"
                                width={40}
                                height={40}
                                className="mr-2"
                            />
                            <span className="text-2xl font-bold">CopyWeb</span>
                        </div>
                        <p className="text-gray-600 mb-4">
                            CopyWeb is an AI-powered tool that lets you clone any website design from a screenshot or URL, helping developers build faster.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <Link href="https://twitter.com" aria-label="Twitter">
                                <svg className="w-6 h-6 text-gray-600 hover:text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 4.01C21 4.5 20.02 4.84 19 5C18.12 4.14 16.86 3.62 15.5 3.62C12.76 3.62 10.54 5.84 10.54 8.58C10.54 9.01 10.58 9.42 10.67 9.82C6.56 9.62 3.38 7.5 1.33 4.32C0.99 5.12 0.83 6.02 0.83 6.94C0.83 8.7 1.74 10.26 3.15 11.13C2.36 11.11 1.62 10.88 0.96 10.53V10.57C0.96 13.02 2.66 15.1 4.91 15.59C4.19 15.79 3.46 15.82 2.74 15.66C3.38 17.73 5.21 19.2 7.35 19.24C5.67 20.64 3.57 21.45 1.33 21.45C0.98 21.45 0.63 21.43 0.28 21.38C2.44 22.86 4.94 23.69 7.64 23.69C15.5 23.69 19.83 17.33 19.83 11.79C19.83 11.6 19.83 11.4 19.82 11.21C20.83 10.5 21.68 9.61 22.36 8.58L22 4.01Z" fill="currentColor" />
                                </svg>
                            </Link>
                            <Link href="https://discord.com" aria-label="Discord">
                                <svg className="w-6 h-6 text-gray-600 hover:text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.317 4.37C18.7873 3.68 17.147 3.2 15.4319 3C15.1989 3.4 14.9659 4 14.8439 4.4C13.0189 4.2 11.2099 4.2 9.41686 4.4C9.28486 4 9.05186 3.4 8.81886 3C7.09686 3.2 5.44686 3.68 3.91686 4.37C0.86486 8.9 0.00986003 13.3 0.42986 17.64C2.39086 19.14 4.26986 20 6.12986 20.56C6.60986 19.9 7.02986 19.2 7.37986 18.46C6.67986 18.2 6.01986 17.88 5.39986 17.5C5.54986 17.38 5.69986 17.26 5.83986 17.14C9.74986 18.9 14.0099 18.9 17.8799 17.14C18.0199 17.26 18.1699 17.38 18.3199 17.5C17.6899 17.88 17.0299 18.2 16.3299 18.46C16.6799 19.2 17.0999 19.9 17.5799 20.56C19.4399 20 21.3199 19.14 23.2799 17.64C23.7699 12.66 22.4199 8.3 20.3199 4.37H20.317ZM8.02086 15.06C6.86486 15.06 5.90986 13.97 5.90986 12.66C5.90986 11.35 6.83986 10.26 8.02086 10.26C9.20186 10.26 10.1569 11.35 10.1319 12.66C10.1319 13.97 9.20186 15.06 8.02086 15.06ZM15.9969 15.06C14.8409 15.06 13.8859 13.97 13.8859 12.66C13.8859 11.35 14.8159 10.26 15.9969 10.26C17.1779 10.26 18.1329 11.35 18.1079 12.66C18.1079 13.97 17.1779 15.06 15.9969 15.06Z" fill="currentColor" />
                                </svg>
                            </Link>
                            <Link href="https://telegram.org" aria-label="Telegram">
                                <svg className="w-6 h-6 text-gray-600 hover:text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.05 2.31C21.86 2.14 21.58 2.09 21.34 2.17L2.59 9.33C2.23 9.44 2 9.77 2 10.14C2 10.52 2.23 10.85 2.59 10.95L7.59 12.47L9.73 19.36C9.82 19.65 10.07 19.86 10.38 19.91C10.43 19.92 10.48 19.92 10.53 19.92C10.79 19.92 11.04 19.81 11.22 19.63L14.02 16.83L18.35 20.16C18.53 20.3 18.76 20.38 18.99 20.38C19.13 20.38 19.27 20.35 19.4 20.29C19.76 20.15 20 19.83 20.05 19.45L22.94 3.45C22.97 3.2 22.87 2.96 22.68 2.79L22.05 2.31ZM10.76 13.6L10.21 16.73L8.72 11.77L17.56 6.47L10.76 13.6Z" fill="currentColor" />
                                </svg>
                            </Link>
                            <Link href="mailto:info@copyweb.com" aria-label="Email">
                                <svg className="w-6 h-6 text-gray-600 hover:text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Features</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">URL to Code</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Screenshot to Code</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Figma to Code</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Friends</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">MCP.so</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">APIPark</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
                    <p className="text-gray-600 mb-4 md:mb-0">
                        © 2025 • CopyWeb All rights reserved. <Link href="#" className="text-purple-600 hover:text-purple-800">build with ShipAny</Link>
                    </p>

                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 