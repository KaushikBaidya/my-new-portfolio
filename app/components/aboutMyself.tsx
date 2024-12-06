import Image from "next/image";
import CartoonNerd from "@/assets/cartoon-nerd.webp";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { PiWhatsappLogoThin } from "react-icons/pi";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const AboutMyself = () => {
	return (
		<main id="about">
			<div className="lg:w-10/12 2xl:max-w-6xl mx-auto sm:px-4 lg:px-0 py-20">
				<section className="border border-secondary rounded-lg w-full grid grid-cols-1 lg:grid-cols-2 gap-x-5 p-5 bg-transparent">
					<div className="">
						<Tilt>
							<Image
								src={CartoonNerd}
								width={500}
								height={100}
								alt="portfoilo"
								className="rounded-lg hover:border-secondary hover:border-2"
							/>
						</Tilt>
					</div>
					<div className="flex flex-col justify-center gap-2">
						<p className="text-primary font-medium text-lg">
							Who am I <span className="text-xl font-bold italic">?</span> 🤔
						</p>
						<h2 className="text-5xl font-semibold my-4">Kaushik Baidya</h2>
						<h2 className="text-3xl font-semibold">
							Fronent Developer and UI designer
						</h2>
						<p className="text-lg mt-5">
							I&apos;m a skilled software developer with experience in
							TypeScript and JavaScript, and expertise in frameworks like React,
							Node.js, and Three.js. I&apos;m a quick learner and collaborate
							closely with clients to create efficient, scalable, and
							user-friendly solutions that solve real-world problems. Let&apos;s
							work together to bring your ideas to life!
						</p>
						<div className="text-primary flex gap-2 my-3">
							<Tilt>
								<Link
									href="https://www.facebook.com/kaushik.123bd/"
									target="_blank"
								>
									<div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-secondary rounded-lg">
										<CiFacebook size={40} />
									</div>
								</Link>
							</Tilt>
							<Tilt>
								<Link
									href="https://www.linkedin.com/in/kaushik-baidya-696247157/"
									target="_blank"
								>
									<div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-secondary rounded-lg">
										<CiLinkedin size={40} />
									</div>
								</Link>
							</Tilt>
							<Tilt>
								<Link href="https://github.com/KaushikBaidya" target="_blank">
									<div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-secondary rounded-lg">
										<FaGithubSquare size={40} />
									</div>
								</Link>
							</Tilt>
							<Tilt>
								<Link href={`tel:+8801624767207`}>
									<div className="h-16 w-16 bg-gray-950 flex items-center justify-center border-2 border-gray-700 hover:border-secondary rounded-lg">
										<PiWhatsappLogoThin size={40} />
									</div>
								</Link>
							</Tilt>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default AboutMyself;
