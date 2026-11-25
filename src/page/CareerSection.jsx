// No hooks needed for static timeline

const TimelineItem = ({ year, title, description, index }) => (
    <div className="animate-fade-up stagger-list" style={{ animationDelay: `${index * 0.15}s` }}>
        <div className="relative pl-8 pb-12 last:pb-0">
            {/* Timeline dot and line - hand-drawn style */}
            <div
                className="absolute left-0 top-1 w-4 h-4 rounded-full z-10 sketch-circle border-ink bg-paper border-2"
                style={{ borderRadius: '50% 45% 55% 50% / 45% 55% 50% 45%' }}
            />
            <div
                className="absolute left-1.5 top-5 bottom-0 w-0.5 last:hidden border-line"
                style={{ borderStyle: 'dashed' }}
            />

            {/* Year marker on the line */}
            <div className="absolute left-0 top-0 w-4 h-4 flex items-center justify-center">
                <span className="text-xs font-hand text-subtle rotate-[-5deg]">→</span>
            </div>

            <div className="sketch-border-card p-6 relative tape">
                <div className="mb-3 flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest font-hand text-subtle">
                        {year}
                    </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-ink">{title}</h3>
                <p className="text-base leading-relaxed text-muted">{description}</p>

                {/* Decorative bracket */}
                <div className="absolute -top-3 -right-3 text-2xl font-hand opacity-20">&rbrace;</div>
                <div className="absolute -bottom-3 -left-3 text-2xl font-hand opacity-20">&lbrace;</div>
            </div>
        </div>
    </div>
);

import { DualTitle, StandardHeader } from '../components/SectionTitle';

export default function CareerSection() {
    const timelineData = [
        {
            year: '2021 - 2022',
            title: 'Baccalauréat - Physical Sciences & Chemistry',
            description:
                'Completed high school in physical sciences and chemistry at Lycée Abderrahmane Belkorchi, developing discipline and a strong interest in technology and problem-solving.'
        },
        {
            year: '2022 - 2024',
            title: 'Technicien Spécialisé - Full-Stack Development',
            description:
                'Learned full-stack development hands-on at Centre de Formation Professionnelle Hassania, building and deploying real-world digital solutions with modern web technologies.'
        },
        {
            year: '2024 - Present',
            title: 'Student at 1337 Coding School (42 Network)',
            description:
                'Advancing software engineering through project-based peer learning. Focused on low-level programming, systems logic, C/C++, algorithms, and building high-performance unmanaged code.'
        }
    ];

    return (
        <section id="career" className="relative py-20 px-6 bg-journal">
            {/* Background paper texture - ruled paper */}
            <div className="absolute inset-0 ruled-bg opacity-15" aria-hidden="true" />

            {/* Decorative elements */}
            <div className="absolute top-20 left-4 w-2 h-2 rounded-full opacity-30 animate-float bg-muted" />
            <div
                className="absolute bottom-20 right-4 w-3 h-3 border-2 border-soft rounded-full opacity-20 animate-float"
                style={{ animationDelay: '1s' }}
            />

            {/* Centered content container */}
            <div className="relative max-w-7xl mx-auto">

                <DualTitle pinnedLabel="Journey" boxedTitle="My Path." />

                {/* Timeline */}
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6 stagger-list">
                        {timelineData.map((item, index) => (
                            <TimelineItem key={index} {...item} index={index} />
                        ))}

                        <div
                            className="text-center animate-fade-up stagger-list"
                            style={{ animationDelay: `${timelineData.length * 0.15}s` }}
                        >
                            <p className="text-xl font-bold italic font-hand text-muted">
                                ...and the journey continues, incha'Allah.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 divider-sketch" />
        </section>
    );
}
