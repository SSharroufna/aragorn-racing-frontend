// hooks/useActionGuard.js
"use client";

import { useAuth } from "react-oidc-context";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export function useActionGuard() {
    const auth = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const executeWithAuth = useCallback((action, actionParams = {}) => {
        if (auth?.isAuthenticated) {
            // User is authenticated, execute the action immediately
            action(actionParams);
        } else {
            // User is not authenticated, redirect to login with action state
            const actionData = {
                type: action.name || 'anonymous_action',
                params: actionParams
            };

            const loginUrl = `/login?returnTo=${encodeURIComponent(pathname)}&action=${encodeURIComponent(JSON.stringify(actionData))}`;
            router.push(loginUrl);
        }
    }, [auth?.isAuthenticated, router, pathname]);

    return {
        executeWithAuth,
        isAuthenticated: auth?.isAuthenticated ?? false,
        isLoading: auth?.isLoading ?? true,
    };
}