"use client";

import { AuthProvider, useAuth } from "react-oidc-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_ClpUoncQL",
    client_id: "36sktdut00bcnepum0sv5vgdfj",
    redirect_uri: "http://localhost:3000/login/callback", // <— Cognito redirects here
    response_type: "code",
    scope: "email openid phone",
};

function LoginCallbackContent() {
    const auth = useAuth();
    const router = useRouter();

    // Wait for authentication to complete and redirect user
    useEffect(() => {
        if (auth.isAuthenticated && auth.user?.state) {
            const state = auth.user.state as { returnTo?: string; action?: string };
            const redirectTo = state.returnTo || "/dashboard";

            // Optional: handle pending action
            if (state.action) {
                // executePendingAction(state.action, state.params);
                // e.g., open BuyAllDialog or call API
            }

            router.push(redirectTo);
        }
    }, [auth.isAuthenticated, auth.user, router]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-600">Processing login...</p>
        </div>
    );
}

export default function LoginCallbackPage() {
    return (
        <AuthProvider {...cognitoAuthConfig}>
            <LoginCallbackContent />
        </AuthProvider>
    );
}
