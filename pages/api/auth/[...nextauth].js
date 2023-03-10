import NextAuth from "next-auth"
import FacebookProviders from "next-auth/providers/facebook"

export const authOptions = {
  // Configure one or more authentication providers
  providers:[
    FacebookProviders({
      clientId: '698604065328887', //process.env.FACEBOOK_CLIENT_ID,
      clientSecret: 'a5bf13ddcdd3baf38f5766709b465686', //process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
 secret:'XqaJhPBEFhqhknIK8E3+8vZ3IqYdU/gUIF3shPWzhPk=',
}

export default NextAuth(authOptions);

