import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 bg-accent-primary rounded flex items-center justify-center font-bold text-white text-lg">
                        F
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Finage</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {['Features', 'Customers', 'Company', 'Docs', 'Pricing'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                        Log in
                    </Button>
                    <Button variant="primary" size="sm">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
};
