import { LoginResponse } from "../../domain/models/LoginResponse";
import { LoginApiClient } from "../api/loginapiclient";
import { LoginRepo } from "./loginrepo";

export class LoginRepoImpl implements LoginRepo {
    login(email: string, password: string): Promise<LoginResponse> {
        let loginapi = new LoginApiClient();
        return loginapi.login();
    }

}