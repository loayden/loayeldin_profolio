import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PageIntro } from '@/components/site/PageIntro';
import { Reveal } from '@/components/site/Reveal';
import { contactOptions, processSteps, serviceTracks } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore the collaboration options Loay Eldin offers, from premium website builds to product engineering, workshops, and technical prototypes.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="shell section-space pt-32">
        <PageIntro
          eyebrow="Services"
          title="More options. Better structure. Clearer collaboration paths."
          description="This portfolio now supports job opportunities, premium website work, technical prototype builds, and education-driven engagements with distinct pages and stronger calls to action."
        />
      </section>

      <section className="shell pb-12">
        <div className="space-y-4">
          {serviceTracks.map((track, index) => (
            <Reveal key={track.title} delay={index * 0.05}>
              <div className="surface p-7 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="space-y-4">
                    <p className="caption">Offer {index + 1}</p>
                    <h2 className="text-3xl">{track.title}</h2>
                    <p className="text-sm leading-7 text-stone-400">
                      {track.description}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-[#f2c27a]">
                        Best for
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone-300/78">
                        {track.idealFor}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-[#f2c27a]">
                        Deliverables
                      </p>
                      <ul className="mt-2 space-y-2 text-sm leading-7 text-stone-300/78">
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
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section-space pt-0">
        <div className="surface-strong p-8 sm:p-10">
          <Reveal className="space-y-8">
            <div className="space-y-3">
              <p className="caption">Delivery process</p>
              <h2 className="max-w-3xl text-4xl leading-tight sm:text-5xl">
                The work moves faster when the structure is clear from the start.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.6rem] border border-white/10 bg-black/10 p-5"
                >
                  <div className="number text-sm uppercase tracking-[0.2em] text-[#f2c27a]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-3 text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-stone-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell section-space pt-0">
        <div className="grid gap-4 lg:grid-cols-2">
          {contactOptions.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <Link
                href={item.href}
                className="surface block p-6 transition hover:border-[#d6a95f]/30"
              >
                <p className="caption">Action</p>
                <h2 className="mt-3 text-2xl">{item.label}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  {item.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section-space pt-0">
        <Reveal className="surface-strong flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="caption">Open now</p>
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
              If the brief is ambitious and the presentation quality matters, I am interested.
            </h2>
          </div>
          <Link href="/contact?topic=Website%20or%20product%20build" className="button-primary">
            Start a project
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
