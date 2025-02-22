"use client"

import { redirect, usePathname } from "next/navigation";

const CASE_INSENSITIVE_ROUTES = new Set([
	"/eov/skillsim.html",
]);

export default function NotFoundPage() {
	const pathname = usePathname();
	const lowerPath = pathname.toLowerCase();
	if (CASE_INSENSITIVE_ROUTES.has(lowerPath)) {
		redirect(lowerPath);
		return null;
	}

	return <h1>404 - Page Not Found</h1>
}