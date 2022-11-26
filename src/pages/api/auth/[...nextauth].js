import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET_KEY,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        }
      })
    ],
    secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
    jwt: {
      encryption: true
    },
    
    //Callback here
     callbacks: {
      async jwt({ token, account, user }) {
        const isSignIn = user ? true : false
       // console.log(account)
        if (isSignIn) {
          token.username = user.name
          token.email = user.email
        }
        return token
      },
      async session({ session, token }) {
        return { ...session, user: token }
      },
       }
       
      
  });