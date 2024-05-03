import { LoginResponse } from "../../domain/models/LoginResponse";

export class LoginApiClient {
    async login(): Promise<LoginResponse> {
        return {
            username: "thach",
            token: "23423effasdfsdfsdf"
        };
    }
}