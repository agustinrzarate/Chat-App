import { SignUp } from "../../domain/Auth";
import { AuthRepository } from "../../domain/AuthRepository";

async function registerUser(
  registerRepository: AuthRepository,
  user: SignUp,
): Promise<any> {
  return registerRepository.signUp(user);
}

export default registerUser;
