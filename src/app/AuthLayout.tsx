// components/AuthLayout.tsx
"use client";

import { AuthProvider, useAuth } from "react-oidc-context";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PublicNavbar from "@/features/marketing/public-navbar";
import ProtectedNavbar from "@/app/components/nav-bar";
import PageWrapper from "@/app/components/layout/page-wrapper";
import { PendingActionsProvider, usePendingActions } from "@/app/contexts/PendingActionsContext";

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
                    const url = new URL(window.location.href);
                    url.searchParams.delete('action');
                    window.history.replaceState({}, '', url.toString());
                } catch (error) {
                    console.error('Failed to parse pending action:', error);
                }
            }
        }
    }, [auth?.isAuthenticated, searchParams, setPendingAction]);

    if (!auth || auth.isLoading) return <div className="p-8">Loading...</div>;
    if (auth.error) return <div className="p-8 text-red-500">Error: {auth.error.message}</div>;

    return (
        <>
            {auth.isAuthenticated ? <ProtectedNavbar /> : <PublicNavbar />}
            <PageWrapper>
                {children}
            </PageWrapper>
        </>
    );
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider {...cognitoAuthConfig}>
            <PendingActionsProvider>
                <LayoutWithAuth>{children}</LayoutWithAuth>
            </PendingActionsProvider>
        </AuthProvider>
    );
}