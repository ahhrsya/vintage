import { Button } from '../ui/Button';
import { SectionReveal } from '../ui/SectionReveal';

export const CTASection = () => {
    return (
        <section className="py-32 bg-dark-primary text-white border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <SectionReveal>
                    <h2 className="section-h2 mb-6">
                        Close Faster. Operate{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                            Smarter.
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
                        Finage is the intelligent operating system built for family offices that
                        refuse to settle for spreadsheets and legacy software.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="primary" size="lg">Request a Demo</Button>
                        <Button variant="outline" size="lg">Talk to Sales →</Button>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};
