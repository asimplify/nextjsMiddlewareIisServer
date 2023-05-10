import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
    const response = NextResponse.redirect(new URL("/", request.url));
    return response;

}

export const config = {
    matcher: '/portal',
};
