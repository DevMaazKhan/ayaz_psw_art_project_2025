import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/util/auth";

export default async function proxy(request: NextRequest) {
  const user = await auth();

  console.log(user);

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin-login'],
};
