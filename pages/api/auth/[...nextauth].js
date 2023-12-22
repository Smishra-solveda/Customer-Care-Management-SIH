import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"

const adminEmails = [
  "tanishka2021cs020@abesit.edu.in",
  "sakshi2021csai027@abesit.edu.in",
  "vaibhav2021cs131@abesit.edu.in",
  "yogesh2021cs114@abesit.edu.in",
  "manish2021csai118@abesit.edu.in",
  "rythem2021cs073@abesit.edu.in",
  "satyendra.singh@abesit.edu.in",
  "shashwatmishra1572002@gmail.com",
  "nishanttyagi386@gmail.com",
  "tripathipranav14@gmail.com",
  "ishaan2053@gmail.com",
  "itsmeitself7777@gmail.com",
  "goelsakshi854@gmail.com",
  "bietcse7777@gmail.com"
]

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  adapter: MongoDBAdapter(clientPromise), // Adapter (recommended)
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }) => {
      if (adminEmails.includes(session?.user?.email)) {
        return session
      } else {
        return false
      }
    }
  }
})