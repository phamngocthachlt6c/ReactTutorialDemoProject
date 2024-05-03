import { LoginResponse } from "../../domain/models/LoginResponse";

export interface LoginRepo {
    login(email: string, password: string): Promise<LoginResponse>;
}