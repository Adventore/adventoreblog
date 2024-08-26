// ./src/slices/Hero/index.tsx

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicText } from "@prismicio/react";
import { RichText } from "@/components/RichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Full-width Background Image */}
      <PrismicNextImage
        field={slice.primary.image}
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <PrismicText field={slice.primary.title} />
        </h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          <RichText field={slice.primary.description} />
        </p>
      </div>

      {/* Overlay Gradient (optional) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-transparent"></div>
    </section>
  );
};

export default Hero;

// // ./src/slices/Hero/index.tsx

// import { Content } from "@prismicio/client";
// import { SliceComponentProps, PrismicText } from "@prismicio/react";
// import { RichText } from "@/components/RichText";
// import { PrismicNextImage } from "@prismicio/next";

// /**
//  * Props for `Hero`.
//  */
// export type HeroProps = SliceComponentProps<Content.HeroSlice>;

// /**
//  * Component for "Hero" Slices.
//  */
// const Hero = ({ slice }: HeroProps): JSX.Element => {
//   return (
//     <section
//       className="flex flex-col gap-4 max-w-3xl w-full"
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//     >
//       <PrismicNextImage
//         field={slice.primary.image}
//         sizes="100vw"
//         className="w-full max-w-[100px] max-h-full rounded-md object-cover"
//       />
//       <div className="flex flex-col gap-2">
//         <h1 className="font-bold text-4xl">
//           <PrismicText field={slice.primary.title} />
//         </h1>
//         <RichText field={slice.primary.description} />
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { Content } from "@prismicio/client";
// import { SliceComponentProps } from "@prismicio/react";

// /**
//  * Props for `Hero`.
//  */
// export type HeroProps = SliceComponentProps<Content.HeroSlice>;

// /**
//  * Component for "Hero" Slices.
//  */
// const Hero = ({ slice }: HeroProps): JSX.Element => {
//   return (
//     <section
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//     >
//       Placeholder component for hero (variation: {slice.variation}) Slices
//     </section>
//   );
// };

// export default Hero;
