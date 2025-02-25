const Register = () => {
    return (
      <div className="w-4/5 m-auto flex justify-center items-center mt-8">
        <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-center">Register</h1>
  
          <div className="flex flex-col">
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="border p-2 rounded-lg"
              required
            />
          </div>
  
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
            <label className="font-semibold">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
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
  
          <div className="flex flex-col">
            <label className="font-semibold">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-2 rounded-lg"
              required
            />
          </div>
  
          <button className="bg-blue-600 text-white font-semibold p-2 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </form>
      </div>
    );
  };
  
  export default Register;
  