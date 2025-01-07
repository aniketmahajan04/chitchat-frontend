import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRecoilState } from "recoil";
import { userAtom } from "../atom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BACKEND_URL } from "../config";

export const SignUpPage = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const [user, setUser] = useRecoilState(userAtom);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    async function signup() {
       const username = usernameRef.current?.value;   
       const email = emailRef.current?.value;
       const password = passwordRef.current?.value;

       console.log(username);
       console.log(email);
       console.log(password);

        if(!username || !email || !password){
            alert("All fields are required.");
            return;
        }
        setIsLoading(true);

       try{
        // const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
        // console.log(URL);
        
        const response = await axios.post(BACKEND_URL + "/api/v1/user/signup", {
            email: email,
            username: username,
            password: password,
        });
        console.log("Response", response)

        setUser({
            email: response.data.email,
            username: response.data.username,
        });
        navigate("/signin");

       } catch(error: any) {
        alert(error.response?.data?.message || "An error occurred during signup.");
       } finally {
        setIsLoading(false);
       }
    }

    return(
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Sign up - Chichat</title>
                </Helmet>
            </HelmetProvider>

            <div className="h-screen w-screen bg-blue-900 flex justify-center items-center">
                <div className="bg-white rounded-xl border min-w-48 p-8">
                    <Input reference={emailRef} placeholder="Email" />
                    <Input reference={usernameRef} placeholder="Username" />
                    <Input reference={passwordRef} placeholder="Password" />
                    <div className="flex justify-center pt-4">
                        <Button
                            onClick={signup} 
                            text={isLoading ? "Signing up..." : "Signup"} 
                            variant="signup" 
                            fullWidth={true}
                            disabled={isLoading} />
                    </div>
                </div>
            </div>
        </>
    )
}