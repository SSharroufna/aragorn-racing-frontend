'use client'

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/features/components/ui/sheet"

import { Button } from "@/features/components/ui/button"

const navLinks = [
    { name: "Find Races", href: "/schedule" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
]

export default function PublicNavbar() {
    const pathname = usePathname()

    return (
        <nav className="bg-background border-b border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left: Mobile Menu (hamburger) */}
                    <MobileMenu />

                    {/* Center: Logo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-foreground hover:text-primary-foreground transition"
                        >
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
                                            ? "bg-muted text-primary-foreground"
                                            : "text-foreground hover:bg-muted hover:text-primary-foreground"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: Profile link */}
                    <Link
                        href="/login"
                        className="text-sm text-primary-foreground hover:underline"
                    >
                        Login
                    </Link>
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
                        <Menu className="h-6 w-6 text-foreground" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 bg-background text-foreground">
                    <SheetHeader>
                        <SheetTitle className="text-primary-foreground">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`text-lg hover:text-primary-foreground transition ${
                                    pathname === link.href
                                        ? "underline text-primary-foreground"
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
