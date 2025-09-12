"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="w-full border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-orange-600">
                    MySite
                </Link>

                {/* Desktop Menu */}
                <div className="hidden gap-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 transition hover:text-orange-600"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
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
                                        className="text-lg text-gray-700 hover:text-orange-600"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
