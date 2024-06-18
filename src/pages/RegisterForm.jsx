import RegisterFormInput from "../components/Form/RegisterFormInput";

export default function RegisterForm() {
  return (
    <div className="md:min-h-[100svh] grid place-content-center">
        <form  className="p-[3rem] shadow-2xl" action="">
            <RegisterFormInput />
        </form>
    </div>
  )
}
