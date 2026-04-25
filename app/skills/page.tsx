import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PageIntro } from '@/components/site/PageIntro';
import { Reveal } from '@/components/site/Reveal';
import { focusAreas, siteConfig, skillGroups } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    `A clear breakdown of ${siteConfig.fullName}'s frontend, backend, robotics, and communication strengths.`,
};

export default function SkillsPage() {
  return (
    <>
      <section className="shell section-space pt-32">
        <PageIntro
          eyebrow="Skills"
          title="The point is not to list tools. The point is to show what I can deliver."
          description="This page groups the stack by capability so teams can understand where I create real value: premium frontend execution, application flow, robotics thinking, and strong communication."
        />
      </section>

      <section className="shell pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <div className="surface p-7 sm:p-8">
                <p className="caption">Capability</p>
                <h2 className="mt-3 text-3xl">{group.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  {group.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-stone-300/78"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section-space pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {focusAreas.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6">
                <p className="caption">What teams feel</p>
                <h2 className="mt-3 text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section-space pt-0">
        <Reveal className="surface-strong flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="caption">Fit</p>
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
              Best for teams that want stronger frontend quality without losing technical depth.
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
