
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword,   useSendPasswordResetEmail,
      } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';
import useToken from '../../Hooks/useToken';
import useLoading from '../../Hooks/useLoading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useLoading();
    const from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
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
    
      if (error) {
        toast.error("Invalid Credential", {
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
      if (loading) {
        return <LoadingSpinner />;
      }

      if (isLoading) {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        return <LoadingSpinner />;
      }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    if (token) {
        navigate(from, { replace: true });
      }

    return (
        <div className='mt-28 flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input className='btn btn-primary text-white w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>New to Doctors Portal <Link className='text-primary' to="/register">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <SocialLogin/>
                </div>
            </div>
        </div >
    );
};

export default Login;
