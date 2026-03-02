import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
}: ButtonProps) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg cursor-pointer active:scale-95';

    const variants = {
        primary: 'bg-accent-primary text-white shadow-sm hover:shadow-btn-hover hover:-translate-y-0.5',
        outline: 'border border-gray-700 text-gray-200 hover:border-gray-500 hover:bg-white/5 hover:-translate-y-0.5',
        ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-[15px]',
        lg: 'px-8 py-4 text-base md:text-lg',
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
};
