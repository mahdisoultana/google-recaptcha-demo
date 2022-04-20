import React, { useRef, useState } from "react";

import GoogleLoginButton from "../GoogleAuth";
import Recaptcha from "../Recaptacha";
import From from "../form/From";
import { useUserContext } from "../../../context/UserProvider";

const RecaptchaRef = React.forwardRef(Recaptcha);

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "", captcha: false });
  const [, setInfo] = useUserContext();

  //////////
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onChangeCaptcha = (value) => {
    setUser({ ...user, captcha: value });
  };
  const ref = React.createRef();

  function onSubmit(e) {
    e.preventDefault();
    setInfo((prevState) => {
      return { ...prevState, user, authenticated: true };
    });
  }

  return (
    <div className="flex items-center flex-col my-4 p-4">
      <From
        onSubmit={onSubmit}
        captcha={
          !user.captcha ||
          !user.email.includes("@") ||
          !user.password.length > 5
        }
        onChange={onChange}
      >
        <RecaptchaRef ref={ref} onChangeCaptcha={onChangeCaptcha} />
        <p className="text-lg text-white text-center my-6">
          Or Login with Google
        </p>
        <GoogleLoginButton
          onSuccess={({ profileObj } = {}) => {
            setUser(() => ({
              ...user,
              email: profileObj?.email || null,
              image: profileObj?.imageUrl || null,
              name: profileObj?.name || null,
            }));
            setInfo((prevState) => {
              return {
                ...prevState,
                user: {
                  ...user,
                  email: profileObj?.email || null,
                  image: profileObj?.imageUrl || null,
                  name: profileObj?.name || null,
                },
                authenticated: true,
              };
            });
          }}
        />
      </From>
    </div>
  );
}
