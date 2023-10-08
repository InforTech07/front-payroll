// services/UserService.ts
import users from "../data/users.json";
import { User } from "next-auth";
import { IUserService } from "../interfaces/user";
import { apiServices } from "./api-service";
// export class InMemoryUserService implements IUserService {
//   signInCredentials(email: string, password: string): User | Promise<User> {
//     const user = users.find((user) => {
//       const emailFound = email === user.email;
//       const isPasswordCorrect = password === user.password;
//       const userFound = emailFound && isPasswordCorrect;
//       return userFound;
//     }) as User;
//     return user;

//   verifyAccount(email: string): Promise<void> {
//     const response = await apiServices.post("verify_account/?email=" + email);
//   }

// }

class UserService{
  private static _instance: UserService;

  public static getInstance() {
    if(!UserService._instance) {
      UserService._instance = new UserService();
    }
    return UserService._instance;
  }

  async verifyAccount(email: string){
    return await apiServices.get("login/verify_account/?email=" + email);
  }

  async resetPassword(data: any){
    return await apiServices.post("login/reset_password/", data);
  }
}




export const userService = UserService.getInstance();