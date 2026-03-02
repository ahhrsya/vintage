import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionReveal } from '../ui/SectionReveal';
import { MockCard, StatusTag } from '../ui/MockDashboard';

type TabId = 'record' | 'unstructured' | 'close';

export const OperatingSystemSection = () => {
    const [activeTab, setActiveTab] = useState<TabId>('record');

    const tabs = [
        { id: 'record' as const, label: 'System of Record' },
        { id: 'unstructured' as const, label: 'Unstructured to Structured' },
        { id: 'close' as const, label: 'Month-End Close' },
    ];

    return (
        <section className="py-32 bg-dark-primary text-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <h2 className="section-h2 mb-4">Built as an Operating System — Not a Dashboard</h2>
                </SectionReveal>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-20">
                    <div className="inline-flex items-center p-1 bg-dark-card border border-white/5 rounded-full">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative ${activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                                    }`}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-accent-primary rounded-full shadow-lg"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <TabContent activeTab={activeTab} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const TabContent = ({ activeTab }: { activeTab: TabId }) => {
    if (activeTab === 'record') {
        return (
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h3 className="section-h2 text-3xl mb-6">System of Record</h3>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        Every position, transaction, document, and contact — consolidated in a single,
                        auditable system. No more stitching together spreadsheets, PDFs, and portal logins.
                    </p>
                    <div className="space-y-4">
                        {[
                            "Consolidated multi-entity ledger",
                            "Direct connection to 500+ financial institutions",
                            "Real-time audit history of every transaction"
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <MockCard title="Ledger Overview">
                    <div className="space-y-4">
                        {[
                            { name: 'Equity Infusion - Entitiy A', val: '+$5,000,000', status: 'Complete' },
                            { name: 'Management Fee - Q3', val: '-$125,000', status: 'Complete' },
                            { name: 'Capital Call - Fund IV', val: '-$2,450,000', status: 'Complete' },
                            { name: 'Dividend Inflow', val: '+$48,200', status: 'Complete' },
                        ].map((row) => (
                            <div key={row.name} className="flex items-center justify-between text-xs pb-3 border-b border-white/5 last:border-0 last:pb-0">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-gray-200 font-medium">{row.name}</span>
                                    <span className="text-gray-500">{row.val}</span>
                                </div>
                                <StatusTag status={row.status} />
                            </div>
                        ))}
                    </div>
                </MockCard>
            </div>
        );
    }

    if (activeTab === 'unstructured') {
        return (
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h3 className="section-h2 text-3xl mb-6">From Unstructured Documents to Structured Intelligence</h3>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        Finage reads PDFs, scans, and emails — and turns them into structured,
                        reconciled data. AI-powered document intelligence, purpose-built for the family office.
                    </p>
                    <a href="#" className="text-accent-primary font-semibold hover:underline">Explore document intelligence →</a>
                </div>
                <div className="space-y-6">
                    {[
                        { title: "Extracts data from PDFs, scans, emails", desc: "Native OCR and NLP" },
                        { title: "Classifies and maps to your chart of accounts", desc: "Custom taxonomic mapping" },
                        { title: "Flags exceptions with confidence scoring", desc: "Human-in-the-loop validation" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-5 bg-dark-card border border-white/10 rounded-xl"
                        >
                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h3 className="section-h2 text-3xl mb-6">Month-End Close in Hours — Not Weeks</h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    Automate every step of the close — from reconciliation to reporting.
                    Finage eliminates the bottlenecks that keep your team stuck in spreadsheets every month.
                </p>
                <a href="#" className="text-accent-primary font-semibold hover:underline">See how it works →</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                    "Automated multi-entity reconciliation",
                    "Exception management with AI triage",
                    "One-click report generation for stakeholders",
                    "Full audit trail for every adjustment"
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 bg-dark-card border border-white/10 rounded-xl flex flex-col gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-accent-primary/20 flex items-center justify-center">
                            <span className="text-accent-primary text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-sm font-medium text-gray-200">{item}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
