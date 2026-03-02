import { SectionReveal } from '../ui/SectionReveal';
import {
    Database,
    BarChart3,
    Send,
    ShieldCheck,
    History
} from 'lucide-react';

export const AutomationSection = () => {
    const cards = [
        {
            icon: <Database className="w-8 h-8 text-accent-primary" />,
            title: 'Automated Ingestion',
            desc: 'PDFs, emails, and API feeds — processed, classified, and routed automatically.',
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-accent-primary" />,
            title: 'Intelligent Analytics',
            desc: 'Query your data in natural language. Get answers with full attribution.',
        },
        {
            icon: <Send className="w-8 h-8 text-accent-primary" />,
            title: 'Automation & Outreach',
            desc: 'Scheduled reports, alerts, and stakeholder communications — on your terms.',
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-accent-primary" />,
            title: 'Regulatory Reporting',
            desc: 'FATCA, CRS, Form PF — generated automatically from your verified data.',
        },
        {
            icon: <History className="w-8 h-8 text-accent-primary" />,
            title: 'Audit Trail',
            desc: 'Every change, every access, every calculation — fully traceable and immutable.',
        },
    ];

    return (
        <section className="py-32 bg-white text-dark-primary">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <SectionReveal className="mb-20">
                    <h2 className="section-h2 mb-4">Automation, Built on Trustworthy Data</h2>
                    <p className="max-w-xl mx-auto text-lg text-gray-600">
                        Every automated workflow is powered by verified, reconciled data. No black boxes.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {cards.slice(0, 3).map((card, i) => (
                        <SectionReveal key={card.title} delay={i * 0.1}>
                            <div className="group p-10 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-light-card-hover text-left h-full">
                                <div className="mb-8">{card.icon}</div>
                                <h3 className="font-bold text-xl mb-4 text-black">{card.title}</h3>
                                <p className="text-gray-500 leading-relaxed leading-relaxed">{card.desc}</p>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {cards.slice(3).map((card, i) => (
                        <SectionReveal key={card.title} delay={(i + 3) * 0.1}>
                            <div className="group p-10 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-light-card-hover text-left h-full">
                                <div className="mb-8">{card.icon}</div>
                                <h3 className="font-bold text-xl mb-4 text-black">{card.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
