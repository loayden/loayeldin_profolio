import {
  achievementRecords,
  featuredProjects,
  professionalProfile,
  siteConfig,
  skillGroups,
  stats,
} from '@/lib/portfolio-data';
import {
  cvExperience,
  cvSelectedProjectSlugs,
  cvSelectedRecognitionKeys,
} from '@/lib/cv-data';

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const PAGE_MARGIN_X = 48;
const PAGE_TOP = 790;
const PAGE_BOTTOM = 52;
const CONTENT_WIDTH = PAGE_WIDTH - PAGE_MARGIN_X * 2;

type PdfFont = 'F1' | 'F2';

type PdfTextEntry = {
  text: string;
  x: number;
  y: number;
  size: number;
  font: PdfFont;
};

type PdfPage = {
  entries: PdfTextEntry[];
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

function sanitizePdfText(value: string) {
  return value
    .replace(/FRع/g, 'FR')
    .replace(/[•]/g, '-')
    .replace(/[–—]/g, '-')
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/[^\x20-\x7E]/g, '')
    .trim();
}

function escapePdfText(value: string) {
  return sanitizePdfText(value)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function wrapText(value: string, maxChars: number) {
  const source = sanitizePdfText(value);

  if (!source) {
    return [''];
  }

  const words = source.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  const pushLongWord = (word: string) => {
    let start = 0;
    while (start < word.length) {
      lines.push(word.slice(start, start + maxChars));
      start += maxChars;
    }
  };

  for (const word of words) {
    if (word.length > maxChars) {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = '';
      }
      pushLongWord(word);
      continue;
    }

    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length <= maxChars) {
      currentLine = nextLine;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    currentLine = word;
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.length ? lines : [''];
}

function rgbCommand() {
  return '0 0 0 rg';
}

function renderPageStream(page: PdfPage, pageNumber: number, pageCount: number) {
  const commands = page.entries.map((entry) => {
    const text = escapePdfText(entry.text);
    return `BT /${entry.font} ${entry.size} Tf ${rgbCommand()} 1 0 0 1 ${entry.x} ${entry.y} Tm (${text}) Tj ET`;
  });

  const footer = sanitizePdfText(`Page ${pageNumber} of ${pageCount}`);
  commands.push(
    `BT /F1 9 Tf ${rgbCommand()} 1 0 0 1 ${PAGE_MARGIN_X} 28 Tm (${escapePdfText(
      footer,
    )}) Tj ET`,
  );

  return commands.join('\n');
}

export function buildCvPdf() {
  const pages: PdfPage[] = [{ entries: [] }];
  let currentPageIndex = 0;
  let currentY = PAGE_TOP;

  const startNewPage = () => {
    pages.push({ entries: [] });
    currentPageIndex += 1;
    currentY = PAGE_TOP;
  };

  const ensureSpace = (height: number) => {
    if (currentY - height < PAGE_BOTTOM) {
      startNewPage();
    }
  };

  const addParagraph = ({
    text,
    size = 11,
    bold = false,
    indent = 0,
    before = 0,
    after = 6,
    leading = size * 1.45,
  }: {
    text: string;
    size?: number;
    bold?: boolean;
    indent?: number;
    before?: number;
    after?: number;
    leading?: number;
  }) => {
    const maxChars = Math.max(
      18,
      Math.floor((CONTENT_WIDTH - indent) / Math.max(size * 0.54, 5)),
    );
    const lines = wrapText(text, maxChars);
    const blockHeight = before + lines.length * leading + after;

    ensureSpace(blockHeight);
    currentY -= before;

    for (const line of lines) {
      pages[currentPageIndex].entries.push({
        text: line,
        x: PAGE_MARGIN_X + indent,
        y: currentY,
        size,
        font: bold ? 'F2' : 'F1',
      });
      currentY -= leading;
    }

    currentY -= after;
  };

  addParagraph({
    text: siteConfig.fullName,
    size: 22,
    bold: true,
    after: 4,
    leading: 26,
  });
  addParagraph({
    text: 'Full-Stack Developer | Robotics Engineer | Technical Educator',
    size: 12,
    bold: true,
    after: 10,
  });
  addParagraph({
    text: `${siteConfig.location} | ${siteConfig.email} | ${siteConfig.phone}`,
    size: 10,
    after: 2,
  });
  addParagraph({
    text: `${siteConfig.githubHref} | ${siteConfig.linkedinHref} | ${siteConfig.instagramHref}`,
    size: 10,
    after: 14,
  });

  addParagraph({
    text: 'PROFESSIONAL SUMMARY',
    size: 12,
    bold: true,
    after: 6,
  });
  addParagraph({
    text: professionalProfile.summary,
    size: 11,
    after: 12,
  });

  addParagraph({
    text: 'CAREER HIGHLIGHTS',
    size: 12,
    bold: true,
    after: 6,
  });
  for (const item of stats) {
    addParagraph({
      text: `${item.value} ${item.label}: ${item.note}`,
      size: 10,
      after: 2,
    });
  }
  currentY -= 8;

  addParagraph({
    text: 'SELECTED EXPERIENCE',
    size: 12,
    bold: true,
    after: 8,
  });
  for (const item of cvExperience) {
    addParagraph({
      text: `${item.title} (${item.period})`,
      size: 11,
      bold: true,
      after: 4,
    });
    addParagraph({
      text: item.summary,
      size: 10,
      after: 4,
    });
    for (const point of item.points) {
      addParagraph({
        text: `- ${point}`,
        size: 10,
        indent: 14,
        after: 2,
      });
    }
    currentY -= 6;
  }

  addParagraph({
    text: 'CORE STACK',
    size: 12,
    bold: true,
    after: 8,
  });
  for (const group of skillGroups) {
    addParagraph({
      text: `${group.title}: ${group.tools.join(', ')}`,
      size: 10,
      after: 3,
    });
  }
  currentY -= 8;

  addParagraph({
    text: 'FLAGSHIP PROJECTS',
    size: 12,
    bold: true,
    after: 8,
  });
  for (const project of selectedProjects) {
    addParagraph({
      text: `${project.title} - ${project.category}`,
      size: 11,
      bold: true,
      after: 4,
    });
    addParagraph({
      text: `${project.summary} Role: ${project.role}.`,
      size: 10,
      after: 2,
    });
    addParagraph({
      text: `Stack: ${project.stack.slice(0, 6).join(', ')}`,
      size: 10,
      after: 2,
    });
    addParagraph({
      text: project.liveUrl ? `Live: ${project.liveUrl}` : `Status: ${project.status}`,
      size: 10,
      after: 6,
    });
  }

  addParagraph({
    text: 'SELECTED RECOGNITION',
    size: 12,
    bold: true,
    after: 8,
  });
  for (const item of selectedRecognition) {
    addParagraph({
      text: `${item.title} (${item.date})`,
      size: 11,
      bold: true,
      after: 3,
    });
    addParagraph({
      text: `${item.result}. ${item.details}`,
      size: 10,
      after: 4,
    });
  }

  addParagraph({
    text: `Full recognition archive: ${achievementRecords.length} documented entries across robotics, scientific innovation, and international representation.`,
    size: 10,
    after: 0,
  });

  const streams = pages.map((page, index) =>
    renderPageStream(page, index + 1, pages.length),
  );

  const totalObjects = 4 + pages.length * 2;
  const objects = new Map<number, string>();

  objects.set(1, '<< /Type /Catalog /Pages 2 0 R >>');
  objects.set(
    2,
    `<< /Type /Pages /Kids [${pages
      .map((_, index) => `${5 + index * 2} 0 R`)
      .join(' ')}] /Count ${pages.length} >>`,
  );
  objects.set(3, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  objects.set(4, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');

  pages.forEach((_, index) => {
    const pageObjectNumber = 5 + index * 2;
    const contentObjectNumber = pageObjectNumber + 1;
    const stream = streams[index];
    const streamLength = Buffer.byteLength(stream, 'utf8');

    objects.set(
      pageObjectNumber,
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObjectNumber} 0 R >>`,
    );
    objects.set(
      contentObjectNumber,
      `<< /Length ${streamLength} >>\nstream\n${stream}\nendstream`,
    );
  });

  let pdf = '%PDF-1.4\n';
  const offsets: number[] = [0];

  for (let objectNumber = 1; objectNumber <= totalObjects; objectNumber += 1) {
    offsets[objectNumber] = Buffer.byteLength(pdf, 'utf8');
    pdf += `${objectNumber} 0 obj\n${objects.get(objectNumber)}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf, 'utf8');

  pdf += `xref\n0 ${totalObjects + 1}\n`;
  pdf += '0000000000 65535 f \n';

  for (let objectNumber = 1; objectNumber <= totalObjects; objectNumber += 1) {
    pdf += `${String(offsets[objectNumber]).padStart(10, '0')} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${totalObjects + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return Buffer.from(pdf, 'utf8');
}
