import { Link } from "react-router-dom";

export default function LoginFormInputs() {
  return (
    <>
      <h1 className="text-center">Login</h1>
      <p className="text-center my-3">
        Sign in to enjoy our services and get unlimited access to our shopping
        collections.
      </p>
      <input
        className="w-[100%] my-3 py-3 pl-3 border rounded-[0.5rem] inline-block cursor-pointer outline-none focus:outline-[#4baf47] hover:outline-[#4baf47]"
        type="text"
        placeholder="Enter Your Email"
      />
      <input
        className="w-[100%] my-3 py-3 pl-3 border rounded-[0.5rem] inline-block cursor-pointer outline-none focus:outline-[#4baf47] hover:outline-[#4baf47]"
        type="password"
        placeholder="Enter Your Password"
      />
      <div className="flex justify-between my-3">
        <div>
          <label className="block">
            <input type="checkbox" name="checkbox" />
            <span> Stay Signed in</span>
          </label>
        </div>
        {/* link routing */}
        <p>
          <Link className="text-[#4BAF47]" to="#">Forgot Password?</Link>
        </p>
      </div>
      <button
        className="w-[100%] bg-[#4BAF47] py-2 rounded-[0.5rem] text-[#fff]"
        type="submit"
      >
        Sign In
      </button>
      <p className="text-center mt-5">
        Don’t have an account?{" "}
        <Link className="text-[#4BAF47]" to="/register">
          Register
        </Link>{" "}
      </p>
    </>
  );
}
