import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser} = useContext(AuthContext)

    const handleLogin = data =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (
        <div className="lg:flex">
            <div className="lg:w-1/2 xl:max-w-screen-sm">
                <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                    <div className="cursor-pointer flex items-center">
                        <div>
                        <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
  <style type="text/css">{`.st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}`}</style>
  <g transform="matrix( 1, 0, 0, 1, 0,0) ">
    <g>
      <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
    </g>
  </g>
</svg>
                        </div>
                        <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">NS-CAR_RESALE</div>
                    </div>
                </div>
                <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Sign up</h2>
                    <div className="mt-12">
                    <form onSubmit={handleSubmit(handleLogin)}>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Name</div>
                                <input {...register("name", { required: "Name is required" })} aria-invalid={errors.name ? "true" : "false"}  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type='text' placeholder="Your Name"/>
                                {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                            </div>
                            <div className='mt-8'>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                <input type="email" placeholder='Enter your Email' {...register("email", {
                            required: true
                        })} className="input input-bordered w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                    <div>
                                        <Link to='' className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer">
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>
                                <input {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' } })} aria-invalid={errors.password ? "true" : "false"}  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type='password'  placeholder="Enter your password"/>
                                {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                            </div>
                            <div className="mt-10">
                                <button className="bg-green-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-green-600
                                shadow-lg">
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className="mb-10 text-sm font-display font-semibold text-gray-700 text-center">
                            Already have an account ? <Link to='/login' className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex mx-6 items-center justify-center mb-5">
                <div className="mb-8">
                    <img src='https://acad.xlri.ac.in/isep/images/login.svg' alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Register;