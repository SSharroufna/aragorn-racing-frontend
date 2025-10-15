// app/layout.tsx - Updated version of your existing layout
"use client";

import "./globals.css";

import { AuthProvider, useAuth } from "react-oidc-context";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PublicNavbar from "@/features/marketing/public-navbar";
import ProtectedNavbar from "@/features/components/nav-bar";
import { PendingActionsProvider, usePendingActions } from "@/app/contexts/PendingActionsContext";

import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

const geistSans = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});


const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_ClpUoncQL",
    client_id: "36sktdut00bcnepum0sv5vgdfj",
    redirect_uri: "http://localhost:3000/dashboard",
    response_type: "code",
    scope: "email openid phone",
};

function LayoutWithAuth({ children }: { children: React.ReactNode }) {
    const auth = useAuth();
    const { setPendingAction } = usePendingActions();
    const searchParams = useSearchParams();

    // Check for pending actions after authentication
    useEffect(() => {
        if (auth?.isAuthenticated) {
            const actionParam = searchParams.get('action');
            if (actionParam) {
                try {
                    const action = JSON.parse(decodeURIComponent(actionParam));
                    setPendingAction(action);

                    // Clean up URL by removing the action parameter
                    if (typeof window !== 'undefined') {
                        const url = new URL(window.location.href);
                        url.searchParams.delete('action');
                        window.history.replaceState({}, '', url.toString());
                    }
                } catch (error) {
                    console.error('Failed to parse pending action:', error);
                }
            }
        }
    }, [auth?.isAuthenticated, searchParams, setPendingAction]);

    if (auth?.isLoading) return <div className="p-8">Loading...</div>;
    if (auth?.error) return <div className="p-8 text-red-500">Error: {auth.error.message}</div>;

    return (
        <>
            {auth?.isAuthenticated ? <ProtectedNavbar /> : <PublicNavbar />}
                {children}
        </>
    );
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <AuthProvider {...cognitoAuthConfig}>
            <PendingActionsProvider>
                <LayoutWithAuth>{children}</LayoutWithAuth>
            </PendingActionsProvider>
        </AuthProvider>
        </body>
        </html>
    );
}