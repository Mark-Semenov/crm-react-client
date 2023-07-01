import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
// import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },


  providers: [

    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID,
      clientSecret: process.env.KEYCLOAK_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),

    //TODO CredentialsProvider

  ],
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },


  callbacks: {

    async jwt({ token, account }) {

      if (account) {
        // Save the access token and refresh token in the JWT on the initial login
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          expiresAt: Math.floor(Date.now() / 1000 + account.expires_in)
        }
      } else if (Date.now() < token.expires_at * 1000) {
        // If the access token has not expired yet, return it
        return token
      } else {
        // If the access token has expired, try to refresh it
        try {

          const response = await fetch(process.env.KEYCLOAK_TOKEN_ISSUER, {
            method: 'POST',
            headers: {
              "Content-type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              client_id: process.env.KEYCLOAK_ID,
              client_secret: process.env.KEYCLOAK_SECRET,
              grant_type: "refresh_token",
              refresh_token: token.refreshToken,
            }),
          })


          const tokens = await response.json()

          if (!response.ok) throw token

          return {
            ...token,
            accessToken: tokens.access_token,
            expiresAt: Math.floor(Date.now() / 1000 + tokens.expires_in),
            refreshToken: tokens.refresh_token,
          }
        } catch (error) {
          console.error("Error refreshing access token", error)
        }
      }

    },

    async session({ session, token }) {

      if (session === null) {
        return null
      }

      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken

      return session

    }
  },


  logger: {
    error(code, metadata) {
      console.log('ERROR', { code, metadata })
    },
    warn(code) {
      console.log('WARN', code)
    },
    debug(code, metadata) {
      console.log('DUG', { code, metadata })
    }
  }

}

const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST }