import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
const Recaptcha = ({ onChangeCaptcha }, ref) => {
  return (
    <div>
      <ReCAPTCHA
        className="  flex items-center flex-col mt-4  "
        ref={ref}
        size="normal"
        sitekey="6Lf1_IgfAAAAAJ0b1n-kxdQwkvIGIg_pUUPIeJEv"
        onChange={onChangeCaptcha}
      />
    </div>
  );
};

export default Recaptcha;
