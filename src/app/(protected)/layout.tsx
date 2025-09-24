'use client';
import { ReactNode } from "react";
import { AuthProvider, useAuth } from "react-oidc-context";
import { useRouter } from "next/navigation";
import ProtectedNavbar from "@/features/components/nav-bar";
import PageWrapper from "@/features/components/layout/page-wrapper";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_ClpUoncQL",
    client_id: "36sktdut00bcnepum0sv5vgdfj",
    redirect_uri: "http://localhost:3000/dashboard",
    response_type: "code",
    scope: "openid profile email",
};

function ProtectedWrapper({ children }: { children: ReactNode }) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth) return <div>Auth not initialized</div>;
    if (auth.isLoading) return <div>Loading...</div>;
    if (!auth.isAuthenticated) {
        router.push("/login");
        return null;
    }

    return (
        <>
            {/*<ProtectedNavbar />*/}
            {children}
        </>
    );
}

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <AuthProvider {...cognitoAuthConfig}>
            <ProtectedWrapper>{children}</ProtectedWrapper>
        </AuthProvider>
    );
}
