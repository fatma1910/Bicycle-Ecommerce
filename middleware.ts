
import { NextResponse } from "next/server";
import { auth, clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const isHomeRoute= createRouteMatcher(['/'])

export default clerkMiddleware((auth,req)=>{
    const userId=auth();
    if(userId&& isHomeRoute(req)){
        return NextResponse.rewrite(new URL("/", req.url));
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};