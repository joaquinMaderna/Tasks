import { createContext, useState, useContext, useEffect } from "react";
import {registerRequest, loginRequest, verifyTokenRequest} from "../api/auth.js"
import Cookies from "js-cookie"



export const AuthContext = createContext()

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if (!context){
        throw new Error ( "useAuth must be used whithin a auth provider" )
    }
    return context
}



export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [errors, setErrors] = useState([]);

    const [loading, setLoading] = useState(true)

    const singUp = async (user) =>{
        try {
            const res = await registerRequest(user);
            if (res.status === 200) {
                setUser(res.data);
                setIsAuthenticated(true);
              };    
        } catch (error) {
            setErrors(error.response.data)
        }
        
    }

    const singIn = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        const checkLogin = async () => {
            const cookies = Cookies.get()

            if (!cookies.token){
                setIsAuthenticated(false);
                setLoading(false)
                return setUser(null)
            }

            try {
                const res = await verifyTokenRequest(cookies.token)
                console.log(res);

                if (!res.data) return setIsAuthenticated(false);

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);

            } catch (error) {  
                setIsAuthenticated(false)
                setLoading(false)
            }
        }
        checkLogin();
    },[]);

    return (
        <AuthContext.Provider 
        value={{
            singUp,
            singIn,
            loading,
            user,
            isAuthenticated,
            errors,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}