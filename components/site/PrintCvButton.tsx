'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPrint } from '@fortawesome/free-solid-svg-icons';

export function PrintCvButton() {
  return (
    <div className="flex flex-wrap gap-3 print-hidden">
      <a href="/api/cv-pdf" className="button-primary">
        Download PDF
        <FontAwesomeIcon icon={faDownload} className="text-base" />
      </a>
      <button
        type="button"
        onClick={() => window.print()}
        className="button-secondary"
      >
        Print CV
        <FontAwesomeIcon icon={faPrint} className="text-base" />
      </button>
    </div>
  );
}
