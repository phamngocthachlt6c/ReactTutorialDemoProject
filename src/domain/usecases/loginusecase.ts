import { LoginRepo } from "../../data/repositories/loginrepo";

export class LoginUseCase {

    private loginrepo: LoginRepo;
    constructor(loginrepo: LoginRepo) {
        this.loginrepo = loginrepo;
    }

    login() {
        
    }
}