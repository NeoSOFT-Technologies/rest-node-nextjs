import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Sign In',

      credentials: {
        userName: {
          label: 'username',
          type: 'text',
          placeholder: 'username@123',
        },
        password: {
          label: 'Password',
          type: 'password'
        },
      },
      async authorize(credentials, req) {
        const payload: any = {
          userName: credentials?.userName,
          password: credentials?.password,
        };

        const res = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-US',
          },
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: "secret key",
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.user = user
      }
      return token
    },
    async session({ session, token }) {
      if (token.user) {
        session.userData = token.user;
      }
      return session;
    }
  },
  pages: {
    signIn: '/',
  },
});