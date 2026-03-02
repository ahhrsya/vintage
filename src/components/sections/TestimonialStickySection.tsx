import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
    {
        category: "Long-Term Partnerships",
        quote: "We experimented with other tools, but at the end of the day, Finage was a clear winner on the efficiency rate. If they continue doing what they're doing, they'll have a place with us forever.",
        author: "Dr. Ronak Bhatt",
        title: "Founder, Chancellor & CEO, Tetra Institute",
        color: "bg-white",
        textColor: "text-dark-primary"
    },
    {
        category: "Dedicated Service & Support",
        quote: "The level of customization we get with Finage is unparalleled. It's not just a platform; it's a partner that understands the specific needs of our family office structure.",
        author: "Sarah Jenkins",
        title: "Managing Director, Peak Wealth",
        color: "bg-white",
        textColor: "text-dark-primary"
    },
    {
        category: "Global Reach",
        quote: "Managing assets across three continents used to be a nightmare of consolidation. Now, it happens in real-time. Finage has fundamentally changed how we operate.",
        author: "Michael Chen",
        title: "Director of Operations, Heritage Global",
        color: "bg-white",
        textColor: "text-dark-primary"
    }
];

export const TestimonialStickySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[450vh] bg-[#F8F9FA] text-dark-primary">
            {/* Sticky viewport */}
            <div className="sticky top-0 h-screen w-full flex flex-col pt-16 md:pt-20 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 text-center w-full mb-8">
                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-4">
                        Testimonials
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-3">
                        A platform family offices<br />can finally <span className="italic">rely on.</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-xs md:text-sm">
                        Join 100+ forward-thinking family offices maximizing their financial power.
                    </p>
                </div>

                {/* The Stacking Deck */}
                <div className="relative flex-1 w-full max-w-4xl mx-auto px-6 mb-12">
                    {testimonials.map((t, i) => {
                        const start = (i / testimonials.length) * 0.8;
                        const end = start + 0.2;

                        const y = useTransform(
                            scrollYProgress,
                            [start - 0.1, start, 1],
                            [800, 0, 0]
                        );

                        const scale = useTransform(
                            scrollYProgress,
                            [end, end + 0.1],
                            [1, 0.98]
                        );

                        const opacity = useTransform(
                            scrollYProgress,
                            [end, end + 0.1],
                            [1, 0.9]
                        );

                        return (
                            <motion.div
                                key={i}
                                style={{
                                    y,
                                    scale: i < testimonials.length - 1 ? scale : 1,
                                    opacity: i < testimonials.length - 1 ? opacity : 1,
                                    zIndex: i
                                }}
                                className="absolute inset-x-6 mx-auto bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-12 border border-gray-200 shadow-none flex flex-col justify-between h-[360px] md:h-[420px] max-h-[50vh]"
                            >
                                <div>
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-6 block uppercase">
                                        {t.category}
                                    </span>
                                    <p className="text-lg md:text-xl lg:text-2xl font-medium leading-[1.4] text-dark-primary tracking-tight">
                                        "{t.quote}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-8">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200" />
                                    <div>
                                        <div className="font-bold text-sm md:text-base text-dark-primary">{t.author}</div>
                                        <div className="text-[10px] md:text-xs text-gray-400 font-medium">{t.title}</div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
