import { useState } from "react";
import { KeyIcon } from "@heroicons/react/16/solid";
import ant from '../assets/ant.png'
import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import icon4 from '../assets/Icon4.png'

// Define types for SignInButton props
interface SignInButtonProps {
  icon?: string; // icon is optional
  provider: string;
  isCustomIcon?: boolean; // isCustomIcon is optional
}

const AuthRight = () => {
  const [isSaas, setIsSaas] = useState(true);

  const SignInButton = ({ icon, provider, isCustomIcon = false }: SignInButtonProps) => (
    <a
      href="/dashboard"
      className="border items-center font-semibold flex w-full gap-3 p-2 rounded-xl justify-center transition-colors duration-200"
    >
      {isCustomIcon ? (
        <KeyIcon className="w-5" />
      ) : (
        <img src={icon} alt={provider} className="w-5" />
      )}
      Sign in with {provider}
    </a>
  );

  return (
    <div className="bg-gray-50 flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4 border-l">
      <div className="bg-white flex flex-col rounded-xl w-full border">
        <div className="border-b flex flex-col p-5 w-full gap-4">
          <div className="flex items-center justify-center gap-4">
            <img src={ant} alt="logo" />
            <span className="font-light text-[30px]">CodeAnt AI</span>
          </div>
          <div className="flex justify-center text-2xl font-semibold mt-2">
            Welcome to CodeAnt AI
          </div>
          <div className="bg-gray-100/70 border rounded-xl flex">
            <button
              className={`p-3 rounded-xl w-1/2 transition-colors duration-300 font-semibold ${
                isSaas ? "bg-[#1570EF] text-white" : ""
              }`}
              onClick={() => setIsSaas(true)}
            >
              SAAS
            </button>
            <button
              className={`p-3 rounded-xl w-1/2 transition-colors duration-300 font-semibold ${
                isSaas ? "" : "bg-[#1570EF] text-white"
              }`}
              onClick={() => setIsSaas(false)}
            >
              Self Hosted
            </button>
          </div>
        </div>

        <div className="flex flex-col p-5">
          <div className="flex items-center justify-center w-full">
            {isSaas ? (
              <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                <SignInButton icon={icon1} provider="Github" />
                <SignInButton icon={icon2} provider="Bitbucket" />
                <SignInButton icon={icon3} provider="Azure Devops" />
                <SignInButton icon={icon4} provider="GitLab" />
              </div>
            ) : (
              <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                <SignInButton icon={icon4} provider="GitLab" />
                <SignInButton provider="SSO" isCustomIcon={true} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="cursor-pointer">
        <span>
          By signing up you agree to the <b>Privacy Policy.</b>
        </span>
      </div>
    </div>
  );
};

export default AuthRight;
