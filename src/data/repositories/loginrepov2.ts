import { LoginResponse } from "../../domain/models/LoginResponse";
import { LoginRepo } from "./loginrepo";

export class LoginRepoV2 implements LoginRepo {
    async login(email: string, password: string): Promise<LoginResponse> {
        return {

        }
    }
}