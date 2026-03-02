import { SectionReveal } from '../ui/SectionReveal';
import { Shield, Lock, Globe, Key } from 'lucide-react';

export const SecuritySection = () => {
    const badges = [
        {
            icon: <Shield className="w-6 h-6 text-accent-primary" />,
            title: 'SOC 2 Type II',
            desc: 'Certified annually',
        },
        {
            icon: <Lock className="w-6 h-6 text-accent-primary" />,
            title: '256-bit Encryption',
            desc: 'At rest & in transit',
        },
        {
            icon: <Globe className="w-6 h-6 text-accent-primary" />,
            title: 'GDPR Compliant',
            desc: 'EU data residency',
        },
        {
            icon: <Key className="w-6 h-6 text-accent-primary" />,
            title: 'SSO & MFA',
            desc: 'Enterprise access control',
        },
    ];

    return (
        <section className="py-32 bg-dark-primary text-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <SectionReveal>
                        <span className="eyebrow block mb-4">Enterprise Security</span>
                        <h2 className="section-h2 mb-6">
                            Built for the Security and Compliance Needs of Family Offices
                        </h2>
                        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                            We understand the sensitivity of family office data. Finage is designed
                            from the ground up with bank-grade security and full regulatory compliance.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {badges.map((badge, i) => (
                                <div key={badge.title} className="p-6 bg-dark-card border border-white/5 rounded-2xl flex flex-col gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center">
                                        {badge.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{badge.title}</h4>
                                        <p className="text-sm text-gray-500">{badge.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionReveal>

                    <SectionReveal delay={0.2} className="relative aspect-video bg-dark-secondary rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center p-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent" />
                        <div className="relative w-full h-full border border-white/5 rounded-2xl bg-dark-primary p-8 flex flex-col gap-6">
                            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                                <div className="w-12 h-12 rounded-xl bg-accent-primary flex items-center justify-center shadow-lg shadow-accent-primary/20">
                                    <Shield className="text-white w-7 h-7" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Security Monitor</div>
                                    <div className="text-[10px] text-gray-500">Real-time threat protection active</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[85, 45, 60, 30].map((w, i) => (
                                    <div key={i} className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${w}%` }}
                                            transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                                            className="h-full bg-accent-primary/40"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-auto">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Encrypted</div>
                                    <div className="text-xl font-bold">AES-256</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Status</div>
                                    <div className="text-xl font-bold text-status-success">Secure</div>
                                </div>
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
};
