import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import AuthContext from '../../provider/AuthContext';
import { updateProfile } from 'firebase/auth';
import { RiEyeCloseLine } from 'react-icons/ri';
import { FaEyeSlash } from 'react-icons/fa';


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const terms = form.terms.checked;
        const password = form.password.value;

        setSuccess(false);
        setErrorMessage('');

        // console.log(name, photo, email, password);

        // password validation
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/
        if (!regex.test(password)){
            setErrorMessage('Password must be at least 6 characters, uppercase, lowercase and number');
            return;
        }
        // terms and conditions validation
        if(!terms){
            setErrorMessage('Please accept the Terms and Conditions');
            return;
        }

        // create user for register
        createUser(email, password)
            .then(result => {
                
                // update user profile
                const currentUser = result.user;
                updateProfile(currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log('Profile Updated'))
                    .catch(error => console.log(error))
                console.log(result);
                setSuccess(true);
                form.reset();
            })
            .catch(error => {
                setErrorMessage(error.message);
            })

    }

    return (
        <div className='flex justify-center items-center h-screen '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-[#001932]">Register Your Account</h2>
                    <form onSubmit={handleRegister} className="fieldset text-lg">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />
                        {/* photo url */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        {/* password */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" required />
                            <button onClick={() => setShowPassword(!showPassword)} type='button' className='absolute right-8 top-2 text-2xl text-gray-500 cursor-pointer'>
                                {showPassword ? <FaEyeSlash /> : <RiEyeCloseLine />}
                            </button>
                        </div>
                        {/* terms and conditions */}
                        <label className='flex items-center gap-2 cursor-pointer mt-4'>
                            <input type="checkbox" name='terms' className="checkbox checkbox-md" />
                            <p className='text-sm'>I agree to the <span className='text-blue-600 hover:underline'>Terms</span> and <span className='text-blue-600 hover:underline'>Conditions</span></p>
                        </label>
                        {/* submit button */}
                        <button type='submit' className="btn btn-neutral mt-4 text-lg">Register</button>

                        <p className='mt-4 text-center'>
                            Already Have an Account?
                            <Link to={'/auth/login'} className='text-secondary hover:underline px-2'>Login</Link>
                        </p>
                        {
                            errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>
                        }
                        {
                            success && <p className='text-green-500'>User Register Successfully</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;