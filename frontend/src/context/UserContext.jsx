import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { serverUrl } from "../App";

export const UserData = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- added

  const handleCurrentUser = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/user/currUser`, {
        withCredentials: true,
      });
      setUser(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // <-- stop loading no matter success or fail
    }
  };

  useEffect(() => {
    handleCurrentUser();
  }, []);

  const value = {
    user,
    setUser,
    loading, // <-- pass this too
  };

  return (
    <UserData.Provider value={value}>{children}</UserData.Provider>
  );
};

export default UserContext;
