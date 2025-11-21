import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";
import { providers } from "./auth-providers";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: providers,
  trustHost: true,
  session: {
    strategy: "jwt",
  },
});
