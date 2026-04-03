import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PageIntro } from '@/components/site/PageIntro';
import { Reveal } from '@/components/site/Reveal';
import {
  achievementRecords,
  competitionHighlights,
  focusAreas,
  stats,
} from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'Recognition',
  description:
    'International competitions, awards, and the engineering discipline behind Loay Eldin’s global recognition.',
};

export default function CompetitionsPage() {
  return (
    <>
      <section className="shell section-space pt-32">
        <PageIntro
          eyebrow="Recognition"
          title="International competition taught me to build under pressure and communicate under scrutiny."
          description="These achievements matter because they prove more than medals. They show discipline, preparation, systems thinking, and the ability to perform in front of demanding judges and teams."
        />
      </section>

      <section className="shell pb-12">
        <div className="grid gap-4 lg:grid-cols-2">
          {competitionHighlights.map((item, index) => (
            <Reveal key={`${item.title}-${item.year}`} delay={index * 0.04}>
              <div className="surface p-7 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="caption">{item.year}</p>
                  <span className="rounded-full border border-[#d6a95f]/30 bg-[#d6a95f]/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#f2c27a]">
                    {item.place}
                  </span>
                </div>
                <h2 className="mt-4 text-3xl">{item.title}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-400">
                  {item.location}
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section-space pt-0">
        <Reveal className="grid gap-6 border-y border-white/10 py-10 lg:grid-cols-3">
          {focusAreas.map((item) => (
            <div key={item.title} className="space-y-3">
              <p className="caption">What competition built</p>
              <h2 className="text-2xl">{item.title}</h2>
              <p className="text-sm leading-7 text-stone-400">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="shell section-space pt-0">
        <Reveal className="space-y-6">
          <div className="space-y-3">
            <p className="caption">Extended timeline</p>
            <h2 className="max-w-3xl text-4xl leading-tight sm:text-5xl">
              A longer competition record across robotics, innovation, and scientific presentation.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {achievementRecords.map((item, index) => (
              <Reveal key={`${item.date}-${item.title}`} delay={index * 0.015}>
                <div className="surface p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="caption">{item.date}</p>
                    <span className="rounded-full border border-[#d6a95f]/30 bg-[#d6a95f]/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#f2c27a]">
                      {item.result}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {item.details}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="shell section-space pt-0">
        <Reveal className="surface-strong flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="caption">Scale</p>
            <div className="flex flex-wrap gap-6">
              {stats.slice(0, 3).map((item) => (
                <div key={item.label}>
                  <div className="number text-3xl text-[#f2c27a]">{item.value}</div>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-300/75">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Link href="/contact?topic=Project%20walkthrough" className="button-primary">
            Ask about the journey
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
