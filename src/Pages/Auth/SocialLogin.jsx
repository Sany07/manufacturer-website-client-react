import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";
import useToken from "../../Hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    console.log(error);
    toast.error("error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "login-error",
    });
  }

  if (user) {
    toast.success("Login Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "success1",
    });
    navigate(from, { replace: true });
  }

  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <button
    onClick={() => signInWithGoogle()}
    className="btn btn-outline"
>Continue with Google</button>
    
  );
};

export default SocialLogin;
