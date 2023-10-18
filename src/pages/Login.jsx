import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="relative bg-[url('https://i.ibb.co/f4ZTf12/event-1.jpg')] w-full h-full min-h-[calc(100vh-88px)] object-cover flex items-center justify-center px-4">
      <div className="bg-black/40 absolute inset-0" />
      <div className="mx-auto  w-full sm:max-w-sm min-h-full rounded-md bg-[#151515] text-white z-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
