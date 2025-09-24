"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AuthProvider, useAuth } from "react-oidc-context";
import PublicNavbar from "@/features/marketing/public-navbar";
import ProtectedNavbar from "@/features/components/nav-bar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
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

    if (auth.isLoading) return <div className="p-8">Loading...</div>;
    if (auth.error) return <div className="p-8 text-red-500">Error: {auth.error.message}</div>;

    return (
        <>
            {auth.isAuthenticated ? <ProtectedNavbar /> : <PublicNavbar />}
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
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
        >
        <AuthProvider {...cognitoAuthConfig}>
            <LayoutWithAuth>{children}</LayoutWithAuth>
        </AuthProvider>
        </body>
        </html>
    );
}
