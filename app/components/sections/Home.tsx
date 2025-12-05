import { ChevronsDown, Mail } from 'lucide-react';
import Image from 'next/image';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Section from '../layout/Section';
import TextAudio from '../TextAudio';
import LinkComponent from '../ui/LinkComponent';

const Home = () => {
  return (
    <Section id="home" variant="home" className="flex flex-col ">
      <div className="flex py-16">
        {/* Intro */}
        <div className="max-w-3xl space-y-10">
          <h1 className="text-4xl/relaxed font-medium">
            <span className="block">Bonjour ! Je suis </span>
            <TextAudio
              text="KHEEREESANTIKUL Khanison"
              audioFile="name.m4a"
              buttonClasses="cursor-pointer group"
              spanClasses="text-5xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent transition-all duration-200 hover:scale-105 inline-block"
            />
            <span>,</span>
            <span className="block">développeur junior.</span>
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
          className="rounded-full"
        />
      </div>

      {/* Scroll down indicator */}
      <div className="mt-auto flex justify-center pb-4">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 hover:text-blue-600 transition-colors cursor-pointer group"
          aria-label="Scroll to About section"
        >
          <span className="text-md">Explorer</span>
          <ChevronsDown
            size={32}
            className="animate-bounce group-hover:text-blue-600"
          />
        </a>
      </div>
    </Section>
  );
};

export default Home;
