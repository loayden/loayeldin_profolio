import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/site/Reveal';
import {
  getProjectBySlug,
  projects,
  siteConfig,
} from '@/lib/portfolio-data';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  return {
    title: project ? project.title : 'Project',
    description: project ? project.summary : siteConfig.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="shell section-space pt-32">
        <Reveal className="space-y-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-stone-400 transition hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-base" />
            Back to projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <span className="eyebrow">{project.category}</span>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-[#f2c27a]">
                  {project.strapline}
                </p>
                <h1 className="max-w-4xl text-4xl leading-[0.94] sm:text-6xl">
                  {project.title}
                </h1>
                <p className="max-w-3xl text-base leading-8 text-stone-300/78 sm:text-lg">
                  {project.summary}
                </p>
              </div>
            </div>

            <div className="surface-strong p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="caption">Role</p>
                  <p className="mt-2 text-sm leading-7 text-stone-300/78">
                    {project.role}
                  </p>
                </div>
                <div>
                  <p className="caption">Timeline</p>
                  <p className="mt-2 text-sm leading-7 text-stone-300/78">
                    {project.timeline}
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <p className="caption">Status</p>
                  <p className="mt-2 text-sm leading-7 text-[#f2c27a]">
                    {project.status}
                  </p>
                </div>
                {project.liveUrl ? (
                  <div className="sm:col-span-2">
                    <p className="caption">Live project</p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-stone-100 transition hover:text-[#f2c27a]"
                    >
                      {project.liveLabel ?? 'Open live site'}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
                    </a>
                  </div>
                ) : null}
              </div>

              <div className="divider my-6" />

              <div>
                <p className="caption">Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-stone-300/78"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="shell pb-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            {project.detailSections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.05}>
                <div className="surface p-7 sm:p-8">
                  <p className="caption">Section {index + 1}</p>
                  <h2 className="mt-3 text-3xl">{section.title}</h2>
                  <p className="mt-4 text-base leading-8 text-stone-300/78">
                    {section.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="surface-strong p-7 sm:p-8">
              <p className="caption">What this project shows</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-300/80">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d6a95f]" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="divider my-8" />

              <div className="space-y-3">
                <h2 className="text-3xl">Want this level of polish in your own work?</h2>
                <p className="text-sm leading-7 text-stone-400">
                  I can apply the same approach to a product role, a website
                  redesign, or a technical prototype that needs stronger structure
                  and presentation.
                </p>
                <Link href="/contact?topic=Project%20walkthrough" className="button-primary mt-4">
                  Talk through a project
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
