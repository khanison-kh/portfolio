"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ImageSliderProps = {
  images: string[];
  alt?: string;
  className?: string;
};

const ImageSlider = ({ images, alt, className }: ImageSliderProps) => {
  const [index, setIndex] = useState(0);
  const imageCount = images.length;

  if (imageCount === 0) return null;

  const goPrev = () => setIndex((i) => (i - 1 + imageCount) % imageCount);
  const goNext = () => setIndex((i) => (i + 1) % imageCount);
  const goTo = (i: number) => setIndex(i);

  return (
    <div className={cn("relative", className)}>
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={images[index]}
          alt=""
          fill
          className="scale-105 object-cover opacity-70 blur-xl"
        />
        <Image
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-contain"
          priority={index === 0}
        />
      </div>

      {/* Buttons container */}
      {imageCount > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full bg-black/60 px-4 py-2 backdrop-blur-sm">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="cursor-pointer text-2xl leading-none font-bold transition"
          >
            <ArrowLeft className="text-neutral-400 transition hover:text-neutral-300" />
          </button>

          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                className={cn(
                  "h-2 w-2 cursor-pointer rounded-full transition",
                  i === index
                    ? "bg-white"
                    : "bg-neutral-400 hover:bg-neutral-300",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="cursor-pointer text-2xl leading-none font-bold transition"
          >
            <ArrowRight className="text-neutral-400 transition hover:text-neutral-300" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
