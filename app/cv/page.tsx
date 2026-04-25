import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { PageIntro } from '@/components/site/PageIntro';
import { PrintCvButton } from '@/components/site/PrintCvButton';
import { Reveal } from '@/components/site/Reveal';
import {
  cvExperience,
  cvSelectedProjectSlugs,
  cvSelectedRecognitionKeys,
} from '@/lib/cv-data';
import {
  achievementRecords,
  featuredProjects,
  professionalProfile,
  siteConfig,
  skillGroups,
  stats,
} from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'CV',
  description:
    'CV of Loay Eldin Mohamed Mahmoud, featuring product engineering, robotics, and education experience.',
};

const selectedProjects = featuredProjects
  .filter((project) => cvSelectedProjectSlugs.includes(project.slug))
  .sort(
    (left, right) =>
      cvSelectedProjectSlugs.indexOf(left.slug) - cvSelectedProjectSlugs.indexOf(right.slug),
  );

const selectedRecognition = achievementRecords
  .filter((item) => cvSelectedRecognitionKeys.includes(`${item.date}|${item.title}`))
  .sort(
    (left, right) =>
      cvSelectedRecognitionKeys.indexOf(`${left.date}|${left.title}`) -
      cvSelectedRecognitionKeys.indexOf(`${right.date}|${right.title}`),
  );

const contactItems = [
  {
    label: 'Location',
    value: siteConfig.location,
    icon: faLocationDot,
  },
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: faEnvelope,
  },
  {
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, '')}`,
    icon: faPhone,
  },
];

const profileLinks = [
  {
    label: 'GitHub',
    href: siteConfig.githubHref,
    icon: faGithub,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.linkedinHref,
    icon: faLinkedin,
  },
  {
    label: 'WhatsApp',
    href: siteConfig.whatsappHref,
    icon: faWhatsapp,
  },
  {
    label: 'FRع',
    href: siteConfig.instagramHref,
    icon: faInstagram,
  },
];

export default function CvPage() {
  return (
    <>
      <section className="shell section-space pt-32">
        <PageIntro
          eyebrow="CV"
          title={siteConfig.fullName}
          description="Full-stack developer, robotics engineer, and technical educator with live product work, international competition recognition, and a strong record in robotics and education-led innovation."
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-300/78">
                <span>Full-Stack Developer</span>
                <span>Robotics Engineer</span>
                <span>Founder of {siteConfig.founderBrand}</span>
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-400">
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="transition hover:text-white"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <PrintCvButton />
          </div>
        </PageIntro>
      </section>

      <section className="shell pb-12">
        <Reveal>
          <div className="surface-strong p-8 sm:p-10">
            <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr]">
              <aside className="space-y-8 xl:border-r xl:border-white/10 xl:pr-10">
                <div className="space-y-3">
                  <p className="caption">Positioning</p>
                  <h2 className="text-3xl leading-tight sm:text-4xl">
                    Full-stack product work with robotics, AI, and education depth.
                  </h2>
                  <p className="text-sm leading-7 text-stone-400">
                    Best suited for frontend-heavy product teams, full-stack web roles,
                    innovation labs, and education or robotics projects that need clearer
                    execution and stronger presentation.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="caption">Career highlights</p>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                      >
                        <div className="flex items-end gap-3">
                          <span className="number text-3xl text-[#f2c27a]">{item.value}</span>
                          <p className="text-xs uppercase tracking-[0.16em] text-stone-300/78">
                            {item.label}
                          </p>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-stone-400">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="caption">Contact</p>
                  <div className="space-y-3">
                    {contactItems.map((item) => (
                      <div key={item.label} className="flex items-start gap-3 text-sm text-stone-300/80">
                        <FontAwesomeIcon icon={item.icon} className="mt-1 text-[#f2c27a]" />
                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a href={item.href} className="transition hover:text-white">
                              {item.value}
                            </a>
                          ) : (
                            <p>{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="caption">Core stack</p>
                  <div className="space-y-4">
                    {skillGroups.map((group) => (
                      <div key={group.title} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                        <h3 className="text-lg">{group.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-stone-400">
                          {group.tools.join(' • ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="caption">Online profiles</p>
                  <div className="flex flex-wrap gap-3">
                    {profileLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs uppercase tracking-[0.18em] text-stone-300/78 transition hover:border-white/20 hover:text-white"
                      >
                        <FontAwesomeIcon icon={item.icon} className="text-sm" />
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="space-y-10">
                <div className="space-y-3">
                  <p className="caption">Professional summary</p>
                  <p className="text-base leading-8 text-stone-300/80 sm:text-lg">
                    {professionalProfile.summary}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="caption">Selected experience</p>
                  <div className="space-y-6">
                    {cvExperience.map((item) => (
                      <div
                        key={item.title}
                        className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h2 className="text-2xl">{item.title}</h2>
                          <span className="text-sm uppercase tracking-[0.16em] text-[#f2c27a]">
                            {item.period}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-stone-300/80">
                          {item.summary}
                        </p>
                        <div className="mt-4 space-y-2">
                          {item.points.map((point) => (
                            <p key={point} className="flex gap-3 text-sm leading-7 text-stone-400">
                              <span className="mt-[0.72rem] h-1.5 w-1.5 rounded-full bg-[#f2c27a]" />
                              <span>{point}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="caption">Flagship projects</p>
                  <div className="space-y-6">
                    {selectedProjects.map((project) => (
                      <div
                        key={project.slug}
                        className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="space-y-1">
                            <h2 className="text-2xl">{project.title}</h2>
                            <p className="text-xs uppercase tracking-[0.16em] text-[#f2c27a]">
                              {project.category} • {project.timeline}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <Link
                              href={`/projects/${project.slug}`}
                              className="inline-flex items-center gap-2 uppercase tracking-[0.14em] text-stone-300/78 transition hover:text-white"
                            >
                              Case study
                              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                            </Link>
                            {project.liveUrl ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 uppercase tracking-[0.14em] text-[#f2c27a] transition hover:text-white"
                              >
                                Live site
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
                              </a>
                            ) : (
                              <span className="inline-flex items-center gap-2 text-sm text-stone-500">
                                <FontAwesomeIcon icon={faGlobe} className="text-sm" />
                                {project.status}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-stone-300/80">
                          {project.summary}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-stone-400">
                          <span className="text-stone-200">Role:</span> {project.role}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-stone-500">
                          {project.stack.slice(0, 6).join(' • ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="caption">Selected competitions</p>
                    <Link
                      href="/competitions"
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-stone-300/78 transition hover:text-white"
                    >
                      Full competition archive
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {selectedRecognition.map((item) => (
                      <div
                        key={`${item.date}-${item.title}`}
                        className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="space-y-1">
                            <h3 className="text-xl">{item.title}</h3>
                            <p className="text-sm leading-7 text-stone-300/80">{item.result}</p>
                          </div>
                          <span className="text-xs uppercase tracking-[0.16em] text-[#f2c27a]">
                            {item.date}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-stone-500">{item.details}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-stone-400">
                    This CV shows selected competitions and milestones. The full competition record includes{' '}
                    {achievementRecords.length} documented entries across robotics, scientific
                    innovation, and international representation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
