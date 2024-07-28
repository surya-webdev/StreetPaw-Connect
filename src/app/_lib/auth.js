import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, guestByEmail } from "./data-service";

const authConfig = {
  //
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  //

  callbacks: {
    authorized({ auth, request }) {
      console.log(auth);

      return !!auth?.user;
    },
    async signIn({ user }) {
      //
      try {
        const guest = await guestByEmail(user.email);

        if (!guest || guest.length === 0) {
          await createGuest({
            email: user.email,
            name: user.email,
            avatar: user.image,
          });

          return true;
        }
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
