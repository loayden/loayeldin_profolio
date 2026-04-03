import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PageIntro } from '@/components/site/PageIntro';
import { ProjectPreview } from '@/components/site/ProjectPreview';
import { Reveal } from '@/components/site/Reveal';
import { projects } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A stronger, multi-page case-study view of Loay Eldin’s product, robotics, and education-focused projects.',
};

const projectCategories = Array.from(new Set(projects.map((project) => project.category)));

export default function ProjectsPage() {
  return (
    <>
      <section className="shell section-space pt-32">
        <PageIntro
          eyebrow="Projects"
          title="A portfolio should make range obvious without losing focus."
          description="These projects are framed as case studies so hiring managers and clients can understand the work, the thinking behind it, and why it matters."
        >
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-stone-300/78"
              >
                {category}
              </span>
            ))}
          </div>
        </PageIntro>
      </section>

      <section className="shell pb-12">
        {projects.map((project, index) => (
          <div key={project.slug}>
            {index > 0 ? <div className="accent-divider" /> : null}
            <Reveal delay={index * 0.04}>
              <ProjectPreview project={project} index={index} />
            </Reveal>
          </div>
        ))}
      </section>

      <section className="shell section-space pt-0">
        <Reveal className="surface-strong flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="caption">Private context available</p>
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
              Want the story behind a project, the decisions made, or how I would
              adapt the same approach for your team?
            </h2>
            <p className="text-sm leading-7 text-stone-400 sm:text-base">
              I can walk through code choices, structure, design decisions, and
              how I think about polish as a hiring signal.
            </p>
          </div>
          <Link href="/contact?topic=Project%20walkthrough" className="button-primary">
            Request walkthrough
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
