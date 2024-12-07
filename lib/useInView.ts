import { useEffect, useState } from "react";

const useInView = (id: string, options: IntersectionObserverInit) => {
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsInView(true);
				observer.disconnect(); // Stop observing once in view
			}
		}, options);

		const element = document.getElementById(id);
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element); // Cleanup on unmount
		};
	}, [id, options]);

	return isInView;
};

export default useInView;
