export const Footer = () => {
    return (
        <footer className="py-20 bg-dark-primary text-gray-400 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-20">
                    <div className="col-span-2 md:col-span-5">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-accent-primary rounded flex items-center justify-center font-bold text-white text-lg">
                                F
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">Finage</span>
                        </div>
                        <p className="max-w-sm mb-6 leading-relaxed">
                            The agentic operating system built for the complexity of private wealth management.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-2 md:col-start-7">
                        <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Integrations', 'Pricing', 'Changelog'].map((link) => (
                                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4">
                            {['About', 'Careers', 'Blog', 'Contact'].map((link) => (
                                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-2">
                        <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'].map((link) => (
                                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 text-xs font-medium">
                    <p>© 2026 Finage. All rights reserved.</p>
                    <p className="mt-4 md:mt-0 text-gray-500 italic">Built for families that think in generations.</p>
                </div>
            </div>
        </footer>
    );
};
