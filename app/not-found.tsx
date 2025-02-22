"use client"

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CASE_INSENSITIVE_ROUTES = new Set([
	"/eov/skillsim.html",
]);

export default function NotFoundPage() {
	const router = useRouter();
	const [isNotFound, setIsNotFound] = useState(false);
	const pathname = usePathname();
	useEffect(() => {
		const lowerPath = pathname.toLowerCase();
		const shouldRedirect = CASE_INSENSITIVE_ROUTES.has(lowerPath);
		if (shouldRedirect) {
			void router.replace(lowerPath);
		} else {
			setIsNotFound(true);
		}
	}, [pathname, router]);

	if (!isNotFound) {
		return null;
	}

	return <h1>404 - Page Not Found</h1>
}