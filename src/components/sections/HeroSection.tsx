import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { MockCard, MetricValue, DonutChart, StatusTag } from '../ui/MockDashboard';
import { SectionReveal } from '../ui/SectionReveal';

export const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 bg-dark-primary overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <SectionReveal delay={0.1}>
                    <Badge dot className="mb-8">
                        Trusted by Leading Single and Multi-Family Offices
                    </Badge>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                    <h1 className="hero-h1 text-white mb-6">
                        The Agentic Operating System for{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                            Family Offices
                        </span>
                    </h1>
                </SectionReveal>

                <SectionReveal delay={0.3}>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                        Consolidate every asset, automate every workflow, and close your books in hours — not weeks.
                        Purpose-built for the complexity of private wealth.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <Button variant="primary" size="lg">Request a Demo</Button>
                    <Button variant="outline" size="lg">Watch Overview →</Button>
                </SectionReveal>

                {/* Dashboard Browser Mockup */}
                <SectionReveal delay={0.5} className="relative max-w-5xl mx-auto">
                    <div className="bg-dark-secondary rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-1">
                        {/* Browser Header */}
                        <div className="flex items-center gap-1.5 px-4 py-3 bg-dark-secondary border-b border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                            <div className="ml-4 flex-1 h-5 bg-black/20 rounded-md" />
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-6 md:p-8 bg-dark-primary grid grid-cols-1 md:grid-cols-3 gap-6">
                            <MockCard title="Total AUM">
                                <MetricValue
                                    value="$4.7B"
                                    change="↑ 12.3% YTD"
                                />
                                <div className="mt-4 flex items-end gap-1 h-12">
                                    {[40, 60, 45, 70, 55, 80, 65, 90].map((h, i) => (
                                        <div key={i} className="flex-1 bg-accent-primary/20 rounded-t-sm" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                            </MockCard>

                            <MockCard title="Asset Allocation">
                                <div className="flex items-center justify-between">
                                    <MetricValue
                                        value="Diversified"
                                        sub="7 Asset Classes"
                                    />
                                    <DonutChart />
                                </div>
                            </MockCard>

                            <MockCard title="Pending Tasks">
                                <MetricValue
                                    value="12"
                                    change="3 overdue"
                                    trend="down"
                                />
                                <div className="mt-4 space-y-3">
                                    {[
                                        { name: 'K-1 Processing', status: 'Processing' },
                                        { name: 'Q4 Statements', status: 'Complete' },
                                        { name: 'Capital Call #7', status: 'Pending' },
                                    ].map((task) => (
                                        <div key={task.name} className="flex items-center justify-between text-[11px]">
                                            <span className="text-gray-300 font-medium">{task.name}</span>
                                            <StatusTag status={task.status} />
                                        </div>
                                    ))}
                                </div>
                            </MockCard>
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};
