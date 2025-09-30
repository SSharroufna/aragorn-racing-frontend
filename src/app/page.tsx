'use client';
import {useAuth} from "react-oidc-context";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import LandingPage from "@/LandingPage";

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
        <LandingPage/>
    )
}
