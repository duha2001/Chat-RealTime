import { Button, Collapse, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
import { AppContext } from "../../Context/AppProvider";
import AppProvider from "../../Context/AppProvider";

const { Panel } = Collapse;
// Muốn overrive lại Panel thì cần bọc nằm trong dấu ngoặc
// Để độ ưu tiên hơn thì dùng &&&
const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;
function RoomList() {
  const { rooms } = React.useContext(AppContext);
  console.log(rooms);

  // const {
  //   user: { uid },
  // } = React.useContext(AuthContext);
  // /**
  //  * {
  //  *  name: 'room name',
  //  *  description: 'mo ta',
  //  *  members: [uid1, uid2, ...]
  //  * }
  //  */
  // const roomsCondition = React.useMemo(() => {
  //   return {
  //     fieldName: "members",
  //     operator: "array-contains",
  //     compareValue: uid,
  //   };
  // }, [uid]);
  // const rooms = useFireStore("rooms", roomsCondition);
  // console.log({ rooms });
  return (
    <Collapse ghost defaultActiveKey={[1]}>
      <PanelStyled header="Danh sách các phòng" key="1">
        {rooms.map((room) => (
          <LinkStyled key={room.id}>{room.name}</LinkStyled>
        ))}
        <Button type="text" icon={<PlusSquareOutlined />} className="add-room">
          Thêm phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

export default RoomList;
