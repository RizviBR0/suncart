"use client";
// import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label, Skeleton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    // const { data, isPending } = authClient.useSession();
    // const user = data?.user;

    // const handleLogout = async () => {
    //     await authClient.signOut();
    // }

    // if (isPending) {
    //     return <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
    //         <header className="flex h-14 items-center justify-between px-6">
    //             <div className="flex items-center gap-3">
    //                 <Skeleton className="h-4 w-20 rounded-lg" />
    //             </div>

    //             <ul className="flex items-center gap-4">
    //                 <Skeleton className="h-4 w-20 rounded-lg" />
    //                 <Skeleton className="h-4 w-20 rounded-lg" />
    //                 <Skeleton className="h-4 w-20 rounded-lg" />
    //             </ul>

    //             <Skeleton className="h-4 w-20 rounded-lg" />
    //         </header>
    //     </nav>
    // }

    return (
        <div className="border-b px-2">
            <nav className="flex justify-between items-center  py-3 container mx-auto w-full">
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

                <ul className="flex items-center gap-5 text-sm">
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

                <div className="flex gap-4">
                    {/* {user ?
                        <Dropdown>
                            <Button className="bg-transparent border-none p-0" variant="light">
                                <Avatar size="sm">
                                    <Avatar.Image className='object-cover object-center' alt={user.name} src={user?.image} referrerPolicy="no-referrer" />
                                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </Button>
                            <Dropdown.Popover>
                                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                    <Dropdown.Item onClick={handleLogout} id="logout" textValue="Logout" variant="danger">
                                        <Label>Logout</Label>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                        :
                        <ul className="flex items-center text-sm gap-3">
                            <li className="font-semibold">
                                <Link href={"/signup"}>SignUp</Link>
                            </li>
                            <li className="font-semibold">
                                <Link href={"/signin"}>SignIn</Link>
                            </li>
                        </ul>} */}

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
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;