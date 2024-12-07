import Button from "@/components/ui/Button";
import { GrDocumentText } from "react-icons/gr";

const Hero = () => {
	return (
		<main
			id="home"
			className="lg:bg-[url('../assets/bakgrnd.png')] w-screen lg:h-dvh bg-center bg-no-repeat"
		>
			<div className="h-full w-full pt-28 md:pt-20 flex items-center justify-center">
				<div className="lg:w-10/12 2xl:max-w-6xl mx-auto sm:px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 content-center px-4">
					<div className="flex items-center">
						<div className="text-center md:text-left mb-5 text-2xl">
							<p className="font-bold my-2">Hi, my name is</p>
							<h1 className="text-5xl lg:text-[6rem] text-primary font-bold hero-font">
								Kaushik Baidya
							</h1>
							<h3 className="my-10 text-lg md:text-2xl">
								I am a Front-End designer and developer specializing in building
								(and occasionally designing) exceptional digital experiences.
								Currently, I am focused on building responsive full-stack web
								applications.
							</h3>
							<div className="w-full flex items-center justify-center md:items-start md:justify-start">
								<a
									href="https://drive.google.com/file/d/1adSIMWxKUhQ3ZAfkulBNtptiw56ECJ2l/view?usp=sharing"
									target="_blank"
								>
									{/* <Button btnText="Download CV" /> */}
									<Button btnText="Download Resume" icon={GrDocumentText} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
