'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/features/components/ui/dropdown-menu";
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
        const cognitoDomain =
            "https://us-east-2clpuoncql.auth.us-east-2.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
            logoutUri
        )}`;
    };

    const handleLogout = () => {
        auth.removeUser();
        signOutRedirect();
    };

    return (
        <header>
            <nav className="bg-background border-b border-border">
                <div className="mx-auto max-w-screen-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">

                    {/* Desktop row: logo + tabs */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 w-full sm:w-auto">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8"
                                alt="Aragorn Racing Logo"
                            />
                            <span className="self-center text-2xl font-semibold text-foreground">
                                Aragorn Racing
                            </span>
                        </div>

                        {/* Desktop tabs */}
                        <ul className="hidden sm:flex sm:items-center sm:space-x-2 mt-2 sm:mt-0">
                            {tabs.map((tab) => {
                                const isActive =
                                    pathname === tab.href || pathname.startsWith(tab.href + "/");
                                return (
                                    <li key={tab.href}>
                                        <Link
                                            href={tab.href}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                isActive
                                                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                            }`}
                                        >
                                            {tab.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* User dropdown always right */}
                    <div className="flex items-center mt-2 sm:mt-0">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <User className="h-6 w-6 text-foreground" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-card text-card-foreground">
                                <DropdownMenuItem key="profile">Profile</DropdownMenuItem>
                                <DropdownMenuItem key="settings">Settings</DropdownMenuItem>
                                <DropdownMenuItem key="logout" onClick={handleLogout}>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Mobile tabs */}
                <ul className="flex flex-wrap sm:hidden justify-start gap-2 px-4 pb-2">
                    {tabs.map((tab) => {
                        const isActive =
                            pathname === tab.href || pathname.startsWith(tab.href + "/");
                        return (
                            <li key={tab.href}>
                                <Link
                                    href={tab.href}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`}
                                >
                                    {tab.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}