import Image from "next/image";
import Link from "next/link";
import { Button, Input } from "@heroui/react";
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
    FaPhone,
    FaEnvelope,
    FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="relative mt-16 overflow-hidden border-t border-orange-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/logo2.png"
                                alt="SunCart logo"
                                width={131}
                                height={32}
                                className="h-8 w-33 object-contain"
                                priority
                            />
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
                            Your one stop shop for premium summer essentials. Stay cool, stay
                            stylish, stay protected.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <Link
                                href="#"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white transition hover:scale-105 hover:opacity-90"
                            >
                                <FaFacebookF size={15} />
                            </Link>

                            <Link
                                href="#"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white transition hover:scale-105 hover:opacity-90"
                            >
                                <FaInstagram size={16} />
                            </Link>

                            <Link
                                href="#"
                                aria-label="Twitter"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition hover:scale-105 hover:opacity-90"
                            >
                                <FaXTwitter size={15} />
                            </Link>

                            <Link
                                href="#"
                                aria-label="Youtube"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white transition hover:scale-105 hover:opacity-90"
                            >
                                <FaYoutube size={16} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-950">Contact Us</h3>

                        <ul className="mt-4 space-y-4 text-sm text-gray-600">
                            <li className="flex gap-3">
                                <FaPhone className="mt-1 shrink-0 text-orange-500" />
                                <span>+1 234 567 8900</span>
                            </li>

                            <li className="flex gap-3">
                                <FaEnvelope className="mt-1 shrink-0 text-orange-500" />
                                <span>support@suncart.com</span>
                            </li>

                            <li className="flex gap-3">
                                <FaLocationDot className="mt-1 shrink-0 text-orange-500" />
                                <span>
                                    123 Beachside Ave,
                                    <br />
                                    Miami, FL 33101, USA
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-950">
                            Quick Links
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href="/" className="transition hover:text-orange-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="transition hover:text-orange-500"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profile"
                                    className="transition hover:text-orange-500"
                                >
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="transition hover:text-orange-500">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-orange-100 bg-orange-50/50 p-5">
                        <h3 className="text-base font-semibold text-gray-950">
                            Stay in the Sun ☀️
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            Subscribe to get special offers, new arrivals and summer tips.
                        </p>

                        <form className="mt-4 space-y-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                radius="lg"
                                size="sm"
                                variant="bordered"
                                className="w-full"
                            />

                            <Button
                                type="submit"
                                className="w-full bg-linear-to-r from-orange-500 to-red-500 font-semibold text-white"
                                radius="lg"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="h-16 bg-linear-to-r from-orange-500 via-yellow-400 to-cyan-400" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center text-xs text-white sm:flex-row sm:justify-between sm:px-8 lg:px-16">
                    <p>© 2026 SunCart. All rights reserved.</p>

                    <div className="flex items-center gap-4">
                        <Link href="#" className="transition hover:opacity-80">
                            Privacy Policy
                        </Link>
                        <span className="opacity-60">|</span>
                        <Link href="#" className="transition hover:opacity-80">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;