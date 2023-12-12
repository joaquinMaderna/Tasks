import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext.jsx"
import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";


function RegisterPage() {
    const {register, handleSubmit,formState:{ errors }} = useForm()
    const {singUp,isAuthenticated, errors: registerErrors} = useAuth()
    const navi = useNavigate()

    useEffect(()=>{
        if (isAuthenticated) navi("/tasks")
    },[isAuthenticated])

    const onSubmit =  handleSubmit(async (values) => {
        singUp(values)
        })

    return (
        <div className="bg-slate-700 h-screen" >
            <div className="flex item-center justify-center" >
                <div className="bg-zinc-800 max-w-md w-full p-10 my-10 rounded-md " >
                    {
                        registerErrors.map((error, i) => (
                            <div className="text-white bg-red-500" key={i}>
                                {error}
                            </div>
                        ))
                    }
                    <h1 className="text-2xl font-bold text-white" >Register</h1> 
                    <form onSubmit={onSubmit}>

                        <input type="text" {...register("username" ,{required:true})}
                            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
                            placeholder="Username"
                            />
                        {errors.username && <p className="text-red-500" > Username is required</p>}

                        <input type="email" {...register("email" ,{required:true})}
                            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
                            placeholder="Email"
                            />
                        {errors.email && <p className="text-red-500" > Email is required</p>}

                        <input type="password" {...register("password" ,{required:true})}
                        className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Password"
                        />
                        {errors.password && <p className="text-red-500" > Password is required</p>}
                        <button className="flex justify-center rounded-lg py-2 px-4 font-bold text-white transition-all hover:bg-slate-400/10 active:bg-slate-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-dark="true" type="submit" >Register</button>
                    </form>
                    <p className="text-white my-2 "  >
                            Already have an account? <Link  className="text-sky-500" to="/Login"> Login </Link>
                        </p>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage