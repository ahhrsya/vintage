import { motion } from 'framer-motion';

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
    return (
        <section className="bg-[#F8F9FA] pb-64">
            {/* Header stays at the top */}
            <div className="max-w-[1200px] mx-auto px-6 text-center pt-32 pb-20">
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6">
                    Testimonials
                </div>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-dark-primary">
                    A platform family offices<br />can finally <span className="italic">rely on.</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Join 100+ forward-thinking family offices maximizing their financial power. It's time your wealth worked as hard as you do.
                </p>
            </div>

            {/* Stacking Cards Container */}
            <div className="max-w-4xl mx-auto px-6 relative">
                {testimonials.map((t, i) => (
                    <TestimonialCard key={i} testimonial={t} index={i} />
                ))}
            </div>
        </section>
    );
};

const TestimonialCard = ({ testimonial: t, index }: { testimonial: any, index: number }) => {
    return (
        <div
            className="sticky top-[150px] mb-[40vh] last:mb-0"
            style={{ zIndex: index }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`${t.color} ${t.textColor} rounded-[32px] md:rounded-[48px] p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex flex-col justify-between min-h-[400px] md:min-h-[500px] border border-gray-100`}
            >
                <div>
                    <span className="text-sm font-medium text-gray-400 mb-8 block font-mono tracking-widest uppercase">{t.category}</span>
                    <p className="text-xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-tight">
                        "{t.quote}"
                    </p>
                </div>
                <div className="flex items-center gap-6 mt-12 md:mt-0">
                    <div className="w-14 h-14 rounded-full bg-gray-100 flex-shrink-0" />
                    <div className="text-left">
                        <div className="font-bold text-lg md:text-xl text-dark-primary">{t.author}</div>
                        <div className="text-sm md:text-base text-gray-500">{t.title}</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
