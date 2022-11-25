import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: "169778022413-h5bbd12a55ahd23t5p63vngj5jf40f54.apps.googleusercontent.com",
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