
interface ButtonProp {
    text: string;
    variant: "signup" | "signin" | "logout";
    onClick?: () => void;
    fullWidth?: boolean;
}

const variantClasses = {
    "signup": "bg-red-600 text-white",
    "signin": "bg-yellow-600 text-white",
    "logout": "bg-blue-600 text-white",
}

const defaultStyle = " px-4 py-2 rounded-md "

export const Button = ({text, variant, onClick, fullWidth}: ButtonProp) => {

    return <button className={variantClasses[variant] + " " + 
        defaultStyle + `${fullWidth ? " w-full flex justify-center items-center" : ""}` } onClick={onClick} >
            {text}
        </button>
    

}