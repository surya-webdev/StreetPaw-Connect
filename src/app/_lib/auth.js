import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest } from "./data-service";

const authConfig = {
  //
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callback: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      console.log(user);
      try {
        await createGuest({
          email: user.email,
          name: user.name,
          avatar: user.image,
        });

        return true;
        //
      } catch {
        return false;
      }
    },
  },

  //
  pages: {
    signIn: "/login",
  },
};

//

export const { handlers, signIn, session, signOut, auth } =
  NextAuth(authConfig);
