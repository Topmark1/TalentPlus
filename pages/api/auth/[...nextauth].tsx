import NextAuth from "next-auth"
import GoogleProviders from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers:[
    GoogleProviders({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],
 //secret:'XqaJhPBEFhqhknIK8E3+8vZ3IqYdU/gUIF3shPWzhPk=',
}

export default NextAuth(authOptions);

