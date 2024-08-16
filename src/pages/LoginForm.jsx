// import LoginFormImg from "../components/Form/LoginFormImg";
import LoginFormInputs from "../components/Form/LoginFormInputs";
function LoginForm() {
  return (
    <div className="flex flex-col lg:flex-row-reverse w-full">
      <div className="basis-1/2">
        <img src="/logindesktop.png" alt="image of goods" className="hidden lg:block h-screen w-full" />
        <img src="/loginmobile.png" alt="image of goods" className="lg:hidden" />
      </div>
      <form action="" className="flex flex-col justify-center items-center basis-1/2">
        <LoginFormInputs />
        {/* <LoginFormImg /> */}
      </form>
    </div>
  );
}

export default LoginForm;
