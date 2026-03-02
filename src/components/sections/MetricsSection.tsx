import { SectionReveal } from '../ui/SectionReveal';

export const MetricsSection = () => {
    const stats = [
        { value: '$50B+', label: 'AUM Tracked' },
        { value: '500+', label: 'Integrations' },
        { value: '200+', label: 'Family Offices Served' },
        { value: '99.9%', label: 'Uptime SLA' },
    ];

    return (
        <section className="py-32 bg-white text-dark-primary">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-3xl mb-20 text-left">
                    <SectionReveal>
                        <span className="eyebrow block mb-4">Core Metrics</span>
                        <h2 className="section-h2 mb-6">
                            Engineered for the Complexity of Private Wealth
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Family office operations require a level of precision, security, and flexibility
                            that legacy software simply can't deliver. We built the first operating system
                            designed specifically for this complexity.
                        </p>
                    </SectionReveal>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-gray-100 pt-16">
                    {stats.map((stat, index) => (
                        <SectionReveal key={stat.label} delay={index * 0.1}>
                            <div className="flex flex-col">
                                <span className="font-extrabold text-4xl mb-2 tracking-tight">{stat.value}</span>
                                <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                                    {stat.label}
                                </span>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
