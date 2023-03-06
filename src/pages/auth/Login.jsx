import React, { useState } from 'react'
import loginImg from '../../assets/images/register.png'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'




const Login = () => {
 
    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(FaEyeSlash)

    const handleToogle =()=>{
      if(type === 'password'){
        setIcon(FaEye)
        setType('text')
      }else{
        setIcon(FaEyeSlash)
        setType('password')
      }
    }
  

    const loginUser = (e) => {
      
      }
      
      
      const signInWithGoogle = () => {
        
      }
  return (
    <>
    <div className="w-full h-auto flex flex-col items-center justify-center">
        {/* Login Page */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl h-[450px] p-5">
            {/* Form */}
            <motion.div 
            initial={{opacity : 0, x : 200 }}
            animate={{opacity : 1, x : 0 }}
            exit={{opacity : 0, x : 200 }}
            className="w-1/2 px-16 sm:w-1/2"
            >
                <h2 className="font-bold text-2xl text-textColor">Login</h2>
                <p className="text-sm mt-4">Tekido Siap Membantu Anda</p>

                <form onSubmit={loginUser} className="flex flex-col gap-4">
                    <input 
                    className="p-2 mt-8 rounded-xl border bg-white text-textColor"
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    
                    />
                    <div className="relative">
                        <input 
                        className="p-2 rounded-xl w-full border bg-white text-textColor"
                        type={type} 
                        name="password" 
                        placeholder="Password" 
                        
                        />
                        

                    </div>
                    <Link to="/reset">
                    <p className=" text-xs">Lupa Password?</p>
                    </Link>
                    
                    <button type='submit' className="bg-blue-300 rounded-xl text-white py-2">Login</button>
                </form>

                   <div className="mt-3 mb-2 grid grid-cols-3 items-center text-gray-500">
                        <hr className="border-gray-500"/>
                        <p className="text-center text-sm">or</p>
                        <hr className="border-gray-500"/>
                    </div>

                    <p className=" text-xs border-b">belum punya akun?
                      <Link to={"/register"}>
                      Daftar disini
                      </Link>
                    </p>


            </motion.div>

            {/* Image */}
            <motion.div 
                initial={{opacity : 0, x : 200 }}
                animate={{opacity : 1, x : 0 }}
                exit={{opacity : 0, x : 200 }}
            className="sm:block hidden w-1/2">
                <img src={loginImg} alt="Login" className="rounded-2xl" />
            </motion.div>
        </div>
    </div>
    </>
  )
}

export default Login