import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faCode,
  faGlobe,
  faRobot,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectPreview } from '@/components/site/ProjectPreview';
import { Reveal } from '@/components/site/Reveal';
import {
  contactOptions,
  featuredProjects,
  focusAreas,
  processSteps,
  serviceTracks,
  siteConfig,
  stats,
} from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Premium portfolio homepage for Loay Eldin, showcasing product engineering, robotics systems, and technical education.',
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="shell grid min-h-[calc(100svh-5rem)] items-end gap-12 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-8">
            <span className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-[#d6a95f] shadow-[0_0_18px_rgba(214,169,95,0.8)]" />
              Available for global roles and select builds
            </span>

            <div className="space-y-5">
              <p className="caption text-stone-300/90">{siteConfig.shortName}</p>
              <p className="text-sm uppercase tracking-[0.18em] text-[#f2c27a]">
                Founder of {siteConfig.founderBrand}
              </p>
              <h1 className="max-w-5xl text-5xl leading-[0.88] sm:text-7xl lg:text-[6.2rem]">
                Full-stack products with premium polish. Robotics systems with
                competition-grade discipline.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-300/82 sm:text-xl">
                I help teams ship interfaces, prototypes, and technical
                experiences that look executive-ready and hold up under pressure.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="button-primary">
                View case studies
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
              </Link>
              <Link href="/contact?topic=Full-time%20role" className="button-secondary">
                Start a conversation
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </Link>
            </div>

            <div className="grid max-w-3xl gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {stats.slice(0, 3).map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="number text-3xl text-[#f2c27a] sm:text-4xl">
                    {item.value}
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-stone-300/78">
                    {item.label}
                  </p>
                  <p className="text-sm leading-7 text-stone-500">{item.note}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:pb-8">
            <div className="surface-strong relative overflow-hidden p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-20 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(214,169,95,0.28)_0%,transparent_65%)] blur-3xl animate-[drift_12s_ease-in-out_infinite]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:72px_72px] opacity-30" />
              <div className="relative space-y-8">
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/fr-brand-portrait.jpeg"
                      alt="Loay Eldin founder portrait for FRع"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5">
                      <div>
                        <p className="caption text-stone-200/80">Founder identity</p>
                        <p className="mt-2 text-xl text-white sm:text-2xl">
                          <span className="text-[#a855f7]">FR</span>
                          <span className="text-[#f2c27a]">ع</span>
                        </p>
                      </div>
                      <a
                        href={siteConfig.instagramHref}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.16em] text-stone-100 transition hover:border-white/30 hover:text-white"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="caption">Why this portfolio lands better</p>
                  <h2 className="text-3xl leading-tight sm:text-4xl">
                    Built for hiring decisions, not just admiration.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-stone-300/75">
                    The message is simple: strong taste, strong execution, and a
                    technical background that goes beyond normal website work.
                  </p>
                </div>

                <div className="space-y-5">
                  {focusAreas.map((item) => (
                    <div key={item.title} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                      <h3 className="text-2xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-stone-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
                  {contactOptions.slice(0, 2).map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-[1.4rem] border border-white/10 bg-black/15 p-4 transition hover:border-[#d6a95f]/35 hover:bg-white/[0.04]"
                    >
                      <div className="text-sm uppercase tracking-[0.18em] text-[#f2c27a]">
                        {item.label}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-stone-400">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell section-space pt-6">
        <Reveal className="grid gap-8 border-y border-white/10 py-10 lg:grid-cols-3">
          {focusAreas.map((item) => (
            <div key={item.title} className="space-y-3">
              <p className="caption">Positioning signal</p>
              <h2 className="text-2xl">{item.title}</h2>
              <p className="text-sm leading-7 text-stone-400">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="shell section-space">
        <Reveal className="space-y-4">
          <span className="eyebrow">Proof and trust</span>
          <h2 className="max-w-4xl text-4xl leading-tight sm:text-5xl">
            What makes this portfolio stronger is evidence, not only style.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-stone-300/78 sm:text-lg">
            I now show live products, founder identity, international recognition,
            and robotics-driven innovation in one place so hiring managers can see
            both polish and substance.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          <Reveal delay={0.03}>
            <div className="surface p-6">
              <FontAwesomeIcon icon={faTrophy} className="text-2xl text-[#f2c27a]" />
              <h3 className="mt-4 text-2xl">25+ awards</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                A long record of robotics and innovation results across Egypt and
                international competitions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="surface p-6">
              <FontAwesomeIcon icon={faGlobe} className="text-2xl text-[#f2c27a]" />
              <h3 className="mt-4 text-2xl">Represented Egypt</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                Competition experience across multiple countries builds credibility,
                communication, and pressure-tested execution.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.09}>
            <div className="surface p-6">
              <FontAwesomeIcon icon={faCode} className="text-2xl text-[#f2c27a]" />
              <h3 className="mt-4 text-2xl">Live websites shipped</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                Real public work like VibeUp Event and Aurelien ETA makes the
                portfolio stronger than concept-only presentation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="surface p-6">
              <FontAwesomeIcon icon={faRobot} className="text-2xl text-[#f2c27a]" />
              <h3 className="mt-4 text-2xl">Founder of {siteConfig.founderBrand}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                The founder identity adds a stronger personal brand and makes the
                portfolio feel more intentional and memorable.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Reveal delay={0.15}>
            <a
              href="https://vibeup-event.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="surface block p-6 transition hover:border-[#d6a95f]/30"
            >
              <p className="caption">Live website</p>
              <h3 className="mt-3 text-2xl">VibeUp Event Platform</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                Event-focused product website with stronger hierarchy, pricing
                communication, and launch-ready visual presentation.
              </p>
            </a>
          </Reveal>
          <Reveal delay={0.18}>
            <a
              href="https://aurelien-eta.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="surface block p-6 transition hover:border-[#d6a95f]/30"
            >
              <p className="caption">Live website</p>
              <h3 className="mt-3 text-2xl">Aurelien ETA Fashion Website</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                Premium fashion and brand website showing a calmer editorial style
                and stronger public-facing frontend execution.
              </p>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="shell section-space">
        <Reveal className="max-w-4xl space-y-4">
          <span className="eyebrow">Selected work</span>
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Case studies designed to show range, not filler.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-stone-300/78 sm:text-lg">
            The strongest portfolios make capability obvious fast. These projects
            show product execution, robotics systems thinking, and education-led
            design in a clearer, more premium format.
          </p>
        </Reveal>

        <div className="mt-12">
          {featuredProjects.map((project, index) => (
            <div key={project.slug}>
              {index > 0 ? <div className="accent-divider" /> : null}
              <Reveal delay={index * 0.05}>
                <ProjectPreview project={project} index={index} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="space-y-5">
            <span className="eyebrow">Services and options</span>
            <h2 className="max-w-xl text-4xl leading-tight sm:text-5xl">
              More pages, clearer offers, and stronger ways to work together.
            </h2>
            <p className="max-w-xl text-base leading-8 text-stone-300/78 sm:text-lg">
              This site is now structured to support both job opportunities and
              project inquiries, with stronger page depth and clearer collaboration
              paths.
            </p>
            <Link href="/services" className="button-secondary">
              Explore services
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
            </Link>
          </Reveal>

          <div className="space-y-4">
            {serviceTracks.slice(0, 3).map((track, index) => (
              <Reveal key={track.title} delay={index * 0.06}>
                <div className="surface p-6">
                  <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="space-y-3">
                      <p className="caption">Track {index + 1}</p>
                      <h3 className="text-2xl">{track.title}</h3>
                      <p className="text-sm leading-7 text-stone-400">
                        {track.description}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-[0.18em] text-[#f2c27a]">
                        Best for
                      </p>
                      <p className="text-sm leading-7 text-stone-300/78">
                        {track.idealFor}
                      </p>
                      <ul className="space-y-2 text-sm leading-7 text-stone-400">
                        {track.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d6a95f]" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-space pt-0">
        <div className="surface-strong p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="space-y-5">
              <span className="eyebrow">How I work</span>
              <h2 className="max-w-xl text-4xl leading-tight sm:text-5xl">
                Clear process. Fewer weak ideas. Better final signal.
              </h2>
              <p className="max-w-xl text-base leading-8 text-stone-300/78 sm:text-lg">
                Strong portfolios and strong products are both about disciplined
                choices. I reduce noise, sharpen hierarchy, and build with a clear
                outcome in mind.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05}>
                  <div className="rounded-[1.6rem] border border-white/10 bg-black/10 p-5">
                    <div className="number text-sm uppercase tracking-[0.2em] text-[#f2c27a]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="mt-3 text-2xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone-400">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
