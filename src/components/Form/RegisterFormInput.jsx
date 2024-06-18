import { Link } from "react-router-dom";

export default function RegisterFormInput() {
  return (
    <>
      <h1 className="text-center">Get Started</h1>
      <p className="text-center my-3">
        Sign up to enjoy our services and get unlimited access to our shopping
        collections.
      </p>
      <div>
        <input
          className="w-[100%] my-3 py-3 pl-3 border rounded-[0.5rem] inline-block cursor-pointer outline-none focus:outline-[#4baf47] hover:outline-[#4baf47]"
          type="text"
          placeholder="Enter First name"
          required
        />
        <input
          className="w-[100%] my-3 py-3 pl-3 border rounded-[0.5rem] inline-block cursor-pointer outline-none focus:outline-[#4baf47] hover:outline-[#4baf47]"
          type="text"
          placeholder="Enter last name"
          required
        />
      </div>
      <div>
        <input
          className="w-[100%] my-3 py-3 pl-3 border rounded-[0.5rem] inline-block cursor-pointer outline-none focus:outline-[#4baf47] hover:outline-[#4baf47]"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <input
          className="w-[100%] my-3 py-3 pl-3 border rounded-[0.5rem] inline-block cursor-pointer outline-none focus:outline-[#4baf47] hover:outline-[#4baf47]"
          type="tel"
          placeholder="Enter phone no"
          required
        />
      </div>
      <div>
        <input
          className="w-[100%] my-3 py-3 pl-3 border rounded-[0.5rem] inline-block cursor-pointer outline-none focus:outline-[#4baf47] hover:outline-[#4baf47]"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <input
          className="w-[100%] my-3 py-3 pl-3 border rounded-[0.5rem] inline-block cursor-pointer outline-none focus:outline-[#4baf47] hover:outline-[#4baf47]"
          type="password"
          placeholder="Confirm Your Password"
          required
        />
      </div>
      <div className="">
        <label className="cursor-pointer">
          <input className="p-[20rem] my-3 bg-[#4BAF47]" type="checkbox" required />
          <span> Remember Password</span>
        </label>
      </div>
      <div>
        <label className="cursor-pointer">
          <input className=" my-3 bg-[#4BAF47]" type="checkbox" required />
          <span> I have agreed to terms and condition</span>
        </label>
      </div>
      <button
        className="w-[100%] bg-[#4BAF47] mt-2 py-2 rounded-[0.5rem] text-[#fff]"
        type="submit"
      >
        Sign Up
      </button>
      <p className="text-center my-2">
        Already have an account? <Link className="text-[#4BAF47]" to="/login">Login</Link>
      </p>
    </>
  );
}
