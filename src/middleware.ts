// import { getToken } from "next-auth/jwt";
// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// import { Role } from "./nextauth.d";

// export async function middleware(request: NextRequest, ev: NextFetchEvent) {
//   const { pathname } = request.nextUrl;
//   const protectedRoutesUser = ["/dashboard"];
//   const protectedRoutesModerator = ["/dashboard","/moderator"];
//   const protectedRoutesAdmin = ["/dashboard","/admin"];
//   //const token = await getToken({req: request});
//   //console.log(token);
//   // const token = await getToken({req: request, secret: process.env.SECRET});
  



//   if(!token){
//     const url = new URL('/login', request.url);
//     url.searchParams.set('callbackUrl', encodeURI(request.url));
//     return NextResponse.redirect(url);
//   }
//   // switch (token.role){
//   //   case Role.user:
//   //     if(protectedRoutesUser.some((route) => pathname.startsWith(route))){
//   //       const url = new URL('/404', request.url);
//   //       return NextResponse.rewrite(url);
//   //     }
//   //     break;
//   //   case Role.moderator:
//   //     if(protectedRoutesModerator.some((route) => pathname.startsWith(route))){
//   //       const url = new URL('/404', request.url);
//   //       return NextResponse.rewrite(url);
//   //     }
//   //     break;
//   //   case Role.admin:
//   //     if(protectedRoutesAdmin.some((route) => pathname.startsWith(route))){
//   //       const url = new URL('/404', request.url);
//   //       return NextResponse.rewrite(url);
//   //     }
//   //     break;
//   //   default:
//   //     const url = new URL('/404', request.url);
//   //     return NextResponse.rewrite(url);
//   // }
//   return NextResponse.next();
// }




export {default} from "next-auth/middleware";

export const config ={
    matcher: ['/dashboard']
}