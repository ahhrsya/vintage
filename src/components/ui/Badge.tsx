import { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    className?: string;
    dot?: boolean;
}

export const Badge = ({ children, className = '', dot = false }: BadgeProps) => {
    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card border border-white/10 text-xs font-medium text-gray-400 ${className}`}>
            {dot && (
                <span className="relative flex h-2 w-2">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success"></span>
                </span>
            )}
            {children}
        </div>
    );
};
