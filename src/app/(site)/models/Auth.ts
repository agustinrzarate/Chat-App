export type Auth = 'SIGN_IN' | 'SIGN_UP'

export interface SignUp {
    name: string
    email: string
    password: string
}

export const initialStateSignUp : SignUp = {
    name: '',
    email: '',
    password: ''
}


export interface SignIn {
    password: string
    email: string
}

export const initialStateSignIn : SignIn = {
    email: '',
    password: ''
}