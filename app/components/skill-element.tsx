import React from "react";
import { type skillsDataType } from "@/lib/types";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const SkillElement = ({ name, imageUrl }: skillsDataType) => {
	return (
		<div>
			<Tilt>
				<div className="">
					<Image
						className="w-24 mx-auto"
						width={100}
						height={100}
						src={imageUrl}
						alt={name}
					/>
					<p className="my-4">{name}</p>
				</div>
			</Tilt>
		</div>
	);
};

export default SkillElement;
