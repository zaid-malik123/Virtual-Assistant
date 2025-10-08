import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/authBg.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import Card from "../component/Card";
import { RiImageAddFill } from "react-icons/ri";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Customize = () => {
  const {
    setFrontendImage,
    setBackendImage,
    frontendImage,
    backendImage,
    selectedImage,
    setSelectedImage,
  } = useContext(UserData);
  const inputImage = useRef(null);
  const navigate = useNavigate()
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
  };

  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]">
      <h1 className="text-white text-[30px] text-center mb-[40px]">
        Select Your <span className="text-[#3b82f6]"> Assistant Image</span>
      </h1>
      <div className="w-full max-w-[900px] flex justify-center items-center gap-[15px] flex-wrap">
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />
        <div
          onClick={() => {
            inputImage.current.click();
            setSelectedImage("custom");
          }}
          className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-[#04043d] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer transition-all duration-300 hover:border-4 hover:border-white flex justify-center items-center ${
            selectedImage === "custom"
              ? "border-4 border-white shadow-2xl shadow-blue-950"
              : ""
          }`}
        >
          {frontendImage ? (
            <img
              src={frontendImage}
              alt="custom"
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <RiImageAddFill size={40} color="white" />
          )}
        </div>
        <input
          onChange={handleImageChange}
          type="file"
          accept="image/*"
          ref={inputImage}
          hidden
        />
      </div>
      {selectedImage && (
        <button onClick={()=> navigate("/customize2")} className="w-[150px] h-[60px] bg-white mt-[30px] text-black rounded-full text-[20px] font-semibold">
          Next
        </button>
      )}
    </div>
  );
};

export default Customize;
