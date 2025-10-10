import React from "react";
import { useContext } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";

const Home = () => {
  const { user, setUser } = useContext(UserData);
  const navigate = useNavigate()
  const handleLogout = async ()=>{
    try {
    const res = await axios.get(`${serverUrl}/api/auth/logout`,{withCredentials:true})
    setUser(null)
    navigate("/login")
    } catch (error) {
      setUser(null)
      console.log(error)
    }
  }
  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px] gap-[15px]">
      <button
        onClick={handleLogout}
        className="w-[150px] h-[60px] bg-white mt-[30px] text-black rounded-full text-[20px] font-semibold absolute top-[20px] right-[20px]"
      >
        LogOut
      </button>
      <button
        onClick={() => navigate("/customize")}
        className="min-w-[150px] h-[60px] bg-white mt-[30px] text-black rounded-full text-[20px] font-semibold absolute top-[100px] right-[20px] px-[20px] py-[10px]"
      >
        Customize Your Assistant
      </button>
      <div className="w-[300px] h-[400px] flex justify-center items-center overflow-hidden rounded-4xl shadow-lg">
        <img
          className="h-full object-cover "
          src={user?.assistantImage}
          alt=""
        />
      </div>
      <h1 className="text-white text-[18px] font-semibold">
        I'm {user.assistantName}
      </h1>
    </div>
  );
};

export default Home;
