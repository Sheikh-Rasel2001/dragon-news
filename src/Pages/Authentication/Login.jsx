import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../provider/AuthContext';
import { RiEyeCloseLine } from 'react-icons/ri';
import { FaEyeSlash } from 'react-icons/fa';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();

    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        setSuccess(false)
        setErrorMessage('');
        // password validation
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
        if (!regex.test(password)) {
            setErrorMessage('Password must be at least 6 characters, uppercase, lowercase and number');
            return;
        }

        // Login user
        loginUser(email, password)
            .then(result => {
                if (!result.user.emailVerified) {
                    alert('Please verify your email');
                }
                else {
                    setSuccess(true);
                }
                form.reset();

                navigate(location.state || '/');
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    // send email for forget password
    const handleForgotPassword = () => {
        const sendEmail = emailRef.current.value;

        // send email with auth
        sendPasswordResetEmail(auth, sendEmail)
        .then(() => {
            alert('A password reset email is sent. Please check your email')
        })
        .catch(error => {
            setErrorMessage(error.message);
        })

    }

    return (
        <div className='flex justify-center items-center h-screen '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-[#001932]">Login Your Account</h2>
                    <form onSubmit={handleLogin} className="fieldset text-lg">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" required />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-8 top-2 text-2xl text-gray-500 cursor-pointer'
                            >
                                {showPassword ? <FaEyeSlash /> : <RiEyeCloseLine />}
                            </button>
                        </div>
                        {/* forgot password */}
                        <div onClick={handleForgotPassword}><a className="link link-hover">Forgot password?</a></div>
                        {/* submit button */}
                        <button type='submit' className="btn btn-neutral mt-4 text-lg">Login</button>
                        <p className='mt-4 text-center'>
                            Don't Have an Account?
                            <Link to={'/auth/register'} className='text-secondary hover:underline px-2'>Register</Link>
                        </p>
                        {
                            errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>
                        }
                        {
                            success && <p className='text-green-600'>You are login successfully</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;