import Image from "next/image";
import CartoonNerd from "@/assets/cartoon-nerd.jpg";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { PiWhatsappLogoThin } from "react-icons/pi";
import Link from "next/link";

const AboutMyself = () => {
  return (
    <main id="about">
      <div className="lg:w-10/12 2xl:max-w-screen-xl mx-auto px-5 py-20">
        <section className="border-2 border-blue-300 rounded-lg w-full grid grid-cols-1 lg:grid-cols-2 gap-x-5 p-5 bg-gray-900">
          <div className="">
            <Image
              src={CartoonNerd}
              layout="auto"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="">
            <p className="text-blue-500 font-medium text-lg">Who am I</p>
            <h2 className="text-5xl font-semibold my-4">Kaushik Baidya</h2>
            <h2 className="text-3xl font-semibold">
              Fronent Developer and UI designer
            </h2>
            <p className="text-lg mt-5">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations.
            </p>
            <div className="text-blue-500 flex gap-2 my-3">
              <Link
                href="https://www.facebook.com/kaushik.123bd/"
                target="_blank"
              >
                <div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-blue-400 rounded-lg">
                  <CiFacebook size={40} />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kaushik-baidya-696247157/"
                target="_blank"
              >
                <div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-blue-400 rounded-lg">
                  <CiLinkedin size={40} />
                </div>
              </Link>
              <Link href="https://github.com/KaushikBaidya" target="_blank">
                <div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-blue-400 rounded-lg">
                  <FaGithubSquare size={40} />
                </div>
              </Link>
              <Link href={`tel:01624767207`}>
                <div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-blue-400 rounded-lg">
                  <PiWhatsappLogoThin size={40} />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutMyself;
