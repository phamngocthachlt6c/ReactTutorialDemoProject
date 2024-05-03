import { LoginRepo } from "../data/repositories/loginrepo";
import { LoginResponse } from "../domain/models/LoginResponse";
import { LoginUseCase } from "../domain/usecases/loginusecase"

class MockLoginRepo implements LoginRepo {
    async login(email: string, password: string): Promise<LoginResponse> {
        return {
            username: "thach",
            token: "sdfasdf"
        };
    }

}
test('testlogin', () => {
    let loginUseCase = new LoginUseCase(new MockLoginRepo());
})