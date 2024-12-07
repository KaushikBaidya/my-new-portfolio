"use client";

import React, { useState } from "react";
import LoadingComponent from "./LoadingComponent";

export default function ClientWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		return <LoadingComponent />;
	}

	return <>{children}</>;
}
