'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

type ImageSliderProps = {
  images: string[];
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

const ImageSlider = ({
  images,
  alt = 'Project image',
  className,
}: ImageSliderProps) => {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const imageCount = safeImages.length;

  if (imageCount === 0) return null;

  const goPrev = () => setIndex((i) => (i - 1 + imageCount) % imageCount);
  const goNext = () => setIndex((i) => (i + 1) % imageCount);
  const goTo = (i: number) => setIndex(i);

  return (
    <div className={className}>
      <div
        style={{ position: 'relative', width: '100%', aspectRatio: '3 / 2' }}
      >
        <Image
          src={safeImages[index]}
          alt={`${alt} ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          style={{ objectFit: 'cover', borderRadius: 12 }}
          priority={index === 0}
        />
      </div>

      {imageCount > 1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 8,
          }}
        >
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="hover:cursor-pointer"
          >
            ‹
          </button>

          <div style={{ display: 'flex', gap: 6 }}>
            {safeImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  border: 'none',
                  opacity: i === index ? 1 : 0.4,
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="hover:cursor-pointer"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
