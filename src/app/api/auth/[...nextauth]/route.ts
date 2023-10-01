import { NextApiRequest, NextApiResponse } from "next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { userService } from "@/services/user-service";
import { apiServices } from "@/services/api-service";
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
                let user = null;
                const result = await apiServices.post('login/', {email, password});
                //if(result?.user) {}
                return user = {
                    email: result.user.email,
                    name: result.user.username,
                    role: result.user.role,
                    image: result.user.picture,
                    id: result.user.id,
                    idCompany: result.user.company.id,
                    logoCompany: result.user.company.picture,
                    nameCompany: result.user.company.name,
                    tokenjwt: result.token
                };
                //return await apiServices.post('login/', {email, password});
            }  
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({token, user}) {
            //console.log(user);
            //console.log(token);
            if(user) {
                token.user = user;
            }
            return token;
        },
        session({session, token}) {
            if(token && session.user) {
                session.user = token.user as any;
            }
            return session;
        },
    },
});

export { handler as GET, handler as POST }