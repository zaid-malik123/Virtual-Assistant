import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { UserData } from '../context/UserContext';
import axios from 'axios';
import { serverUrl } from '../App';
import { useNavigate } from 'react-router-dom';

const Customize2 = () => {
  const { user, backendImage, selectedImage, setUser } = useContext(UserData);
  const [name, setName] = useState(user?.assistantName || "");
  const navigate = useNavigate()
  const handleUpdateAssistant = async () => {
    try {
      const formData = new FormData();
      formData.append("assistantName", name);
      if(backendImage){
        formData.append("assistantImage", backendImage);
      } else {
        formData.append("imageUrl", selectedImage);
      }
     
      const res = await axios.post(`${serverUrl}/api/user/updateAssistant`, formData, {withCredentials: true});
      setUser(res.data);
    } catch (error) {
      console.error("Error updating assistant:", error);
    }
  };

  return (
    <div  className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]">
      <h1 className='text-white text-[30px] text-center mb-[40px]'>Enter Your <span className='text-[#3b82f6]'>Assistant's Name</span></h1>
       <input
          className="w-full max-w-[600px] h-[60px] border-2 border-white bg-transparent text-white placeholder:text-[#ffffffb3] px-4 outline-0 rounded-full text-[20px]"
          type="text"
          placeholder="Enter your assistant's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name && (
          <button onClick={()=> {
            navigate("/customize2")
            handleUpdateAssistant()
            }} className="w-[200px] h-[60px] bg-white mt-[30px] text-black rounded-full text-[20px] font-semibold">
          Create Assistant
        </button>
        )}
    </div>
  )
}

export default Customize2
