
import { SignInResponse } from "next-auth/react";
import { AuthRepository, Provider } from "../../domain/AuthRepository";

function providersAuthUser(
  registerRepository: AuthRepository,
  provider: Provider,
): Promise<SignInResponse> {
  return registerRepository.providersAuth(provider);
}

export default providersAuthUser;