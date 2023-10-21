import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";

import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Separator } from "./ui/Separator";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginWithEmail, isLoading, setIsLoading, signInWithGoogle } =
    useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (!email || !password) {
      return toast.error("Missing required fields");
    }

    try {
      await loginWithEmail(email, password);

      toast.success("You've successfully logged in");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegistration = async () => {
    try {
      await signInWithGoogle();

      toast.success("You've successfully logged in");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex text-slate-800 dark:text-gray-100 min-h-full w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight ">
        Login to your account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 mt-10">
        <Input
          id="email"
          label="Email address"
          type="email"
          disabled={isLoading}
          value={form.email}
          onChange={handleChange}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          value={form.password}
          onChange={handleChange}
        />

        <Button
          disabled={isLoading}
          type="submit"
          className="w-full bg-gradient-to-r from-[#66b8dd] via-[#8e7fe9] to-[#e17497]"
        >
          Login
        </Button>
        <div>
          <div className="flex h-8 items-center space-x-6 mb-3">
            <Separator />
            <p className="flex-1 basis-[150%] text-sm font-medium">
              Or continue with
            </p>
            <Separator />
          </div>
          <div className="flex items-center gap-x-4">
            <Button
              onClick={handleGoogleRegistration}
              type="button"
              disabled={isLoading}
              className="w-full  rounded-md 
        transition flex items-center gap-x-2 bg-gray-100 justify-center"
            >
              <AiOutlineGoogle /> Google
            </Button>
          </div>

          <p className="text-sm text-center font-medium mt-6">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-700 dark:text-indigo-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
