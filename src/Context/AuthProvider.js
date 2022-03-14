import { Spin } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      console.log(user);
      // Cần kiểm tra nếu người dùng đúng thì điều hướng người dùng tiếp theo
      if (user) {
        // Destructuring ES6
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate("/");
        return;
      }
      navigate("/login");
    });
    // Clean funtion
    return () => {
      unsubscibed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
