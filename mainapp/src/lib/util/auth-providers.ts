import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./db";

const credentialsProvider = CredentialsProvider({
  id: "credentials",
  name: "Credentials",
  credentials: {
    username: {},
    password: {},
  },
  authorize: async (credentials) => {
    const user = await prisma.user.findFirst({
      where: { name: credentials.username as string },
    });

    return {
      id: `1`,
      name: "some",
      email: "some",
    };
  },
});
export const providers = [credentialsProvider];
