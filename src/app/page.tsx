'use client';
import {useAuth} from "react-oidc-context";

export default function Home() {
    const auth = useAuth();

    console.log("user info:", auth.user);
    let displayName = "Guest";
    if (auth.isAuthenticated) {
        displayName =
            auth.user?.profile?.email ||
            "User";
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-4xl font-bold">
                Welcome to Aragorn Racing{auth.isAuthenticated ? `, ${displayName}` : ""}
            </h1>
            <p className="text-lg text-gray-700 max-w-xl text-center">
                Your virtual performance racing platform.
            </p>
        </div>
    );
}
