import { Col, Row } from "antd";
import React from "react";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
import styled from "styled-components";

const SidebarStyled = styled.div`
  background: #004400;
  color: white;
  height: 100vh;
`;
function Sidebar(props) {
  return (
    <SidebarStyled>
      <Row>
        <Col span={24}>
          <UserInfo></UserInfo>
        </Col>
        <Col span={24}>
          <RoomList></RoomList>
        </Col>
      </Row>
    </SidebarStyled>
  );
}

export default Sidebar;
