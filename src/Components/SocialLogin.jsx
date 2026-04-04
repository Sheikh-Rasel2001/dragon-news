import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import swimming from '../assets/swimming.png';
import classImg from '../assets/class.png';
import playGround from '../assets/playground.png';
import bgImg from '../assets/bg.png';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup } from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import { useNavigate } from 'react-router';
import AuthContext from '../provider/AuthContext';

const SocialLogin = () => {
    const {user, googleProvider, githubProvider} = useContext(AuthContext);
    const googleLogin = googleProvider();
    const githubLogin = githubProvider();

    const navigate = useNavigate();

    // log in with google auth provider 
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleLogin)
            .then(result => {
                console.log(result);
                navigate('/category/1');
            })
            .catch(error => {
                console.log(error);
            })
    }

    // log in with github auth provider
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubLogin)
        .then(result => {
            console.log(result);
            navigate('/category/1');
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='w-full mx-auto'>
            {
                user ? '' : <h2 className='font-bold text-[#001931] mb-5'>Login With</h2>
            }
            <div className='space-y-2 flex flex-col justify-center items-center'>
                {
                    user ? '' :
                        <div className='space-y-2'>
                            <button onClick={handleGoogleLogin} className='btn btn-outline w-full'><FcGoogle size={24} /> Login With Google</button>
                            <button onClick={handleGithubLogin} className='btn btn-outline w-full'><FaGithub size={24} /> Login With Github</button>
                        </div>
                }
            </div>
            <div className='mt-10'>
                <h2 className='font-bold text-[#001931] mb-5'>Find Us On</h2>
                <ul className='space-y-1'>
                    <li className='btn w-full'><FaFacebook /> Facebook</li>
                    <li className='btn w-full'><FaTwitter /> Twitter</li>
                    <li className='btn w-full'><FaInstagram /> Instagram</li>
                    <li className='btn w-full'><FaLinkedin /> LinkedIn</li>
                </ul>
            </div>
            <div className='mt-10 bg-primary py-4'>
                <h2 className='font-bold text-[#001931] mb-5 px-4'>Q-Zone</h2>
                <div className='flex flex-col gap-2 items-center mb-5'>
                    <img src={swimming} alt="Swimming" />
                    <img src={classImg} alt="Class" />
                    <img src={playGround} alt="Playground" />
                </div>
            </div>
            <div className='py-6 flex justify-center items-center'>
                <img src={bgImg} alt="Background" />
            </div>
        </div>
    );
};

export default SocialLogin;