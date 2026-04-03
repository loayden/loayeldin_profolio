import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import type { Project } from '@/lib/portfolio-data';

type ProjectPreviewProps = {
  project: Project;
  index: number;
};

export function ProjectPreview({ project, index }: ProjectPreviewProps) {
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <article className="grid gap-8 py-10 lg:grid-cols-[120px_minmax(0,1fr)]">
      <div className="space-y-3">
        <p className="number font-mono text-sm text-stone-500">{projectNumber}</p>
        <p className="caption">{project.category}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-[#d6a95f]">
              {project.strapline}
            </p>
            <h2 className="text-3xl leading-tight sm:text-4xl">{project.title}</h2>
            <p className="max-w-3xl text-base leading-8 text-stone-300/80 sm:text-lg">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-stone-300/78"
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#f2c27a] transition hover:text-white"
          >
            View case study
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-stone-300/78 transition hover:text-white"
            >
              {project.liveLabel ?? 'View live site'}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
            </a>
          ) : null}
        </div>

        <div className="surface p-6">
          <p className="caption">What this proves</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-300/80">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d6a95f]" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
          <div className="divider my-6" />
          <div className="space-y-2 text-sm text-stone-400">
            <p>{project.role}</p>
            <p>{project.timeline}</p>
            <p className="text-[#d6a95f]">{project.status}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
