// services/UserService.ts
import users from "../data/users.json";
import { User } from "next-auth";
import { IUserService } from "../interfaces/user";
import { apiServices } from "./api-service";
export class InMemoryUserService implements IUserService {
  signInCredentials(email: string, password: string): User | Promise<User> {
    const user = users.find((user) => {
      const emailFound = email === user.email;
      const isPasswordCorrect = password === user.password;
      const userFound = emailFound && isPasswordCorrect;
      return userFound;
    }) as User;
    return user;
  //   let  user = null;
  //   apiServices.post('login/', {email, password}).then((res) => {
      
  //     const data = {
  //       email: res.user.email,
  //       name: res.user.username,
  //       role: res.user.role,
  //       image: res.user.picture,
  //       id: res.user.id,
  //       tokenjwt: res.token
  //     }
  //     return user = data;
      
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  //   if (!user) {
  //     throw new Error("Credenciales inválidas");
  //   }
  //   return user;
  // }
}
}

export const userService = new InMemoryUserService();