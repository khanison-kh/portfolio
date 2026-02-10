import { ChevronsDown } from "lucide-react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import LinkButton from "../../ui/LinkButton";
import TextAudio from "./components/TextAudio";

const Hero = () => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-8 md:gap-12 lg:max-w-6xl lg:flex-row lg:gap-16">
        {/* Intro */}
        <div className="w-full max-w-2xl space-y-8 md:space-y-10 lg:max-w-4xl">
          <h1 className="text-3xl/relaxed font-medium sm:text-4xl/relaxed">
            <span className="block">Bonjour ! Je suis </span>
            <TextAudio
              text="KHEEREESANTIKUL Khanison"
              audioFile="name.m4a"
              className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl/tight font-bold text-transparent transition-all duration-200 hover:from-blue-500 hover:to-blue-700 sm:text-5xl/tight"
            ></TextAudio>

            <span className="block">Développeur full stack junior</span>
          </h1>

          <p className="text-lg sm:text-xl">
            Mon objectif est de créer des applications utiles et concrètes,
            capables d&apos;apporter une réelle valeur aux utilisateurs. Je
            cherche à progresser en construisant des solutions simples,
            efficaces et bien structurées.
          </p>

          <div className="flex flex-row space-x-5">
            <LinkButton
              href="https://www.linkedin.com/in/khanisonkh/"
              icon={<FaLinkedinIn size={24} color="white" />}
              className="bg-[#0a66c2]"
            />
            <LinkButton
              href="https://github.com/khanison-kh"
              icon={<IoLogoGithub size={24} color="white" />}
              className="bg-[#1f2429]"
            />
            <LinkButton
              href="mailto:khanison.kh@hotmail.com"
              icon={<IoMdMail size={24} color="white" />}
              className="bg-[#c71610]"
            />
          </div>
        </div>

        {/* Profile Image */}
        <Image
          src="/images/profile.webp"
          alt="Photo de profil"
          width={300}
          height={300}
          sizes="(max-width: 640px) 12rem, (max-width: 1024px) 14rem, (max-width: 1280px) 15rem, 18rem"
          className="size-56 max-w-full rounded-full object-cover object-center lg:size-60 xl:size-72"
        />
      </div>

      {/* Scroll down indicator */}
      <div className="mt-auto flex justify-center pb-4">
        <a
          href="#about"
          className="group flex cursor-pointer flex-col items-center gap-2 transition-colors hover:text-blue-600"
          aria-label="Scroll to About section"
        >
          <span className="text-md">Explorer</span>
          <ChevronsDown
            size={32}
            className="animate-bounce group-hover:text-blue-600"
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
