"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/features/components/ui/dropdown-menu";
import { Button } from "@/features/components/ui/button";
import { User } from "lucide-react";
import { useAuth } from "react-oidc-context";

// Tabs / menu items
const tabs = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Find Races", href: "/schedule" },
    { label: "Buy Forms", href: "/pricing" },
];

export default function ProtectedNavbar() {
    const pathname = usePathname();
    const auth = useAuth();

    const signOutRedirect = () => {
        const clientId = "36sktdut00bcnepum0sv5vgdfj";
        const logoutUri = "http://localhost:3000";
        const cognitoDomain = "https://us-east-2clpuoncql.auth.us-east-2.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    const handleLogout = () => {
        auth.removeUser();
        signOutRedirect();
    };

    return (
        <header>
            <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">

                    {/* Logo + menu links */}
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8"
                                alt="Aragorn Racing Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Aragorn Racing
              </span>
                        </div>

                        {/* Menu links in one row */}
                        <ul className="flex space-x-4">
                            {tabs.map((tab) => {
                                const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");
                                return (
                                    <li key={tab.href}>
                                        <Link
                                            href={tab.href}
                                            className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                                                isActive
                                                    ? "text-orange-500 dark:text-orange-400 font-semibold"
                                                    : "text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
                                            }`}
                                        >
                                            {tab.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* User dropdown */}
                    <div className="flex items-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <User className="h-6 w-6 text-gray-700" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem key="profile">Profile</DropdownMenuItem>
                                <DropdownMenuItem key="settings">Settings</DropdownMenuItem>
                                <DropdownMenuItem key="logout" onClick={handleLogout}>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
        </header>
    );
}
