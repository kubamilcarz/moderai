"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation on component mount
        setAnimate(true);
    }, []);

    return (
        <section
            className="flex items-center justify-center bg-gradient-to-b from-slate-900 to-black text-white h-[100vh] relative"
        >
            <div
                className={`container mx-auto relative z-10 text-center px-4 transform transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Smarter Moderation<br />
                    <span style={{ color: 'var(--accent)' }}>for Growing Communities</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
                    Automate Content Moderation. <br />
                    Reduce Harassment. <em>Boost Engagement.</em> Meet Compliance.
                </p>

                {/* Call-to-Action Button */}
                <div className="mt-8">
                    <a
                        href="https://wojciech-janicki.notion.site/1749b1493491803bb7a3f297c7d3368a?pvs=105"
                        className="text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition-all duration-300"
                        aria-label="Get Started Free! - Try ModerAI's tools"
                        style={{
                            background: 'var(--accent)',
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                        }}
                    >
                        Get Started Free!
                    </a>
                </div>

                <p className="mt-8 max-w-2xl mx-auto text-gray-300">
                    AI-Driven Tools Tailored to Your Community—In Minutes, Not Weeks.
                </p>
            </div>
        </section>
    );
}