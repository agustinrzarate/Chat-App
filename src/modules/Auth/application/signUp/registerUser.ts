import { SignUp } from "../../domain/Auth";
import { AuthRepository } from "../../domain/AuthRepository";

function registerUser(
  registerRepository: AuthRepository,
  user: SignUp,
  setLoading: (state: boolean) => void
): void {
  registerRepository.signUp(user, setLoading);
}

export default registerUser;
