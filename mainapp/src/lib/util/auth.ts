import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { username } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [username()],
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 1,
    autoSignIn: false,
  },
  account: {
    fields: {
      accountId: "accountID",
      providerId: "providerID",
      userId: "userID",
    },
  },
  session: {
    fields: {
      userId: "userID",
    },
  },
});
