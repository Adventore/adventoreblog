import { Client, Content, isFilled } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";

export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle("navigation");

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <PrismicLink href="/" className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white">
          {/* {navigation.data.brand_name || "Adventore"} */}
          { "Adventore"}
        </PrismicLink>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          {navigation && navigation.data && isFilled.group(navigation.data.menu_items) &&
            navigation.data.menu_items.map((item, index) => (
              <PrismicLink
                key={item.label}
                field={item.link}
                className={`font-medium ${
                  index === 0
                    ? "text-blue-500 focus:outline-none"
                    : "text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                }`}
                aria-current={index === 0 ? "page" : undefined}
              >
                {item.label}
              </PrismicLink>
            ))}
        </div>
      </nav>
    </header>
  );
};