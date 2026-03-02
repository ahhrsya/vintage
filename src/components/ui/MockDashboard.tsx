import { ReactNode } from 'react';

interface MockCardProps {
    children: ReactNode;
    className?: string;
    title?: string;
}

export const MockCard = ({ children, className = '', title }: MockCardProps) => (
    <div className={`bg-dark-card border border-white/10 rounded-xl p-5 shadow-dark-card ${className}`}>
        {title && <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{title}</h4>}
        {children}
    </div>
);

export const StatusTag = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
        Synced: 'bg-status-success/10 text-status-success',
        Complete: 'bg-status-success/10 text-status-success',
        Processing: 'bg-accent-primary/10 text-accent-primary',
        Syncing: 'bg-accent-primary/10 text-accent-primary',
        Pending: 'bg-status-warning/10 text-status-warning',
        Reviewing: 'bg-accent-primary/10 text-accent-primary',
        Validated: 'bg-status-success/10 text-status-success',
        Queued: 'bg-gray-500/10 text-gray-400',
    };

    return (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${styles[status] || styles.Pending}`}>
            {status}
        </span>
    );
};

export const MetricValue = ({ value, label, sub, change, trend = 'up' }: { value: string, label?: string, sub?: string, change?: string, trend?: 'up' | 'down' }) => (
    <div className="flex flex-col gap-1">
        {label && <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">{label}</span>}
        <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-white tracking-tight">{value}</span>
            {change && (
                <span className={`text-[10px] font-bold ${trend === 'up' ? 'text-status-success' : 'text-status-error'}`}>
                    {change}
                </span>
            )}
        </div>
        {sub && <span className="text-[10px] text-gray-400">{sub}</span>}
    </div>
);

export const DonutChart = () => (
    <div className="relative w-24 h-24 flex items-center justify-center">
        <div
            className="w-full h-full rounded-full"
            style={{
                background: 'conic-gradient(var(--color-accent-primary) 0% 45%, #8b5cf6 45% 75%, #312e81 75% 100%)'
            }}
        />
        <div className="absolute w-16 h-16 bg-dark-card rounded-full" />
    </div>
);
