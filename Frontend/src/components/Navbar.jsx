import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex w-4/5 m-auto justify-between p-4">
      <div className="text-2xl font-bold">LOGO</div>
      <div className="flex gap-4">
        <Link to="/login"><button className="bg-blue-500 shadow-lg text-white px-4 py-2 rounded-lg">Login</button></Link>
        <Link to="/register"><button className="bg-blue-500 shadow-lg text-white px-4 py-2 rounded-lg">Register</button></Link>
      </div>
    </div>
  )
}

export default Navbar