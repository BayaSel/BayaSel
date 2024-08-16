import RegisterFormInput from "../components/Form/RegisterFormInput";

export default function RegisterForm() {
  return (
    <div className="flex flex-col lg:flex-row-reverse w-full">
      <div className="basis-1/2">
        <img src="/logindesktop.png" alt="image of goods" className="hidden lg:block h-screen w-full" />
        <img src="/loginmobile.png" alt="image of goods" className="lg:hidden" />
      </div>
        <form action="" className="flex flex-col justify-center items-center basis-1/2">
            <RegisterFormInput />
        </form>
    </div>
  )
}
