"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export type TextAudioProps = {
  text: string;
  audioFile: string;
  className?: string;
};

// Text that plays sound when clicked
const TextAudio = ({ text, audioFile, className }: TextAudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(`/sounds/${audioFile}`);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
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
    <span
      onClick={handlePlay}
      className={cn("cursor-pointer", className)}
      aria-label={`Play pronunciation: ${text}`}
      role="button"
    >
      {text}
    </span>
  );
};

export default TextAudio;
