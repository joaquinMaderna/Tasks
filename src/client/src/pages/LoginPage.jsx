import {useForm} from "react-hook-form"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react"
import { Link } from "react-router-dom";

function loginPage() {
    
    const {register, handleSubmit, formState:{ errors }} = useForm();

    const {singIn, isAuthenticated, errors: singinErrors} = useAuth();

    const navi = useNavigate()

    useEffect(()=>{if (isAuthenticated) navi("/tasks")},[isAuthenticated])

    const onSubmit = handleSubmit((data) => {
        singIn(data)
    });

    return (
        <div className="bg-slate-700 h-screen" >
            <div className="flex item-center  justify-center" >
                <div className="bg-zinc-800 my-10 max-w-md w-full p-10   rounded-md" >
                    {singinErrors.map((error, i) => (
                        <div className="text-white bg-red-500 text-center" key={i}>
                            {error}
                        </div>
                    ))}
                    <h1 className="text-2xl font-bold text-white" >Login</h1>      
                    <form onSubmit={onSubmit}>
                        <input type="email" {...register("email" ,{required:true})}
                            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"placeholder="Email"/>
                            {errors.email && <p className="text-red-500" > Email is required</p>}

                        <input type="password" {...register("password" ,{required:true})}
                            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"placeholder="Password"/>
                            {errors.password && <p className="text-red-500" > Password is required</p>}

                        <button className="flex justify-center rounded-lg py-2 px-4 font-bold text-white transition-all hover:bg-slate-400/10 active:bg-slate-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-dark="true">Login</button>
                    </form>

                    <p className="text-white my-2 "  >
                        Don´t have an account? <Link  className="text-sky-500" to="/register"> Register </Link>
                    </p>

                </div>
            </div>
        </div>
    )
}
export default loginPage