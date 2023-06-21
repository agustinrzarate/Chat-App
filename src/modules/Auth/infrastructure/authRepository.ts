import axios from "axios";
import { SignIn, SignUp } from "../domain/Auth";
import { AuthRepository, Provider } from "../domain/AuthRepository";
import { SignInResponse, signIn as signInNextAuth} from 'next-auth/react'

async function signUp(data: SignUp) {
  const result = await axios.post("/api/register", data)
  return result.data
}

async function signIn(data: SignIn) {
 return signInNextAuth('credentials', {
    ...data,
    redirect: false
  }) as Promise<SignInResponse>
}

async function providersAuth(provider: Provider) {
  return signInNextAuth(provider, {
    redirect: false
  }) as Promise<SignInResponse>
}

export function authRepository(): AuthRepository {
  return {
    signUp,
    signIn,
    providersAuth
  };
}

