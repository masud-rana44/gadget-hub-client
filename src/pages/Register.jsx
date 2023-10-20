import RegistrationForm from "../components/RegistrationForm";

const Register = () => {
  return (
    <div className="mt-10 relative w-full h-full min-h-[calc(100vh-88px)] object-cover flex items-center justify-center px-4">
      <div className=" absolute inset-0" />
      <div className="mx-auto  w-full sm:max-w-sm  rounded-md bg-black dark:bg-slate-700 text-white z-10 ">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Register;
