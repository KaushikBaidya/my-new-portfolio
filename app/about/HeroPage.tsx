import Image from "next/image";
import BgImage from "@/assets/logo.png";
import MainImage from "@/assets/cartoon-nerd.webp";
import { RiMenu5Line } from "react-icons/ri";

const HeroPage: React.FC = () => {
	return (
		<div className="relative w-full bg-gray-50 h-full flex flex-col">
			{/* Header */}
			<div className="w-full px-6">
				<div className="flex justify-between items-center py-6">
					<div className="flex justify-start">
						<Image
							className="h-12 w-auto lg:h-10"
							src={BgImage}
							width={200}
							height={200}
							alt="Logo"
						/>
					</div>
					<div className="flex justify-start text-primary">
						<RiMenu5Line size={30} />
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-grow flex flex-col justify-center items-center text-center px-4">
				<h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
					Welcome to NerdWorld!
				</h1>
				<p className="mt-4 text-gray-100 text-base lg:text-lg max-w-md">
					Discover amazing content and learn new things every day. We bring you
					closer to the world of creativity and knowledge.
				</p>
				<button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-500">
					Get Started
				</button>
			</div>

			{/* Illustration */}
			<div className="flex justify-center py-6">
				<Image
					className="rounded-lg shadow-md"
					src={MainImage}
					width={250}
					height={250}
					alt="Cartoon Nerd"
				/>
			</div>
		</div>
	);
};

export default HeroPage;
