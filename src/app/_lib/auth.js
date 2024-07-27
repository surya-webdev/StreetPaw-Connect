import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callback: {
    authorized({ auth, request }) {
      // console.log(request);
      console.log(auth);
      return !!auth?.user;
    },

    async signIn({ user }) {
      const guest = user;
      await createGuest(user);
      console.log(guest);
      return true;
    },
  },
};

//

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
