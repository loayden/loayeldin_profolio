'use client';

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  offset?: number;
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  offset = 24,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
