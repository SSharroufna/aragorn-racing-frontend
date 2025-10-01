'use client'

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Crown } from "lucide-react"

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
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-background via-background to-primary/5 border-b-2 border-primary/20 backdrop-blur-sm shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left: Mobile Menu (hamburger) */}
                    <MobileMenu />

                    {/* Center: Logo */}
                    <div className="flex items-center gap-2">
                        <Crown className="w-6 h-6 text-accent" />
                        <Link
                            href="/"
                            className="text-xl font-bold bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent hover:from-primary/80 hover:to-accent/80 transition-all duration-300"
                        >
                            Aragorn Racing
                        </Link>
                    </div>

                    {/* Center: Desktop Navigation Links */}
                    <div className="hidden md:flex md:ml-6">
                        <div className="flex space-x-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                        pathname === link.href
                                            ? "bg-primary text-primary-foreground shadow-md"
                                            : "text-foreground hover:bg-muted hover:text-foreground hover:shadow-sm"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: Login button */}
                    <Link href="/login">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 font-semibold"
                        >
                            Login
                        </Button>
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
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-muted transition-colors"
                    >
                        <Menu className="h-6 w-6 text-foreground" />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="w-64 bg-gradient-to-br from-background to-primary/5 text-foreground border-r-2 border-primary/20"
                >
                    <SheetHeader>
                        <SheetTitle className="text-foreground flex items-center gap-2">
                            <Crown className="w-5 h-5 text-accent" />
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                                Menu
                            </span>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                    pathname === link.href
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "text-foreground hover:bg-muted hover:text-foreground hover:shadow-sm"
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