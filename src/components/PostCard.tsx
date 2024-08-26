import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { RichText } from "./RichText";
import { Content } from "@prismicio/client";

export const PostCard = ({
  post,
}: {
  post: Content.BlogPostDocument;
}): JSX.Element => {
  const { data } = post;

  return (
    <PrismicLink document={post} className="group flex h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]">
      <div className="flex-shrink-0 w-1/3 aspect-w-16 aspect-h-9">
        <PrismicNextImage
          field={data.featured_image}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow ml-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            <PrismicText field={data.title} />
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            <RichText field={data.description} />
          </p>
        </div>
        <div className="mt-auto flex items-center gap-x-3">
          <div>
            <h5 className="text-sm text-gray-800 dark:text-gray-200">Publication Date</h5>
            <p className="text-xs text-gray-500">
              {new Date(data?.publication_date || "").toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </PrismicLink>
  );
};