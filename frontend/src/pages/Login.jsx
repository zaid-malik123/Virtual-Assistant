import { useState } from "react";
import bg from "../assets/authBg.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";
import { useContext } from "react";
import { UserData } from "../context/UserContext";

const Login = () => {
  const { setUser, user } = useContext(UserData);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      setUser(res.data)
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      className="w-full h-[100vh] bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-[90%] h-[600px] max-w-[500px] bg-[#00000041] backdrop-blur-md shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px]"
      >
        <h1 className="text-white text-[30px] font-semibold mb-[30px]">
          Login to <span className="text-blue-400">Virtual Assistant</span>
        </h1>
        {error && (
          <p className="text-red-500 text-[16px] mb-[10px]">{error}</p>
        )}
        <input
          className="w-full h-[60px] border-2 border-white bg-transparent text-white placeholder:text-[#ffffffb3] px-4 outline-0 rounded-full text-[20px]"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="w-full h-[60px] relative flex items-center justify-center rounded-full">
          <input
            className="w-full h-full border-2 border-white bg-transparent text-white placeholder:text-[#ffffffb3] px-4 outline-0 rounded-full text-[20px]"
            type={`${showPass ? "text" : "password"}`}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            onClick={() => setShowPass((prev) => !prev)}
            className="absolute top-[20px] right-[30px]"
          >
            {showPass ? (
              <FaRegEyeSlash size={20} color="white" />
            ) : (
              <FaRegEye size={20} color="white" />
            )}
          </div>
        </div>
        <button className="w-[150px] h-[60px] bg-white mt-[30px] text-black rounded-full text-[20px] font-semibold">
          Login
        </button>
        <p className="text-white">
          Want to create an Account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-400 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;