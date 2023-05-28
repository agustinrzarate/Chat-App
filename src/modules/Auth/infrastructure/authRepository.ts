import axios from "axios";
import { SignIn, SignUp } from "../domain/Auth";
import { AuthRepository, Provider } from "../domain/AuthRepository";
import { toast } from 'react-hot-toast'
import { signIn as signInNextAuth} from 'next-auth/react'

function signUp(data: SignUp, setLoading: (state: boolean) => void) {
  setLoading(true)
  axios.post("/api/register", data).catch((error) => toast.error(error.response.data)).finally( () => setLoading(false));
}

function signIn(data: SignIn, setLoading: (state: boolean) => void) {
  setLoading(true);
  signInNextAuth('credentials', {
    ...data,
    redirect: false
  }).then((callback) => {
    if(callback?.error) {
      toast.error("Invalid credentials")
    } else if (callback?.ok && !callback.error) {
      toast.success('Logged in!')
    }
  }).finally( () => setLoading(false))
}

function providersAuth(provider: Provider, setLoading: (state: boolean) => void) {
  setLoading(true);
  signInNextAuth(provider, {
    redirect: false
  }).then((callback) => {
    if(callback?.error) {
      toast.error("Invalid credentials")
    } else if (callback?.ok && !callback.error) {
      toast.success('Logged in!')
    }
  }).finally( () => setLoading(false))
}

export function authRepository(): AuthRepository {
  return {
    signUp,
    signIn,
    providersAuth
  };
}

