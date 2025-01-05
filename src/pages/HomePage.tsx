import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"


export const HomePage = () => {
    const navigate = useNavigate();

    return <div className="h-screen bg-blue-900"> 
            <h1 className="text-white">Home page</h1>
            <Button text="Signup" variant="signup" onClick={
                () => navigate("/signup")
            } />
            <Button text="Signin" variant="signin" />
    </div>
}