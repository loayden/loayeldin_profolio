import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PageIntro } from '@/components/site/PageIntro';
import { Reveal } from '@/components/site/Reveal';
import { experienceTimeline, siteConfig } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'A clearer timeline of Loay Eldin’s engineering, competition, and teaching experience.',
};

export default function ExperiencePage() {
  return (
    <>
      <section className="shell section-space pt-32">
        <PageIntro
          eyebrow="Experience"
          title="The timeline shows more than milestones. It shows how the edge was built."
          description="This experience page connects global competitions, product work, and mentorship into one clearer narrative for recruiters and clients."
        />
      </section>

      <section className="shell pb-12">
        <div className="relative space-y-4 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-white/10 sm:before:left-5">
          {experienceTimeline.map((item, index) => (
            <Reveal key={`${item.year}-${item.title}`} delay={index * 0.05}>
              <div className="relative pl-14 sm:pl-16">
                <div className="absolute left-[0.55rem] top-6 h-4 w-4 rounded-full border border-[#d6a95f]/40 bg-[#d6a95f]/20 sm:left-[0.8rem]" />
                <div className="surface p-7 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="caption">{item.year}</p>
                    <span className="text-sm uppercase tracking-[0.16em] text-[#f2c27a]">
                      {item.subtitle}
                    </span>
                  </div>
                  <h2 className="mt-4 text-3xl">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {item.description}
                  </p>
                  <div className="divider my-5" />
                  <p className="text-sm leading-7 text-stone-300/78">{item.outcome}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section-space pt-0">
        <Reveal className="surface-strong flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="caption">Available from {siteConfig.location}</p>
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
              I am looking for work where execution quality, clarity, and ownership matter.
            </h2>
          </div>
          <Link href="/contact?topic=Full-time%20role" className="button-primary">
            Discuss a role
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
