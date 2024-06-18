// import LoginFormImg from "../components/Form/LoginFormImg";
import LoginFormInputs from "../components/Form/LoginFormInputs";
function LoginForm() {
  return (
    <div className="md:min-h-[100svh] grid place-content-center">
      <form action="" className="p-[3rem] shadow-2xl ">
        <LoginFormInputs />
        {/* <LoginFormImg /> */}
      </form>
    </div>
  );
}

export default LoginForm;
