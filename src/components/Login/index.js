import React from "react";
import { Row, Col, Button } from "antd";
import Title from "antd/lib/typography/Title";
import firebase, { auth, db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { addDocument } from "../../firebase/service";
const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
// Đối với V6 React-router-dom không useHistory -> useNavigate
//  Lưu ý: Sau khi đăng nhập thì cần check các thông tin trong data như additionalUserInfo xem dữ liệu isNewUser là true hay false
function Login() {
  // const navigate = useNavigate();
  // const handleFblogin = async () => {
  //   const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
  //   // console.log({ data });
  //   // Kiểm tra xem có phải là user mới hay không
  //   if (additionalUserInfo?.isNewUser) {
  //     // db.collection("users").add({
  //     //   displayName: user.displayName,
  //     //   email: user.email,
  //     //   photoURL: user.photoURL,
  //     //   uid: user.displayName,
  //     //   providerId: additionalUserInfo.providerId,
  //     // });
  //     addDocument("users", {
  //       displayName: user.displayName,
  //       email: user.email,
  //       photoURL: user.photoURL,
  //       uid: user.displayName,
  //       providerId: additionalUserInfo.providerId,
  //     });
  //   }
  // };
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.displayName,
        providerId: additionalUserInfo.providerId,
      });
    }
  };
  // Sau khi đăng nhập thành công thì cần điều huowngsn người dùng và trong firebase có thuộc tính đó là onAuthStateChanged
  // auth.onAuthStateChanged((user) => {
  //   console.log(user);
  //   // Cần kiểm tra nếu người dùng đúng thì điều hướng người dùng tiếp theo
  //   if (user) {
  //     navigate("/");
  //   }
  // });
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} Level={3}>
            Fun Chat
          </Title>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={() => handleLogin(googleProvider)}
          >
            Đăng nhập bằng google
          </Button>
          <Button
            style={{ width: "100%" }}
            onClick={() => handleLogin(fbProvider)}
          >
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
