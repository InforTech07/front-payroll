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
                let userFound = false;
                if (credentials?.email === user.email && credentials.password === "1234") {
                    userFound = true;
                }
                console.log(credentials)
                if (!userFound) throw new Error("Credenciales invalidas");

                return user;
            }  
        }),
    ],
    pages: {
        signIn: "/login",
        //signOut: "/logout",
    },
    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
});

export { handler as GET, handler as POST }