"use client";
import { SignIn, SignUp } from "@/modules/Auth/domain/Auth";
import { PropsWithChildren, createContext } from "react";
import { AuthRepository, Provider } from "@/modules/Auth/domain/AuthRepository";
import signInUser from "@/modules/Auth/application/signIn/signInUser";
import registerUser from "@/modules/Auth/application/signUp/registerUser";
import providersAuthUser  from "@/modules/Auth/application/providersAuth/providersAuth";

export const AuthContext = createContext({} as AuthRepository);

export const AuthContextProvider = ({
  repository,
  children,
}: PropsWithChildren<{ repository: AuthRepository }>) => {
  function signIn(user: SignIn) {
    return signInUser(repository, user);
  }

  function providersAuth(provider: Provider) {
    return providersAuthUser(repository, provider);
  }

  function signUp(user: SignUp) {
    return registerUser(repository, user);
  }

  return (
      <AuthContext.Provider value={{ signIn, signUp, providersAuth }}>
        {children}
      </AuthContext.Provider>
  );
};
