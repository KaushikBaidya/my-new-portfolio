"use client";

import React, { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent";

export default function ClientWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading delay
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000); // Adjust timing based on your requirements

		return () => clearTimeout(timer); // Cleanup
	}, []);

	if (isLoading) {
		return <LoadingComponent />;
	}

	return <>{children}</>;
}
