import { SectionReveal } from '../ui/SectionReveal';
import { MockCard, MetricValue, StatusTag } from '../ui/MockDashboard';

export const FeaturesSection = () => {
    return (
        <section className="py-32 bg-light-secondary text-dark-primary overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <SectionReveal className="text-center mb-24">
                    <span className="eyebrow block mb-4">The Core</span>
                    <h2 className="section-h2 mb-6">The Agentic Operating System for Family Offices</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        Engineered for the complexity of private wealth. Every feature is built to handle
                        multi-entity, multi-asset class, and multi-jurisdictional operations — autonomously.
                    </p>
                </SectionReveal>

                <div className="space-y-40">
                    {/* Feature 1 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <SectionReveal>
                            <h3 className="card-h3 mb-6">Family offices were never designed for unstructured data</h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Custodians, fund admins, and GP portals all deliver data differently — different
                                formats, different schedules, different levels of detail. Finage ingests,
                                normalizes, and reconciles it all automatically.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Ingests data from custodians, fund admins, and GP portals automatically",
                                    "Normalizes across formats — PDFs, spreadsheets, API feeds",
                                    "Flags discrepancies and exceptions for review"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-700">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </SectionReveal>
                        <SectionReveal delay={0.2} className="relative">
                            <MockCard title="Data Extraction Engine">
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <MockCard className="bg-dark-primary border-none shadow-none p-3">
                                        <MetricValue value="147" label="Data Sources" />
                                        <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-[85%] h-full bg-accent-primary" />
                                        </div>
                                    </MockCard>
                                    <MockCard className="bg-dark-primary border-none shadow-none p-3">
                                        <MetricValue value="2.4M" label="Records" />
                                        <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-[92%] h-full bg-status-success" />
                                        </div>
                                    </MockCard>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Goldman Sachs PB', status: 'Synced' },
                                        { name: 'JP Morgan Custody', status: 'Synced' },
                                        { name: 'Northern Trust', status: 'Syncing' },
                                        { name: 'Blackstone Fund Admin', status: 'Synced' },
                                        { name: 'Citadel Securities', status: 'Queued' },
                                    ].map((row) => (
                                        <div key={row.name} className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5 last:border-0 last:pb-0">
                                            <span className="text-gray-300">{row.name}</span>
                                            <StatusTag status={row.status} />
                                        </div>
                                    ))}
                                </div>
                            </MockCard>
                        </SectionReveal>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <SectionReveal delay={0.2} className="order-2 md:order-1 relative">
                            <MockCard title="Statement Intelligence">
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <MockCard className="bg-dark-primary border-none shadow-none p-3">
                                        <MetricValue value="1,847" label="Processed" />
                                        <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-[78%] h-full bg-accent-primary" />
                                        </div>
                                    </MockCard>
                                    <MockCard className="bg-dark-primary border-none shadow-none p-3">
                                        <MetricValue value="99.7%" label="Accuracy" />
                                        <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-[99%] h-full bg-status-success" />
                                        </div>
                                    </MockCard>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Capital Call — Fund VII', status: 'Complete' },
                                        { name: 'Q3 NAV Statement', status: 'Validated' },
                                        { name: 'Distribution Notice', status: 'Reviewing' },
                                        { name: 'K-1 Tax Document', status: 'Queued' },
                                    ].map((row) => (
                                        <div key={row.name} className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5 last:border-0 last:pb-0">
                                            <span className="text-gray-300">{row.name}</span>
                                            <StatusTag status={row.status} />
                                        </div>
                                    ))}
                                </div>
                            </MockCard>
                        </SectionReveal>
                        <SectionReveal className="order-1 md:order-2">
                            <h3 className="card-h3 mb-6">Stop Chasing GPs for Statements</h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Capital calls. Distributions. NAV statements. They arrive in every format
                                imaginable — PDFs, emails, portal downloads. Finage extracts,
                                classifies, and books them automatically.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Extracts data from capital call notices and distribution statements",
                                    "Automatically classifies and books transactions",
                                    "Tracks commitment pacing and unfunded obligations"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-700">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </SectionReveal>
                    </div>

                    {/* Feature 3 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <SectionReveal>
                            <h3 className="card-h3 mb-6">One Trusted View of Public & Private Wealth</h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                For the first time, see every asset — public equities, fixed income, private
                                equity, real estate, digital assets — in a single, real-time view.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Full portfolio transparency across all asset classes",
                                    "Real-time mark-to-market and fair value tracking",
                                    "Aggregated reporting and family-level dashboards",
                                    "Look-through into fund-of-fund structures"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-700">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </SectionReveal>
                        <SectionReveal delay={0.2} className="relative">
                            <MockCard title="Global Allocation">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { name: 'Public Equities', val: '$1.2B', p: '65%' },
                                        { name: 'Private Markets', val: '$2.8B', p: '88%' },
                                        { name: 'Real Estate', val: '$480M', p: '42%' },
                                        { name: 'Digital Assets', val: '$220M', p: '30%' },
                                    ].map((asset) => (
                                        <MockCard key={asset.name} className="bg-dark-primary border-none shadow-none p-3">
                                            <MetricValue value={asset.val} label={asset.name} />
                                            <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-accent-primary" style={{ width: asset.p }} />
                                            </div>
                                        </MockCard>
                                    ))}
                                </div>
                            </MockCard>
                        </SectionReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
