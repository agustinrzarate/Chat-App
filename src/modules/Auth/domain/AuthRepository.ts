import { SignInResponse } from "next-auth/react";
import { SignIn, SignUp } from "./Auth";

export type Provider = 'github' |'google'
export interface AuthRepository {
  signUp: (user: SignUp) => Promise<any>;
  signIn: (user: SignIn) => Promise<SignInResponse>;
  providersAuth: (provider: Provider) => Promise<SignInResponse>
}
