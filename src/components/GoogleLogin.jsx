import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { registerLoginWithGoogle } from "../redux/actions/authActions";

function GoogleLogin({ buttonText }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogleLogin) =>
      dispatch(registerLoginWithGoogle(responseGoogleLogin.access_token, navigate)),
  });

  return (
    <Button
      className="w-25"
      variant="primary"
      onClick={() => loginWithGoogle()}
    >
      {buttonText}
    </Button>
  );
}

export default GoogleLogin;
