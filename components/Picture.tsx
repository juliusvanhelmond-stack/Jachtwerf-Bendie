import type { Img } from "@/content/site";

type Props = {
  img: Img;
  sizes: string;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
};

/** Responsive picture from the pre-generated webp widths (see scripts/process_media.py). */
export function Picture({ img, sizes, className, priority, style }: Props) {
  const [largest, ...rest] = img.widths;
  const srcSet = [`${img.src}.webp ${largest}w`, ...rest.map((w) => `${img.src}-${w}.webp ${w}w`)].join(", ");
  return (
    <img
      src={`${img.src}${rest.length ? `-${rest[0]}` : ""}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={img.alt}
      width={img.w}
      height={img.h}
      className={className}
      style={style}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      // eslint-disable-next-line react/no-unknown-property
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
