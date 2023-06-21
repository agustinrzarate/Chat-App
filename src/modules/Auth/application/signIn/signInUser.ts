import { SignInResponse } from "next-auth/react";
import { SignIn } from "../../domain/Auth";
import { AuthRepository } from "../../domain/AuthRepository";

function signInUser(
  registerRepository: AuthRepository,
  user: SignIn,
): Promise<SignInResponse> {
  return registerRepository.signIn(user) as Promise<SignInResponse>;
}

export default signInUser;
