import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/site/ContactForm';
import { PageIntro } from '@/components/site/PageIntro';
import { Reveal } from '@/components/site/Reveal';
import {
  contactOptions,
  siteConfig,
  socialLinks,
} from '@/lib/portfolio-data';

type ContactPageProps = {
  searchParams?: {
    topic?: string | string[];
  };
};

export const metadata: Metadata = {
  title: 'Contact',
  description:
    `Contact ${siteConfig.fullName} for full-time roles, premium website builds, technical prototypes, or workshops.`,
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const topicValue = searchParams?.topic;
  const initialTopic = Array.isArray(topicValue) ? topicValue[0] : topicValue ?? '';

  return (
    <>
      <section className="shell section-space pt-32">
        <PageIntro
          eyebrow="Contact"
          title="If the opportunity is strong, I prefer to talk directly and clearly."
          description="This page is built for quick action: full-time roles, premium portfolio builds, technical prototypes, workshops, and private project walkthroughs."
        />
      </section>

      <section className="shell pb-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactOptions.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05}>
                <Link
                  href={item.href}
                  className="surface block p-6 transition hover:border-[#d6a95f]/30"
                >
                  <p className="caption">Option</p>
                  <h2 className="mt-3 text-2xl">{item.label}</h2>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {item.description}
                  </p>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <div className="surface p-6">
                <p className="caption">Direct contact</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-stone-300/78">
                  <a href={`mailto:${siteConfig.email}`} className="block transition hover:text-white">
                    {siteConfig.email}
                  </a>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="block transition hover:text-white">
                    {siteConfig.phone}
                  </a>
                  <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="block transition hover:text-white">
                    WhatsApp
                  </a>
                  <p>{siteConfig.location}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs uppercase tracking-[0.18em] text-stone-300/78 transition hover:border-white/20 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <ContactForm initialSubject={initialTopic} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
