import React from "react";

const Button = ({ btnText, icon: Icon }) => {
	return (
		<div className="hover:before:bg-violet-500 relative h-full w-fit overflow-hidden border border-violet-500 bg-white px-3 py-2 rounded text-violet-500 shadow transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-violet-500 before:transition-all before:duration-500 hover:text-white hover:shadow-violet-500 hover:before:left-0 hover:before:w-full text-lg cursor-pointer text-center flex items-center justify-center gap-2">
			<span className="relative z-10">{btnText}</span>
			{Icon && <Icon className="relative z-10 text-xl" />}
		</div>
	);
};

export default Button;
