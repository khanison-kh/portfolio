import { ChevronsDown, Mail } from "lucide-react";
import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";
import TextAudio from "../TextAudio";
import LinkComponent from "../ui/LinkComponent";

const Home = () => {
  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        {/* Intro */}
        <div className="max-w-4xl space-y-5 text-center md:space-y-10">
          <h1 className="text-4xl/relaxed font-medium">
            <span className="block">Bonjour ! Je suis </span>
            <TextAudio
              text="KHEEREESANTIKUL Khanison,"
              audioFile="name.m4a"
              classNames="text-5xl/tight leading font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600"
            ></TextAudio>
            <span className="block">développeur full stack junior.</span>
          </h1>

          <p className="text-xl">
            Mon objectif est de créer des applications utiles et concrètes,
            capables d&apos;apporter une réelle valeur aux utilisateurs. Je
            cherche à progresser en construisant des solutions simples,
            efficaces et bien structurées.
          </p>

          <div className="space-x-5">
            <LinkComponent
              href="https://www.linkedin.com/in/khanisonkh/"
              icon={<SiLinkedin size={20} />}
            >
              LinkedIn
            </LinkComponent>
            <LinkComponent
              href="https://github.com/khanison-kh"
              icon={<SiGithub size={20} />}
            >
              GitHub
            </LinkComponent>
            <LinkComponent
              href="mailto:khanison.kh@hotmail.com"
              icon={<Mail size={20} />}
            >
              Email
            </LinkComponent>
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

export default Home;
