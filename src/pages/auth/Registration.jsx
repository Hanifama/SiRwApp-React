import React, { useState } from 'react'
import regsImg from '../../assets/images/register.png'
import { Link, useNavigate } from 'react-router-dom'

import {FaEye, FaEyeSlash} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { motion } from 'framer-motion'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
    // show password
    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(FaEyeSlash)

    // multi form
    const formArray = [1,2,3]
    const [formNo, setFormNo] = useState(formArray[0])
    const [state, setState] = useState({
        email:'',
        password:'',
        cpassword:'',
        nik:'',
        name:'',
        tanggal:'',
        jeniskelamin:'',  
        agama:'',      
        alamat:'',        
        pekerjaan:'',
        status:'',
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const next = () => {

        if(formNo === 1 && state.email && state.password && state.cpassword){
            setFormNo(formNo+1)
        }
        else if(formNo === 2 && state.nik && state.name && state.tanggal && state.jeniskelamin){
            setFormNo(formNo+1)
        }else{
            toast.error("Mohon buat Akun dulu")
        }  
    }

    const back = () => {
        setFormNo(formNo-1)
    }

    const handleToogle =()=>{
      if(type === 'password'){
        setIcon(FaEye)
        setType('text')
      }else{
        setIcon(FaEyeSlash)
        setType('password')
      }
    }
  

  const registerUser = (e) => {

  }
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
        <ToastContainer/>
        <div className='flex justify-center items-center'>
            {
                formArray.map((v,i)=>
                <>
                <div className={`w-[35px] my-3 text-white rounded-full ${ formNo-1 === i || formNo-1 === i+1 || formNo === formArray.length 
                ? `bg-blue-500`: `bg-slate-400`} h-[35px] flex justify-center items-center`}>
                {v}
                </div>
                {
                    i !== formArray.length - 1 && <div className={`w-[85px] h-[2px]  ${ formNo === i+2 || formNo === formArray.length ? `bg-blue-500`: `bg-slate-400`}  `}></div>
                }
                </>
                )
            }
        </div>
    {/* Login Page */}
    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl h-[450px] p-5">
        
        {/* Image */}
        <motion.div 
        initial={{opacity : 0, y : 200 }}
        animate={{opacity : 1, y : 0 }}
        exit={{opacity : 0, x : 200 }}
        className="sm:block hidden w-1/2">
            <img src={regsImg} alt="Login" className="rounded-2xl" />
        </motion.div>

        
        
        {
            formNo === 1 && 
            <div className="w-1/2 px-16 sm:w-1/2">
                {/* Form */}
                <motion.div 
                initial={{opacity : 0, y : 200 }}
                animate={{opacity : 1, y : 0 }}
                exit={{opacity : 0, x : 200 }}
                >
                    <h2 className="font-bold text-2xl text-textColor">Register Akun Anda</h2>
                    <p className="text-sm mt-4">Buatlah akun anda disini</p>

                    <div  className="flex flex-col gap-4">
                        <div className="flex flex-col ">
                            <label htmlFor="email" className='text-slate-500 mt-2'>email </label>
                            <input 
                            className="p-2 rounded-xl border bg-white text-textColor"
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            onChange={inputHandle} 
                        />
                        </div>
                        
                        <div className="flex flex-col">
                        <label htmlFor="password" className='text-slate-500 '>password </label>
                            <input 
                            className="p-2 rounded-xl w-full border bg-white text-textColor"
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            onChange={inputHandle} 
                            />             
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="confirm password" className='text-slate-500 '> confirmpassword</label>
                        <input 
                            className="p-2 rounded-xl w-full border bg-white text-textColor"
                            type="password" 
                            name="cpassword" 
                            placeholder="Confirm Password" 
                            onChange={inputHandle} 
                            />
                        </div>
                       
                        <button onClick={next} className="bg-blue-300 rounded-xl text-white py-2">lanjut</button>
                    </div>                    

                    <div className="mt-3 grid grid-cols-3 items-center text-gray-500">
                        <hr className="border-gray-500"/>
                        <p className="text-center text-sm">or</p>
                        <hr className="border-gray-500"/>
                    </div>

                    <p className=" text-xs border-b">Punya akun?
                    <Link to={"/login"}>
                    Login disini
                    </Link>
                    </p>

                    {/* <button className="bg-white border py-2 w-full rounded-lg mt-3 flex justify-center items-center text-sm">
                        <FcGoogle className="text-white mr-5"/>
                        Logn With Google
                    </button> */}
                </motion.div>
                {/* End Form */}
            </div>
        }

        {   
            formNo === 2 && 
            <div className="w-1/2 px-16 sm:w-1/2">
                {/* Form */}
                <motion.div 
                initial={{opacity : 0, y : 200 }}
                animate={{opacity : 1, y : 0 }}
                exit={{opacity : 0, x : 200 }}
                >
                    <p className="text-sm mt-4">Masukan identitas sesuai KTP anda</p>

                    <div  className="flex flex-col gap-4">
                        
                        <div className="flex flex-col ">
                        <label htmlFor="email" className='text-slate-500 mt-2'>NIK</label>
                            <input 
                            className="p-2 rounded-xl w-full border bg-white text-textColor"
                            type="text" 
                            name="nik" 
                            placeholder="NIK Kamu" 
                            onChange={inputHandle} 
                            />                                          
                        </div>

                        <div className="flex flex-col">
                        <label htmlFor="email" className='text-slate-500'>Name </label>
                        <input 
                            className="p-2 rounded-xl w-full border bg-white text-textColor"
                            type="text" 
                            name="name" 
                            placeholder="Nama Kamu" 
                            onChange={inputHandle} 
                        />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className='text-slate-500'>Tanggal lahir </label>
                            <input 
                            className="p-2 rounded-xl w-full border bg-white text-textColor"
                            type="date" 
                            name="tanggal" 
                            placeholder="Tempat/Tgl Lahir Kamu"  
                            onChange={inputHandle}                            
                        />
                        </div>
                        
                        <div className="flex flex-col">
                        <label htmlFor="email" className='text-slate-500'>Gender </label>                        
                        <input 
                            className="p-2 rounded-xl w-full border bg-white text-textColor"
                            type="text" 
                            name="jeniskelamin" 
                            placeholder="jenis kelamin kamu" 
                            onChange={inputHandle}                             
                        />
                        </div>
                        
                        <div className="mt-4 gap-3 flex justify-center items-center">
                        <button  onClick={back} className="bg-blue-300 rounded-xl text-white py-2 px-3  w-full text-lg">Back</button>
                        <button  onClick={next} className="bg-blue-300 rounded-xl text-white py-2 px-3  w-full text-lg">Lanjut</button>
                        </div>
                        
                    </div>
                </motion.div>
                {/* End Form */}
            </div>
        }

        {   
            formNo === 3 && 
            <div className="w-1/2 px-16 sm:w-1/2">
                {/* Form */}
                <motion.div 
                initial={{opacity : 0, y : 200 }}
                animate={{opacity : 1, y : 0 }}
                exit={{opacity : 0, x : 200 }}
                >

                    <div  className="flex flex-col gap-4">
                        
                        <div className="relative">
                            <input 
                            className="p-2 rounded-xl w-full border bg-white text-textColor"
                            type="text" 
                            name="agama" 
                            placeholder="Agama Kamu" 
                            onChange={inputHandle} 
                            />                                          
                        </div>
                        <input 
                            className="p-2 rounded-xl w-full border bg-white text-textColor"
                            type="text" 
                            name="alamat" 
                            placeholder="Alamat Kamu" 
                            onChange={inputHandle} 
                            />  
                        <input 
                            className="p-2 rounded-xl w-full border bg-white text-textColor"
                            type="text" 
                            name="pekerjaan" 
                            placeholder="Pekerjaan Kamu" 
                            onChange={inputHandle} 
                        />
                        <input 
                            className="p-2 rounded-xl w-full border bg-white text-textColor"
                            type="text" 
                            name="status" 
                            placeholder="Status Kamu"  
                            onChange={inputHandle}                            
                        />
                       
                        <div className="mt-4 gap-3 flex justify-center items-center">
                        <button onClick={back}  className="bg-blue-300 rounded-xl text-white py-2 px-3  w-full text-lg">Back</button>
                        <button onClick={next}  className="bg-blue-300 rounded-xl text-white py-2 px-3  w-full text-lg">Lanjut</button>
                        </div>
                        
                    </div>
                </motion.div>
                {/* End Form */}
            </div>
        }

        

    </div>
</div>
  )
}

export default Registration