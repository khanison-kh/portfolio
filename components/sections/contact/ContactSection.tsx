import SectionTitle from "@/components/layout/SectionTitle";
import LinkButton from "@/components/ui/LinkButton";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub, IoMdMail } from "react-icons/io";

const Contact = () => {
  const email = "khanison.kh@hotmail.com";
  return (
    <>
      <SectionTitle title="Contact" />
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <span className="mb-3 block text-xl font-medium">
            Me contacter par mail :
          </span>
          <span className="text-accent-fg gap-1">
            <a
              href={`mailto:${email}`}
              className="bg-accent-solid hover:bg-accent-solid/80 flex items-center rounded-lg px-3 py-2 font-medium transition-all duration-200"
            >
              <IoMdMail size={24} className="mr-1 inline-block" />
              {email}
            </a>
          </span>
        </div>
        <div className="flex flex-row gap-3">
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
        </div>
      </div>
    </>
  );
};

export default Contact;
