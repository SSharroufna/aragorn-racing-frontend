'use client';

import React from "react";
import { Card, CardContent } from "@/features/components/ui/card";
import { Button } from "@/features/components/ui/button";

const carouselItems = [
    {
        title: "Royal Ascot",
        image: "https://everythinghorseuk.co.uk/wp-content/uploads/2023/06/Royal-Ascot-Horses-Racing.jpg",
        url: "/races/royal-ascot",
    },
    {
        title: "Preakness Stakes",
        image: "https://www.indystar.com/story/sports/horses/horse-racing/2025/05/08/preakness-2025-horse-clever-again-trainer-owner-jockey-record/83511271007/",
        url: "/races/preakness",
    },
    {
        title: "African Racing",
        image: "https://e-playafrica.com/wp-content/uploads/2020/02/Horse-Racing-Africa.jpg",
        url: "/races/africa",
    },
];

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-0 m-0">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-orange-400 to-red-400 text-white">
                <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Digital Horse Racing Forms
                        </h1>
                        <p className="text-lg md:text-xl mb-6">
                            Your ultimate source for real-time digital horse racing forms, stats, and insights.
                        </p>
                        <Button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded shadow hover:scale-105">
                            Explore Races
                        </Button>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/digital-race.jpeg"
                            alt="Racing Horse"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Featured Services
                    </h2>
                    <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth px-2">
                        {carouselItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                className="min-w-[300px] snap-start"
                            >
                                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <CardContent>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Preview the upcoming race with full digital forms.
                                        </p>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-orange-500 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="mb-6">Sign up today and access all digital horse racing forms instantly!</p>
                <Button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded shadow hover:scale-105">
                    Sign Up Now
                </Button>
            </section>
        </div>
    );
}
