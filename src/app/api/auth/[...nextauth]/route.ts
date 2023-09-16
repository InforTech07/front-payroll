import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    // Configure one or more authentication providers

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@email.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const user = { id: "1", name: "J Smith", email: "jhon@gmail.com" };
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }  
        }),
    ],
    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
});

export { handler as GET, handler as POST }