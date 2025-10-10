import React from "react";
import { useContext } from "react";
import { UserData } from "../context/UserContext";

const Card = ({ image }) => {
  const {
    setFrontendImage,
    setBackendImage,
    frontendImage,
    backendImage,
    selectedImage,
    setSelectedImage,
  } = useContext(UserData);
  return (
    <div
      onClick={() => {
        setSelectedImage(image);
        setBackendImage(null);
        setFrontendImage(null);
      }}
      className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-[#04043d] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer transition-all duration-300 hover:border-4 hover:border-white ${
        selectedImage === image
          ? "border-4 border-white shadow-2xl shadow-blue-950"
          : ""
      }`}
    >
      <img
        src={image}
        alt="Card Image"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default Card;
