
import { Button } from "../components/Button"
import { Input } from "../components/Input"

export const SignUpPage = () => {


    return <div className="h-screen w-screen bg-blue-900 flex justify-center items-center">
    <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input placeholder="Email" />
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div className="flex justify-center pt-4">
            <Button text="Signup" variant="signup" fullWidth={true} />
        </div>
    </div>
</div>
}