'use client';

import { useEffect, useRef } from 'react';

export type TextAudioProps = {
  text: string;
  audioFile: string;
  buttonClasses?: string;
  spanClasses?: string;
};

// Text that plays sound when clicked
const TextAudio = ({
  text,
  audioFile,
  buttonClasses,
  spanClasses,
}: TextAudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(`/sounds/${audioFile}`);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, [audioFile]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <button
      onClick={handlePlay}
      className={buttonClasses}
      type="button"
      aria-label={`Play pronunciation: ${text}`}
    >
      <span className={spanClasses}>{text}</span>
    </button>
  );
};

export default TextAudio;
