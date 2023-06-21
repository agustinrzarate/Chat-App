"use client";

import React, { useCallback, useState } from "react";

import { Auth } from "../../../../modules/Auth/domain/Auth";
import SingInContainer from "./SignInContainer/SingInContainer";
import SingUpContainer from "./SignUpContainer/SignUpContainer";

const Authentication = () => {
  const [authType, setAuthType] = useState<Auth>("SIGN_UP");
  const toggleVariant = useCallback(() => {
    if (authType === "SIGN_IN") {
      setAuthType("SIGN_UP");
    } else {
      setAuthType("SIGN_IN");
    }
  }, [authType]);

  return (
    <div>
      {authType === "SIGN_IN" ? (
        <SingInContainer toggleVariant={toggleVariant} />
      ) : (
        <SingUpContainer toggleVariant={toggleVariant} />
      )}
    </div>
  );
};

export default Authentication;
