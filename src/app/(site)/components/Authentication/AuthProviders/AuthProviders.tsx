"use client";
import React, { useContext } from "react";
import SocialIconButton from "../../SocialIconButton/SocialIconButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../../context/authContext";
import toast from "react-hot-toast";
interface AuthProvidersProps {
  setLoading: (state: boolean) => void;
}
const AuthProviders = ({ setLoading }: AuthProvidersProps) => {
  const { providersAuth } = useContext(AuthContext);
  const handleSubmit = async(providerSocial: "google" | "github") => {
    try {
      setLoading(true)
      await providersAuth(providerSocial).then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials");
        } else if (callback?.ok && !callback.error) {
          toast.success("Logged in!");
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
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
