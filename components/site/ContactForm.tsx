'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type ContactFormProps = {
  initialSubject?: string;
};

type SubmitState = 'idle' | 'success' | 'error';

export function ContactForm({ initialSubject = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject,
    message: '',
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitState('success');
      setFormData({
        name: '',
        email: '',
        subject: initialSubject,
        message: '',
      });
    } catch {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="surface-strong p-6 sm:p-8">
      <div className="space-y-2">
        <p className="caption">Send a message</p>
        <h2 className="text-3xl sm:text-4xl">Start the conversation clearly.</h2>
        <p className="max-w-2xl text-sm leading-7 text-stone-300/75 sm:text-base">
          Share the role, scope, or kind of project you have in mind. I built the
          form to be simple so the next step is fast.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 sm:col-span-1">
          <span className="caption">Name</span>
          <input
            required
            autoComplete="name"
            className="w-full rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3.5 text-stone-100 placeholder:text-stone-500 focus:border-[#d6a95f]/60 focus:outline-none"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label className="space-y-2 sm:col-span-1">
          <span className="caption">Email</span>
          <input
            required
            autoComplete="email"
            className="w-full rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3.5 text-stone-100 placeholder:text-stone-500 focus:border-[#d6a95f]/60 focus:outline-none"
            name="email"
            placeholder="you@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="caption">Topic</span>
          <input
            required
            className="w-full rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3.5 text-stone-100 placeholder:text-stone-500 focus:border-[#d6a95f]/60 focus:outline-none"
            name="subject"
            placeholder="Full-time role, website build, workshop, or project walkthrough"
            value={formData.subject}
            onChange={handleChange}
          />
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="caption">Message</span>
          <textarea
            required
            className="min-h-[180px] w-full rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3.5 text-stone-100 placeholder:text-stone-500 focus:border-[#d6a95f]/60 focus:outline-none"
            name="message"
            placeholder="Tell me what you want to build, hire for, or improve."
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </div>

      {submitState === 'success' ? (
        <p className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Message received. I will get back to you soon.
        </p>
      ) : null}

      {submitState === 'error' ? (
        <p className="mt-5 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          Something went wrong. You can still reach me directly by email or WhatsApp.
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm leading-7 text-stone-400">
          Prefer direct contact? Email and WhatsApp links are on the same page.
        </p>
        <button
          type="submit"
          className="button-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending' : 'Send message'}
          <FontAwesomeIcon icon={faArrowRight} className="text-base" />
        </button>
      </div>
    </form>
  );
}
