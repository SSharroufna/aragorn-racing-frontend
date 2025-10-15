'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Button } from "@/app/components/ui/button";
import { User, Crown } from "lucide-react";
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
        <header className="sticky top-0 z-50">
            <nav className="bg-gradient-to-r from-background via-background to-primary/5 border-b-2 border-primary/20 backdrop-blur-sm shadow-lg">
                <div className="mx-auto max-w-screen-xl p-4 flex flex-row items-center justify-between">

                    {/* Desktop row: logo + tabs */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 w-full sm:w-auto">
                        <div className="flex items-center gap-2">
                            <Crown className="w-6 h-6 text-accent" />
                            <Link
                                href="/dashboard"
                                className="text-xl font-bold bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent hover:from-primary/80 hover:to-accent/80 transition-all duration-300"
                            >
                                Aragorn Racing
                            </Link>
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
                                            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                                isActive
                                                    ? "bg-primary text-primary-foreground font-semibold shadow-md"
                                                    : "text-foreground hover:bg-muted hover:shadow-sm"
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
                    <div className="flex mt-2 sm:mt-0">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="hover:bg-muted transition-colors rounded-full"
                                >
                                    <User className="h-6 w-6 text-foreground" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="bg-card text-card-foreground border-primary/20 shadow-lg"
                            >
                                <DropdownMenuItem
                                    key="profile"
                                    className="hover:bg-primary/10 cursor-pointer"
                                >
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    key="settings"
                                    className="hover:bg-primary/10 cursor-pointer"
                                >
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    key="logout"
                                    onClick={handleLogout}
                                    className="hover:bg-primary/10 cursor-pointer text-destructive"
                                >
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Mobile tabs */}
                <ul className="flex flex-wrap sm:hidden border-t-gray-200 border-1 p-2">
                    {tabs.map((tab) => {
                        const isActive =
                            pathname === tab.href || pathname.startsWith(tab.href + "/");
                        return (
                            <li key={tab.href}>
                                <Link
                                    href={tab.href}
                                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 
            ${
                                        isActive
                                            ? "border-b-2 border-primary text-primary font-semibold"
                                            : "text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-muted/70"
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