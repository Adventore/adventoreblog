// ./src/components/RichText.tsx
import { RichTextField } from '@prismicio/client';
import { JSXMapSerializer, PrismicRichText, PrismicLink } from '@prismicio/react';

export const richTextComponents: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5">{children}</code>;
    }
  },
  heading1: ({ children }) => (
    <h1 className="font-bold text-4xl mb-4 mt-6">{children}</h1>
  ),
  heading2: ({ children }) => <h2 className="font-bold text-2xl mb-3 mt-5">{children}</h2>,
  heading3: ({ children }) => <h3 className="font-bold text-xl mb-2 mt-4">{children}</h3>,
  paragraph: ({ children }) => <p className="mb-4">{children}</p>,
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="font-bold underline text-blue-600 hover:text-blue-800">{children}</PrismicLink>
  ),
  preformatted: ({ node }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto mb-4">
      <code>{node.text}</code>
    </pre>
  ),
};

interface RichTextProps {
  field: RichTextField;
}

export const RichText = ({ field }: RichTextProps) => {
  return (
    <div className="max-w-full overflow-hidden">
      <PrismicRichText field={field} components={richTextComponents} />
    </div>
  );
};