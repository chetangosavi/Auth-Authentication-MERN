const Login = () => {
    return (
      <div className="w-4/5 m-auto flex justify-center items-center mt-8">
        <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-center">Login</h1>
  
          <div className="flex flex-col">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border p-2 rounded-lg"
              required
            />
          </div>
  
          <div className="flex flex-col">
            <label className="font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="border p-2 rounded-lg"
              required
            />
          </div>
  
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              <span className="text-sm">Remember Me</span>
            </label>
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
  
          <button className="bg-blue-600 text-white font-semibold p-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    );
  };
  
  export default Login;
  