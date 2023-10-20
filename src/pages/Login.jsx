import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="relative pt-16 w-full h-full min-h-[calc(100vh-88px)] object-cover flex items-center justify-center px-4">
      <div className=" absolute inset-0" />
      <div className="mx-auto  w-full sm:max-w-sm min-h-full rounded-md bg-gray-100  dark:bg-slate-700 text-white z-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
