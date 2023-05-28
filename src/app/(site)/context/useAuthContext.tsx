'use client'
import { SignIn, SignUp } from "@/modules/Auth/domain/Auth";
import { PropsWithChildren, createContext } from "react";
import { AuthRepository, Provider } from "@/modules/Auth/domain/AuthRepository";
import signInUser from "@/modules/Auth/application/signIn/signInUser";
import registerUser from "@/modules/Auth/application/signUp/registerUser";
import providersAuth from "@/modules/Auth/application/providersAuth/providersAuth";

export interface Auth {
    signIn: (user: SignIn, setLoading: (state: boolean) => void) => void
    signUp: (user: SignUp, setLoading: (state: boolean) => void) => void
    provider: (provider: Provider, setLoading:(state: boolean) => void) => void
}

export const AuthContext = createContext({} as Auth)

export const AuthContextProvider = ({repository, children}: PropsWithChildren<{repository: AuthRepository}>) => {
    function signIn(user: SignIn, setLoading: (state: boolean) => void) {
        signInUser(repository, user, setLoading)
    }

    function provider(provider: Provider, setLoading: (state: boolean) => void) {
        providersAuth(repository, provider, setLoading)
    }

    function signUp(user: SignUp, setLoading: (state: boolean) => void) {
        registerUser(repository, user, setLoading)
    }

    return (<AuthContext.Provider value={{signIn, signUp, provider}}>
        {children}
    </AuthContext.Provider>)
}