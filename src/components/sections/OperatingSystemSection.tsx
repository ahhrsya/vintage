import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionReveal } from '../ui/SectionReveal';
import { StatusTag } from '../ui/MockDashboard';
import { FileText, CheckCircle2, Database, ArrowRight } from 'lucide-react';

type TabId = 'record' | 'unstructured' | 'close';

interface TabData {
    id: TabId;
    title: string;
    description: string;
}

export const OperatingSystemSection = () => {
    const [activeTab, setActiveTab] = useState<TabId>('record');
    const [progress, setProgress] = useState(0);

    const tabs: TabData[] = [
        {
            id: 'record',
            title: 'System of Record',
            description: 'Every position, transaction, document, and contact — consolidated in a single, auditable system. No more stitching together spreadsheets, PDFs, and portal logins.'
        },
        {
            id: 'unstructured',
            title: 'Unstructured to Structured',
            description: 'Finage reads PDFs, scans, and emails — and turns them into structured, reconciled data. AI-powered document intelligence, purpose-built for the family office.'
        },
        {
            id: 'close',
            title: 'Month-End Close',
            description: 'Automate every step of the close — from reconciliation to reporting. Finage eliminates the bottlenecks that keep your team stuck in spreadsheets every month.'
        },
    ];

    useEffect(() => {
        const interval = 50; // Update every 50ms
        const duration = 5000; // 5 seconds per tab
        const step = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    const currentIndex = tabs.findIndex(t => t.id === activeTab);
                    const nextIndex = (currentIndex + 1) % tabs.length;
                    setActiveTab(tabs[nextIndex].id);
                    return 0;
                }
                return prev + step;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [activeTab]);

    const handleTabClick = (id: TabId) => {
        setActiveTab(id);
        setProgress(0);
    };

    return (
        <section className="py-32 bg-dark-primary text-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Column: UI List matching Mercury style */}
                    <div className="lg:col-span-5 pt-12">
                        <SectionReveal>
                            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.04em] mb-12">
                                Built as an Operating System — Not a Dashboard
                            </h2>
                        </SectionReveal>

                        <div className="space-y-0">
                            {tabs.map((tab) => (
                                <div key={tab.id} className="relative">
                                    <button
                                        onClick={() => handleTabClick(tab.id)}
                                        className="w-full text-left py-8 group outline-none"
                                    >
                                        <div className="flex-1">
                                            <h3 className={`text-xl font-bold transition-colors duration-300 ${activeTab === tab.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                                {tab.title}
                                            </h3>

                                            <AnimatePresence>
                                                {activeTab === tab.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base pr-4">
                                                            {tab.description}
                                                        </p>
                                                        <div className="mt-6 flex items-center gap-2 text-blue-500 font-bold text-sm tracking-tight cursor-pointer hover:gap-3 transition-all">
                                                            Explore More <ArrowRight size={14} />
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </button>

                                    {/* Bottom Line / Progress Bar */}
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10">
                                        {activeTab === tab.id && (
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                transition={{ duration: 0.1, ease: 'linear' }}
                                                className="absolute inset-y-0 left-0 bg-blue-500"
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual Mockup matching Mercury style */}
                    <div className="lg:col-span-7 sticky top-32">
                        <div className="relative aspect-[4/3] w-full bg-dark-secondary rounded-[32px] border border-white/10 overflow-hidden shadow-2xl p-8 md:p-12">
                            {/* Decorative background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.1, y: -20 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative w-full h-full flex items-center justify-center pt-8"
                                >
                                    <VisualContent activeTab={activeTab} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const VisualContent = ({ activeTab }: { activeTab: TabId }) => {
    if (activeTab === 'record') {
        return (
            <div className="w-full max-w-md bg-dark-primary rounded-2xl border border-white/5 shadow-2xl p-6">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                            <Database size={16} className="text-white" />
                        </div>
                        <span className="font-bold text-sm">Ledger Overview</span>
                    </div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Live Sync</div>
                </div>
                <div className="space-y-4">
                    {[
                        { name: 'Equity Infusion - Entity A', val: '+$5,000,000', status: 'Complete' },
                        { name: 'Management Fee - Q3', val: '-$125,000', status: 'Complete' },
                        { name: 'Capital Call - Fund IV', val: '-$2,450,000', status: 'Complete' },
                        { name: 'Dividend Inflow', val: '+$48,200', status: 'Complete' },
                    ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between text-xs pb-3 border-b border-white/5 last:border-0 last:pb-0">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-200 font-medium">{row.name}</span>
                                <span className="text-gray-500">{row.val}</span>
                            </div>
                            <StatusTag status={row.status} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (activeTab === 'unstructured') {
        return (
            <div className="w-full grid grid-cols-1 gap-4 max-w-lg">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                            <FileText size={16} className="text-white" />
                        </div>
                        <span className="font-bold text-sm uppercase tracking-widest text-gray-400">Processing Documents</span>
                    </div>
                </div>
                {[
                    { title: "K-1 Statement (PDF)", status: "Extracted", conf: "99.8%" },
                    { title: "Capital Call Notice (Email)", status: "Classified", conf: "98.2%" },
                    { title: "Tax Return (Scan)", status: "Mapped", conf: "100%" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-5 bg-dark-card border border-white/5 rounded-2xl flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <FileText size={18} className="text-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] text-gray-500 uppercase font-bold">{item.status}</span>
                                    <div className="w-1 h-1 rounded-full bg-gray-600" />
                                    <span className="text-[10px] text-blue-400 font-bold">{item.conf} Confidence</span>
                                </div>
                            </div>
                        </div>
                        <CheckCircle2 size={18} className="text-status-success" />
                    </motion.div>
                ))}
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col gap-6 max-w-md">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-white" />
                </div>
                <span className="font-bold text-sm uppercase tracking-widest text-gray-400">Month-End Checklist</span>
            </div>
            {[
                "Reconcile Multi-Entity Ledger",
                "Automate Intercompany Eliminations",
                "Generate Q4 Investor Statements",
                "Audit Trail Validation"
            ].map((text, i) => (
                <motion.div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl"
                >
                    <div className="w-5 h-5 rounded-full border border-blue-500/50 flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="w-2.5 h-2.5 rounded-full bg-blue-500"
                        />
                    </div>
                    <span className="text-sm font-medium text-gray-200">{text}</span>
                </motion.div>
            ))}
            <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Close completed in 2.4 hours</span>
            </div>
        </div>
    );
};

