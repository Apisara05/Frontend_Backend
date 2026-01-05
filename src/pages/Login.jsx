import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";
const Login = () => {
  const [user, setUser] = useState({
    //จะได้ สมาชิก 2 ตัวเสมอ ตัวแรก  ค่า state ตัวที่สอง  ฟังก์ชั่น ของ (state) setState
    username: "",
    password: "",
  });
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((u) => ({ ...u, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.username || !user.password) {
      Swal.fire({
        title: "Error",
        text: "Username or Password cannot be empty!",
        icon: "error",
      });
      return;
    }

    try {
      const response = await AuthService.login(user.username, user.password);
      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Logged in successfully",
          icon: "success",
        }).then(() => {
          login({
            id: response.data.id,
            username: response.data.username,
            accessToken: response.data.accessToken,
          });
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Login failed",
        icon: "error",
      });
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="Submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          <p className="text-sm text-center mt-2">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-blue-600 hover:underline"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
