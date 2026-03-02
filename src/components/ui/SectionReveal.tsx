import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export const SectionReveal = ({ children, className = '', delay = 0 }: SectionRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
