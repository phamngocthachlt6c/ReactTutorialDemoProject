import { Container } from "inversify";
import { LoginRepo } from "../data/repositories/loginrepo";
import { LoginRepoImpl } from "../data/repositories/loginrepoimpl";
import { LoginUseCase } from "../domain/usecases/loginusecase";
import { LoginRepoV2 } from "../data/repositories/loginrepov2";

const container = new Container();

const loginRepo = new LoginRepoV2();
container.bind<LoginRepo>('LoginRepo').toConstantValue(loginRepo);
container.bind<LoginUseCase>('LoginUseCase').toConstantValue(new LoginUseCase(loginRepo));

export default container;