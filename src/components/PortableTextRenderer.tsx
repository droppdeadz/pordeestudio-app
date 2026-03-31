import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlFor } from '../lib/sanity';

interface Props {
  value: unknown[];
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-xl font-light tracking-wider mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-light tracking-wider mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-neutral-700 pl-4 my-6 text-neutral-300 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-neutral-300 leading-relaxed mb-4">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-200 underline underline-offset-2 hover:text-white transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(1200).auto('format').url()}
            alt={value.alt || ''}
            className="w-full rounded-sm"
            loading="lazy"
          />
        </figure>
      );
    },
    youtube: ({ value }) => {
      if (!value?.url) return null;
      const match = value.url.match(/(?:v=|youtu\.be\/)([^&\s]+)/);
      const videoId = match?.[1];
      if (!videoId) return null;
      return (
        <div className="relative w-full aspect-video bg-neutral-950 rounded-sm overflow-hidden my-8">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: Props) {
  return <PortableText value={value} components={components} />;
}
