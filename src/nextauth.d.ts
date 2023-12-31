// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
// Define a role enum
export enum Role {
  user = "user",
  admin = "admin",
  moderator = "moderator",
}
// common interface for JWT and Session
interface IUser extends DefaultUser {
  role?: Role;
  image?: string;
  nameCompany?: string;
  idCompany?: number;
  logoCompany?: string;
  employeeId?: number;
}
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
