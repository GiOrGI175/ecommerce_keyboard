import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Herosection`.
 */
export type HerosectionProps = SliceComponentProps<Content.HerosectionSlice>;

/**
 * Component for "Herosection" Slices.
 */
const Herosection: FC<HerosectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
      <button>{slice.primary.buy_button_text}</button>
    </section>
  );
};

export default Herosection;
