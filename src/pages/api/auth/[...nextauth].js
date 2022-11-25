import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: "132963126300-j180g7mmdh0a53v1rp89er641ohfqp7f.apps.googleusercontent.com",
        clientSecret: "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",
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        }
      })
    ],
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