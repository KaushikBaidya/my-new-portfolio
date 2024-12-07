import { useProgress } from "@react-three/drei";
import React from "react";

const LoadingComponent = () => {
	const { progress } = useProgress();
	return (
		<div className="h-screen w-screen flex items-center justify-center bg-slate-950">
			<div className="text-3xl new-font">
				<div className="loader"></div>
			</div>
		</div>
	);
};

export default LoadingComponent;
