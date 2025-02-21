import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export function middleware(request: NextRequest) {
	return NextResponse.rewrite(new URL(request.nextUrl.pathname.toLocaleLowerCase(), request.url));
}