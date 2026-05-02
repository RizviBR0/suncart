"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label, Skeleton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = async () => {
        await authClient.signOut();
    }

    if (isPending) {
        return <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-14 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <Skeleton className="h-4 w-20 rounded-lg" />
                </div>

                <ul className="hidden md:flex items-center gap-4">
                    <Skeleton className="h-4 w-20 rounded-lg" />
                    <Skeleton className="h-4 w-20 rounded-lg" />
                    <Skeleton className="h-4 w-20 rounded-lg" />
                </ul>

                <Skeleton className="h-4 w-20 rounded-lg" />
            </header>
        </nav>
    }

    return (
        <div className="border-b px-4 lg:px-2 relative bg-white z-50">
            <nav className="flex justify-between items-center py-3 container mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/logo2.png"}
                        alt="logo"
                        loading="eager"
                        width={152}
                        height={52}
                        className="object-cover h-auto w-auto"
                    />
                </div>

                <ul className="hidden md:flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/products"}>Products</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>My Profile</Link>
                    </li>
                </ul>

                <div className="hidden md:flex gap-4">
                    {user ?
                        <div className="flex justify-center items-center gap-2">
                            <Avatar size="sm">
                                <Avatar.Image className='object-cover object-center' alt={user.name} src={user?.image} referrerPolicy="no-referrer" />
                                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>

                            <button onClick={handleLogout} className="bg-red-500 text-white text-sm px-3 py-1.5 rounded-full hover:bg-red-600 cursor-pointer">
                                Logout
                            </button>
                        </div>
                        :
                        <ul className="flex items-center text-sm gap-3">
                            <Link
                                href="/login"
                                variant="bordered"
                                className="border-gray-300 font-medium text-gray-800"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="bg-linear-to-r from-orange-500 to-red-500 font-semibold text-white px-4 py-1.5 rounded-full"
                            >
                                Register
                            </Link>
                        </ul>}
                </div>

                {/* Hamburger icon for mobile */}
                <button
                    className="md:hidden text-2xl text-gray-600 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-md py-4 px-6 flex flex-col gap-4">
                    <ul className="flex flex-col gap-4 text-center text-base font-medium text-gray-800">
                        <li>
                            <Link href={"/"} onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/products"} onClick={() => setIsMenuOpen(false)}>Products</Link>
                        </li>
                        <li>
                            <Link href={"/profile"} onClick={() => setIsMenuOpen(false)}>My Profile</Link>
                        </li>
                    </ul>

                    <div className="border-t pt-4">
                        {user ?
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Avatar size="sm">
                                        <Avatar.Image className='object-cover object-center' alt={user.name} src={user?.image} referrerPolicy="no-referrer" />
                                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar>
                                    <span className="text-base font-medium">{user.name}</span>
                                </div>

                                <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="w-full max-w-xs bg-red-500 text-white text-base px-4 py-2 rounded-full hover:bg-red-600 cursor-pointer">
                                    Logout
                                </button>
                            </div>
                            :
                            <div className="flex flex-col items-center gap-3">
                                <Link
                                    href="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full max-w-xs text-center py-2 border border-gray-300 rounded-full font-medium text-gray-800"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full max-w-xs text-center bg-linear-to-r from-orange-500 to-red-500 font-semibold text-white px-4 py-2 rounded-full"
                                >
                                    Register
                                </Link>
                            </div>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;