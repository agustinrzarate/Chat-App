import { SignIn } from "../../domain/Auth";
import { AuthRepository } from "../../domain/AuthRepository";

function signInUser(
  registerRepository: AuthRepository,
  user: SignIn,
  setLoading: (state: boolean) => void
): void {
  registerRepository.signIn(user, setLoading);
}

export default signInUser;
