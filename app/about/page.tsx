import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PageIntro } from '@/components/site/PageIntro';
import { Reveal } from '@/components/site/Reveal';
import { focusAreas, principles, siteConfig, stats } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Loay Eldin, his approach to product engineering, robotics, teaching, and why his portfolio is positioned for stronger opportunities.',
};

export default function AboutPage() {
  return (
    <>
      <section className="shell section-space pt-32">
        <PageIntro
          eyebrow="About"
          title="I combine product taste, technical depth, and competitive discipline."
          description="My background is unusual in a useful way: I build for the web, think in systems because of robotics, founded FRع, and communicate clearly because teaching has always been part of the work."
        />
      </section>

      <section className="shell pb-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="surface-strong p-7 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-stone-300/80 sm:text-lg">
              <p>
                I care about work that feels high quality before anyone reads the
                code. That means stronger hierarchy, calmer execution, better
                responsiveness, and clearer positioning from the first screen.
              </p>
              <p>
                Robotics shaped how I solve problems: fast iteration, precision,
                and the ability to translate technical complexity into decisions
                people can act on quickly. That carries directly into how I build
                products and interfaces today.
              </p>
              <p>
                Teaching shaped how I communicate. I value clarity, structure, and
                making advanced ideas easier to trust. That is useful in code, in
                product conversations, and in the way this portfolio presents the
                work.
              </p>
              <p>
                I am also the founder of {siteConfig.founderBrand}, a brand I use
                as part of my creative and technical identity.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="surface p-6">
                  <p className="caption">Working principle</p>
                  <h2 className="mt-3 text-2xl">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-space">
        <Reveal className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="surface p-6">
              <div className="number text-4xl text-[#f2c27a]">{item.value}</div>
              <h2 className="mt-3 text-2xl">{item.label}</h2>
              <p className="mt-2 text-sm leading-7 text-stone-400">{item.note}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="shell section-space pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {focusAreas.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6">
                <p className="caption">Edge</p>
                <h2 className="mt-3 text-3xl">{item.title}</h2>
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
            <p className="caption">Next step</p>
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
              If you want someone who can make the work feel more premium and more
              trustworthy, let&apos;s talk.
            </h2>
            <p className="text-sm leading-7 text-stone-400 sm:text-base">
              Based in {siteConfig.location}, open to global roles and high-value
              projects.
            </p>
          </div>
          <Link href="/contact?topic=Full-time%20role" className="button-primary">
            Hire me
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
