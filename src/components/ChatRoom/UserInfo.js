import { Avatar, Button, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import firebase, { auth, db } from "../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #555555;
  .username {
    color: white;
    margin-left: 5px;
  }
`;
function UserInfo() {
  // React.useEffect(() => {
  //   db.collection("users").onSnapshot((snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log({ data, snapshot, docs: snapshot.docs });
  //   });
  // }, []);
  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);
  // console.log(data);
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL
            ? ""
            : displayName && displayName.chatAt(0) && displayName.toUpperCase()}
        </Avatar>
        <Typography.Text className="username">{displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
}

export default UserInfo;
