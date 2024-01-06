import Image from "next/image";
import CartoonNerd from "@/assets/cartoon-nerd.jpg";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { PiWhatsappLogoThin } from "react-icons/pi";

const AboutMyself = () => {
  return (
    <main id="about">
      <div className="lg:w-10/12 2xl:max-w-screen-xl mx-auto px-5 py-20">
        <section className="border-2 border-blue-300 rounded-lg w-full flex flex-wrap gap-x-5 p-5 bg-gray-900">
          <div className="flex flex-col items-center">
            <Image
              src={CartoonNerd}
              width={450}
              height={100}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="lg:w-1/2">
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
              <div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-blue-400 rounded-lg">
                <CiFacebook size={40} />
              </div>
              <div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-blue-400 rounded-lg">
                <CiLinkedin size={40} />
              </div>
              <div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-blue-400 rounded-lg">
                <FaGithubSquare size={40} />
              </div>
              <div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-blue-400 rounded-lg">
                <PiWhatsappLogoThin size={40} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutMyself;
