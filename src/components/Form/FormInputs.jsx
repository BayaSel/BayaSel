
export default function FormInputs() {
  return (
    <>
        <h1>Login</h1>
        <p>
          Sign in to enjoy our services and get unlimited access to our shopping
          collections.
        </p>
        <input type="text" placeholder="Enter Your Email"/>
        <input type="password" placeholder="Enter Your Password"/>
        <div className="comform">
          <label htmlFor="">
            Stay Signed in
            <input type="checkbox" name="" id="" />
          </label>
          {/* link routing */}
          <p><a href="#">Forgot Password?</a></p>
        </div>
        <input type="button" value="Sign In" />
        <p>Don’t have an account?  Register </p>
    </>
  )
}
