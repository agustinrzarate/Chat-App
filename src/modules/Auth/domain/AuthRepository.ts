import { SignIn, SignUp } from "./Auth";

export type Provider = 'github' |'google'
export interface AuthRepository {
  signUp: (user: SignUp, setLoading: (state: boolean) => void) => void;
  signIn: (user: SignIn, setLoading: (state: boolean) => void) => void;
  providersAuth: (provider: Provider, setLoading: (state: boolean) => void) => void
}
