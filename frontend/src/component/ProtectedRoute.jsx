import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserData } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(UserData);
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
