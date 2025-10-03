'use client';

import React from "react";
import { Button } from "@/features/components/ui/button";
import { Crown, TrendingUp, FileText, Sparkles } from "lucide-react";
import Image from "next/image";

const carouselItems = [
    {
        title: "Digital Downs",
        image: "/digital-downs.png",
    },
    {
        title: "Photo Finish",
        image: "/Photo-Finish.png",
    },
    {
        title: "Horse Nation",
        image: "/horse-nation.png",
    },
    {
        title: "Global Bet",
        image: "/global-bet.png",
    },
    {
        title: "Sport of Kings",
        image: "/sport-of-kings.png",
    },
    {
        title: "Sulkyland",
        image: "/sulkyland.png",
    }
];

const features = [
    {
        icon: FileText,
        title: "Digital Forms",
        description: "Access comprehensive racing forms from top tracks worldwide"
    },
    {
        icon: TrendingUp,
        title: "Real-Time Stats",
        description: "Live updates and performance analytics at your fingertips"
    },
    {
        icon: Sparkles,
        title: "Premium Insights",
        description: "Expert analysis and data-driven predictions"
    }
];

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6">
                            <div className="flex items-center gap-2">
                                <Crown className="w-8 h-8 text-accent" />
                                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                    Premium Racing Forms
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent leading-tight">
                                Digital Horse Racing Forms
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Access comprehensive racing forms from tracks worldwide. Get the insights you need to make informed decisions.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    Explore Races
                                </Button>
                                <Button variant="outline" className="border-2 border-primary/30 text-foreground hover:bg-primary/5 font-semibold px-8 py-6 text-lg transition-all duration-300">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                                <img
                                    src="/digital-race.jpeg"
                                    alt="Racing Horse"
                                    className="relative w-full rounded-2xl shadow-2xl border-2 border-primary/20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-card/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-background to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent/50 flex items-center justify-center mb-4">
                                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="py-16 bg-card/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Featured Sites
                    </h2>

                    <div className="overflow-hidden relative space-y-6 p-10">
                        {/* Row 1 */}
                        <div className="flex animate-scroll gap-8">
                            {carouselItems.concat(carouselItems).map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-64 h-40 flex items-center justify-center rounded-xl shadow-xl bg-white/10 backdrop-blur-sm border border-white/20"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={192}
                                        height={108}
                                        className="object-contain rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <Crown className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                        Join thousands of racing enthusiasts accessing premium digital forms from tracks worldwide
                    </p>
                    <Button className="bg-background text-primary hover:bg-background/90 font-bold px-10 py-7 text-lg rounded-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Sign Up Now
                    </Button>
                </div>
            </section>
        </div>
    );
}