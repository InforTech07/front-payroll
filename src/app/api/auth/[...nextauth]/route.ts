import { NextApiRequest, NextApiResponse } from "next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { userService } from "@/services/UserService";
import { config } from "@/config";

if(!config.nextAuthSecret) throw new Error("NEXTAUTH_SECRET is not defined");

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@email.com" },
                password: { label: "Password", type: "password", placeholder: "********"},
            },
            async authorize(credentials) {
                if(!credentials) throw new Error("Credenciales invalidas");

                const { email, password } = credentials;
                return userService.signInCredentials(email, password);
            }  
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.role = user.role;
            }
            return token;
        },
        session({session, token}) {
            if(token && session.user) {
                session.user.role = token.role;
            }
            return session;
        },
    },
});

export { handler as GET, handler as POST }