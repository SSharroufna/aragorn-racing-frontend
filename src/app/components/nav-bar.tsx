'use client'

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, User } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Races Schedule", href: "/schedule" },
    { name: "Pricing", href: "/pricing" },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="bg-orange-50 border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left: Mobile Menu (hamburger) */}
                    <MobileMenu />

                    {/* Center: Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-orange-600">
                            Aragorn Racing
                        </Link>
                    </div>

                    {/* Center: Desktop Navigation Links */}
                    <div className="hidden md:flex md:ml-6">
                        <div className="flex space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                                        pathname === link.href
                                            ? "bg-orange-100 text-orange-700"
                                            : "text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: Profile dropdown */}
                    <div className="flex items-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <User className="h-6 w-6 text-gray-700" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <div className="flex items-center md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6 text-gray-700" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                    <SheetHeader>
                        <SheetTitle className="text-orange-600">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`text-lg text-gray-700 hover:text-orange-600 transition ${
                                    pathname === link.href
                                        ? "underline text-orange-600"
                                        : ""
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}