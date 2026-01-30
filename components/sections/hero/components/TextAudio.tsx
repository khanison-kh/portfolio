"use client";

import { cn } from "@/lib/utils";
import { Loader2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type TextAudioProps = {
  text: string;
  audioFile: string;
  className?: string;
  showIcon?: boolean;
};

// Clickable text that plays an audio file when clicked
const TextAudio = ({
  text,
  audioFile,
  className,
  showIcon = true,
}: TextAudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = new Audio(`/sounds/${audioFile}`);
    audioRef.current = audio;

    const handleCanPlayThrough = () => setIsLoading(false);
    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("error", handleError);
    audio.addEventListener("ended", handleEnded);

    // Preload the audio
    audio.load();

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, [audioFile]);

  const handlePlay = useCallback(() => {
    if (!audioRef.current || hasError || isLoading) return;

    // Reset and play
    audioRef.current.currentTime = 0;
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setHasError(true));
  }, [hasError, isLoading]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePlay();
    }
  };

  const renderSpeakerBadge = () => {
    if (!showIcon) return null;

    if (isLoading) {
      return (
        <span className="ml-2 inline-block align-middle text-sm">
          <Loader2 className="size-4 animate-spin" />
        </span>
      );
    }
    if (hasError) {
      return (
        <span className="ml-2 inline-block align-middle text-sm opacity-50">
          <VolumeX className="size-4" />
        </span>
      );
    }
    return (
      <span
        className={cn(
          "absolute -top-5 -right-10 -rotate-210 text-3xl text-[initial] transition-transform",
          isPlaying && "scale-125",
        )}
        aria-hidden="true"
      >
        🔊
      </span>
    );
  };

  return (
    <span
      onClick={handlePlay}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={cn(
        "relative inline-block w-fit cursor-pointer",
        "rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        hasError && "cursor-not-allowed",
        className,
      )}
      aria-label={`Click to hear pronunciation: ${text}`}
      role="button"
      title={hasError ? "Audio unavailable" : "Click to hear pronunciation"}
    >
      {text}
      {renderSpeakerBadge()}
    </span>
  );
};

export default TextAudio;
