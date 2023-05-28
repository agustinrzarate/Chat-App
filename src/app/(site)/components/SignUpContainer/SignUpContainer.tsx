"use client";

import React, { useContext, useState } from "react";
import Form, { InputProps } from "../Form/Form";
import {
  SignUp,
  initialStateSignUp,
} from "../../../../modules/Auth/domain/Auth";
import Divider from "@/app/components/Divider/Divider";
import Title from "@/app/components/Title/Title";
import FooterForm from "../FooterForm/FooterForm";
import { AuthContext } from "../../context/authContext";
import AuthProviders from "../AuthProviders/AuthProviders";

interface SignUpContainerProps {
  toggleVariant: () => void;
}
const SignUpContainer: React.FC<SignUpContainerProps> = ({ toggleVariant }) => {
  const INPUTS: {
    [P in keyof SignUp]: InputProps;
  } = {
    name: {
      textLabel: "Name",
      inputType: "text",
      placeholder: "Agustin R Zarate",
    },
    email: {
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      textLabel: "Email",
      inputType: "text",
      placeholder: "agu@gmail.com",
    },
    password: {
      pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
      textLabel: "Password",
      inputType: "text",
      placeholder: "aE;32s,3",
    },
  };

  const { signUp } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmit = (user: SignUp) => {
    signUp(user, setIsLoading);
  };

  return (
    <>
      <Title title="Join Chat app today" />
      <div className="mt-7">
        <AuthProviders setLoading={setIsLoading} />
        <Divider text="or" />
        <Form<SignUp>
          isLoading={isLoading}
          defaultValues={initialStateSignUp}
          onSubmit={handleSubmit}
          inputs={INPUTS}
          submitButtonText="Create account"
        />
        <FooterForm
          textOne="Already have an account?"
          textTwo="Sign In"
          toggleVariant={toggleVariant}
        />
      </div>
    </>
  );
};

export default SignUpContainer;
