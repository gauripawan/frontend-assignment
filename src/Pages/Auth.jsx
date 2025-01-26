import AuthLeft from "../Components/AuthLeft.jsx"
import AuthRight from "../Components/AuthRight.jsx";
const Auth = () => {
    return (
        <div className="flex gap-2 w-full h-screen justify-center">
            <AuthLeft />
            <AuthRight />
        </div>
    );
};

export default Auth;