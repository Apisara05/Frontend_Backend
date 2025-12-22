import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Navbar = () => {
  const { userInfo, logout } = useContext(UserContext);
  const username = userInfo?.username;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">
        <Link to="/">SE NPRU BLOG</Link>
      </div>

      <ul className="flex space-x-6 items-center">
        {username ? (
          <>
            <li className="cursor-pointer hover:text-gray-300">
              <Link to="/create-post">Create a new Post</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              <span className="font-semibold">{username}</span>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              <button onClick={handleLogout} className="hover:underline">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="cursor-pointer hover:text-gray-300">
              <Link to="/login">Login</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
