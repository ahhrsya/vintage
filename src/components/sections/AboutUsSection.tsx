import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

import dashboardImg from '../../assets/Dashboard.png';

export const AboutUsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const stats = [
        { value: '$50B+', label: 'AUM Tracked' },
        { value: '500+', label: 'Integrations' },
        { value: '200+', label: 'Family Offices Served' },
        { value: '99.9%', label: 'Uptime SLA' },
    ];

    const text = "We are passionate about empowering individuals and businesses to take control of their finances and achieve their financial goals.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-white text-dark-primary">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 text-center w-full">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">
                            <Star size={12} className="text-blue-500 fill-blue-500" />
                            About Us
                        </div>
                    </motion.div>

                    {/* Dynamic Highlight Text */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.04em] text-gray-300">
                            {words.map((word, i) => {
                                // We want the text to reveal over the first 60% of the sticky scroll
                                const start = (i / words.length) * 0.6;
                                const end = ((i + 1) / words.length) * 0.6;
                                return (
                                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                        {word}
                                    </Word>
                                );
                            })}
                        </h2>
                    </div>

                    {/* Dashboard Image with Browser Frame */}
                    <div className="relative max-w-4xl mx-auto mb-16">
                        <motion.div
                            style={{
                                opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
                                y: useTransform(scrollYProgress, [0.4, 0.6], [40, 0])
                            }}
                            className="bg-dark-secondary rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-1"
                        >
                            {/* Browser Header */}
                            <div className="flex items-center gap-1.5 px-4 py-3 bg-dark-secondary border-b border-white/5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                <div className="ml-4 flex-1 h-5 bg-black/20 rounded-md" />
                            </div>

                            {/* Dashboard Image */}
                            <div className="bg-dark-primary">
                                <img
                                    src={dashboardImg}
                                    alt="Finage Dashboard"
                                    className="w-full h-auto block"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Metrics Row */}
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0.7, 0.85], [0, 1]),
                            y: useTransform(scrollYProgress, [0.7, 0.85], [20, 0])
                        }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-gray-100 pt-16 max-w-4xl mx-auto"
                    >
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col text-left">
                                <span className="font-bold text-3xl mb-1 tracking-tight">{stat.value}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
    const color = useTransform(progress, range, ["#D1D5DB", "#09090B"]);

    return (
        <motion.span
            style={{ color }}
            className="inline-block mr-[0.25em]"
        >
            {children}
        </motion.span>
    );
};
