import { useState } from "react";
import Heading from "../components/Heading";
import LoginPage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";

const Login = () => {
  const [isPage, setPage] = useState<"login" | "register">("login");
  if (isPage == "login")
    return (
      <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
        <Heading text={"Login"} />
        <LoginPage setPage={setPage} />
      </div>
    );
  if (isPage == "register")
    return (
      <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
        <Heading text={"Register"} />
        <RegisterPage setPage={setPage} />
      </div>
    );
};

export default Login;
