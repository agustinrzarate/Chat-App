"use client";
import React, { useContext } from "react";
import SocialIconButton from "../SocialIconButton/SocialIconButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../context/authContext";
interface AuthProvidersProps {
  setLoading: (state: boolean) => void;
}
const AuthProviders = ({ setLoading }: AuthProvidersProps) => {
  const { provider } = useContext(AuthContext);
  const handleSubmit = (providerSocial: "google" | "github") => {
    provider(providerSocial, setLoading);
  };
  return (
    <div className="flex justify-center">
      <div className="m-2">
        <SocialIconButton
          icon={BsGithub}
          onClick={() => handleSubmit("github")}
        />
      </div>
      <div className="m-2">
        <SocialIconButton
          icon={BsGoogle}
          onClick={() => handleSubmit("google")}
        />
      </div>
    </div>
  );
};

export default AuthProviders;
