// app/login/page.tsx
"use client";

import { AuthProvider, useAuth } from "react-oidc-context";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_ClpUoncQL",
    client_id: "36sktdut00bcnepum0sv5vgdfj",
    redirect_uri: "http://localhost:3000",
    response_type: "code",
    scope: "email openid phone",
};

function LoginContent() {
    const auth = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [hasInitiatedLogin, setHasInitiatedLogin] = useState(false);
    const [isProcessingAuth, setIsProcessingAuth] = useState(false);

    const returnTo = searchParams.get('returnTo') || '/dashboard';
    const action = searchParams.get('action');

    // Handle the initial login redirect (when user is not authenticated)
    useEffect(() => {
        if (auth && !auth.isAuthenticated && !auth.isLoading && !hasInitiatedLogin) {
            setHasInitiatedLogin(true);
            auth.signinRedirect({
                state: {
                    returnTo: returnTo,
                    action: action,
                },
            });
        }
    }, [auth, returnTo, action, hasInitiatedLogin]);

    // Handle post-login redirect (when user becomes authenticated)
    useEffect(() => {
        if (auth?.isAuthenticated && !isProcessingAuth) {
            setIsProcessingAuth(true);

            // Check if we have state from the auth flow
            if (auth.user?.state) {
                const state = auth.user.state as { returnTo?: string; action?: string };
                let redirectUrl = state.returnTo || '/dashboard';

                // Append action parameter if it exists
                if (state.action) {
                    const separator = redirectUrl.includes('?') ? '&' : '?';
                    redirectUrl += `${separator}action=${encodeURIComponent(state.action)}`;
                }

                console.log('Redirecting to:', redirectUrl);
                router.push(redirectUrl);
            } else {
                // If no state, check URL parameters as fallback
                if (returnTo !== '/login') { // Avoid redirect loop
                    let redirectUrl = returnTo;
                    if (action) {
                        const separator = redirectUrl.includes('?') ? '&' : '?';
                        redirectUrl += `${separator}action=${encodeURIComponent(action)}`;
                    }
                    console.log('Fallback redirecting to:', redirectUrl);
                    router.push(redirectUrl);
                } else {
                    // Default redirect to dashboard
                    router.push('/dashboard');
                }
            }
        }
    }, [auth?.isAuthenticated, auth?.user, router, returnTo, action, isProcessingAuth]);

    if (!auth || auth.isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (auth.error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-500">Error: {auth.error.message}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (auth.isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600">Redirecting...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <p className="text-gray-600">Redirecting to login...</p>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <AuthProvider {...cognitoAuthConfig}>
            <LoginContent />
        </AuthProvider>
    );
}