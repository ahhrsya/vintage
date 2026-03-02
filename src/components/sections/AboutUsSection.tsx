import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

export const AboutUsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const text = "We are passionate about empowering individuals and businesses to take control of their finances and achieve their financial goals.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="py-32 bg-white text-dark-primary overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">
                        <Star size={12} className="text-blue-500 fill-blue-500" />
                        About Us
                    </div>
                </div>

                {/* Dynamic Highlight Text */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-medium leading-[1.15] tracking-[-0.04em] text-gray-300">
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = (i + 1) / words.length;
                            // Adjusted range to make it reveal as it passes the middle of the screen
                            // We want each word to light up as it scrolls through the container's view
                            return (
                                <Word key={i} progress={scrollYProgress} range={[start * 0.4 + 0.2, end * 0.4 + 0.2]}>
                                    {word}
                                </Word>
                            );
                        })}
                    </h2>
                </div>

                {/* Visual Mockup */}
                <div className="relative max-w-lg mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative"
                    >
                        {/* Background Image / Placeholder */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1556157382-9792697ffed1?q=80&w=1000&auto=format&fit=crop"
                                alt="Professional person"
                                className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
                            />
                        </div>

                        {/* Floating UI Elements matching screenshot */}
                        {/* Top Right Progress Card */}
                        <motion.div
                            initial={{ x: 40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute top-10 right-[-30px] md:right-[-40px] w-48 bg-white/80 backdrop-blur-xl p-4 rounded-3xl border border-white shadow-xl"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Experience</span>
                                <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 text-[8px] font-bold">ACTIVE</span>
                            </div>
                            <div className="text-2xl font-bold mb-2">85%</div>
                            <div className="flex items-end gap-1 h-8">
                                {[30, 50, 40, 80, 60, 90, 70].map((h, i) => (
                                    <div key={i} className="flex-1 bg-blue-500 rounded-t-[2px]" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Bottom Left Transaction Card */}
                        <motion.div
                            initial={{ x: -40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="absolute bottom-10 left-[-30px] md:left-[-40px] w-56 bg-white/80 backdrop-blur-xl p-5 rounded-3xl border border-white shadow-xl"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                    <Star size={10} className="text-white fill-white" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Wallet</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-gray-500">MasterCard</span>
                                    <span className="font-bold">+$12,500</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-gray-500">Apple Pay</span>
                                    <span className="font-bold text-red-500">-$2,120</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Background Decorative element */}
                    <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent-primary/5 blur-3xl rounded-full" />
                </div>
            </div>
        </section>
    );
};

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    const color = useTransform(progress, range, ["#D1D5DB", "#09090B"]);

    return (
        <motion.span
            style={{ opacity, color }}
            className="inline-block mr-[0.25em]"
        >
            {children}
        </motion.span>
    );
};
