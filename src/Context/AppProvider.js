import { Spin } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import useFireStore from "../hooks/useFireStore";
import { AuthContext } from "./AuthProvider";

export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const {
    user: { uid },
  } = React.useContext(AuthContext);
  /**
   * {
   *  name: 'room name',
   *  description: 'mo ta',
   *  members: [uid1, uid2, ...]
   * }
   */
  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);
  const rooms = useFireStore("rooms", roomsCondition);
  console.log({ rooms });
  return (
    <AppContext.Provider
      value={{ rooms, isAddRoomVisible, setIsAddRoomVisible }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
