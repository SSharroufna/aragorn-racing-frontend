"use client";

import { AuthProvider, useAuth } from "react-oidc-context";
import { useEffect } from "react";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_ClpUoncQL",
    client_id: "36sktdut00bcnepum0sv5vgdfj",
    redirect_uri: "http://localhost:3000/dashboard",
    response_type: "code",
    scope: "email openid phone",
};

function LoginContent() {
    const auth = useAuth();

    useEffect(() => {
        if (auth && !auth.isAuthenticated && !auth.isLoading) {
            auth.signinRedirect();
        }
    }, [auth]);

    if (!auth) return null;
    if (auth.isLoading) return null;
    if (auth.error) return <div>Error: {auth.error.message}</div>;

    return null;
}

export default function LoginPage() {
    return (
        <AuthProvider {...cognitoAuthConfig}>
            <LoginContent />
        </AuthProvider>
    );
}
