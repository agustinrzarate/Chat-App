
import { AuthRepository, Provider } from "../../domain/AuthRepository";

function providersAuth(
  registerRepository: AuthRepository,
  provider: Provider,
  setLoading: (state: boolean) => void
): void {
  registerRepository.providersAuth(provider, setLoading);
}

export default providersAuth;