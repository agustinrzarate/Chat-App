import { SignIn, SignUp } from "./Auth";

export interface AuthRepository {
  signUp: (user: SignUp, setLoading: (state: boolean) => void) => void;
  signIn: (user: SignIn, setLoading: (state: boolean) => void) => void;
}
