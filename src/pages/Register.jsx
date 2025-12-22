import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/authentication.service";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SUBMIT CLICKED", user);

    if (!user.username || !user.password) {
      Swal.fire({
        title: "Error",
        text: "Username or Password cannot be empty!",
        icon: "error",
      });
      return;
    }

    try {
      const response = await AuthService.register(user.username, user.password);

      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        Swal.fire({
          title: "Success",
          text: response.data?.message || "Registered successfully",
          icon: "success",
        }).then(() => {
          navigate("/login");
        });
        // Fallback redirect in case promise isn't handled (ensures navigation)
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Register failed",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
