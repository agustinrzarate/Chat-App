'use client'
import React, { useContext, useEffect, useState } from "react";
import Form, { InputProps } from "../Form/Form";
import {
  SignIn,
  initialStateSignIn,
} from "../../../../modules/Auth/domain/Auth";
import Title from "@/app/components/Title/Title";
import Divider from "@/app/components/Divider/Divider";
import FooterForm from "../FooterForm/FooterForm";
import { AuthContext } from "../../context/useAuthContext";
import AuthProviders from "../AuthProviders/AuthProviders";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface SignInContainerProps {
  toggleVariant: () => void;
}

const SignInContainer: React.FC<SignInContainerProps> = ({ toggleVariant }) => {
  const INPUTS: {
    [P in keyof SignIn]: InputProps;
  } = {
    email: {
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      textLabel: "Email",
      inputType: "text",
      placeholder: "example@email.com",
    },
    password: {
      textLabel: "Password",
      inputType: "text",
      placeholder: "aE;32s,3",
    },
  };
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/conversations')
    }
  }, [session?.status, router]);

  
  const {signIn} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleSubmit = (user: SignIn) => {
    signIn(user, setIsLoading);
  };

  return (
    <>
      <Title title=" Sign in to your account" />
      <div className="mt-7">
        <AuthProviders setLoading={setIsLoading} />
        <Divider text="or" />
        <Form<SignIn>
          isLoading={isLoading}
          defaultValues={initialStateSignIn}
          onSubmit={handleSubmit}
          inputs={INPUTS}
          submitButtonText="Sign In"
        />
        <FooterForm
          textOne="New to chatt app ?"
          textTwo="Create an account"
          toggleVariant={toggleVariant}
        />
      </div>
    </>
  );
};

export default SignInContainer;
