"use client";

import React, { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent";

export default function ClientWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasHydrated, setHasHydrated] = useState(false);

	useEffect(() => {
		setHasHydrated(true); // Ensures this runs only on the client
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	if (!hasHydrated || isLoading) {
		return <LoadingComponent />;
	}

	return <>{children}</>;
}
