'use client'
import { SignIn, SignUp } from "@/modules/Auth/domain/Auth";
import { PropsWithChildren, createContext } from "react";
import { AuthRepository } from "@/modules/Auth/domain/AuthRepository";
import signInUser from "@/modules/Auth/application/signIn/signInUser";
import registerUser from "@/modules/Auth/application/signUp/registerUser";
export interface Auth {
    signIn: (user: SignIn, setLoading: (state: boolean) => void) => void
    signUp: (user: SignUp, setLoading: (state: boolean) => void) => void
}

export const AuthContext = createContext({} as Auth)

export const AuthContextProvider = ({repository, children}: PropsWithChildren<{repository: AuthRepository}>) => {
    function signIn(user: SignIn, setLoading: (state: boolean) => void) {
            signInUser(repository, user, setLoading)
    }
    function signUp(user: SignUp, setLoading: (state: boolean) => void) {
        registerUser(repository, user, setLoading)
    }

    return (<AuthContext.Provider value={{signIn, signUp}}>
        {children}
    </AuthContext.Provider>)
}