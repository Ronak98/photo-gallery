import { Typography } from "antd";

const { Title } = Typography;

const headerStyle = {
  textAlign: "center",
  fontSize: "1.4rem",
  fontWeight: 800,
  margin: 0,
};

const HeaderContainer = ({ name }) => {
  return <Title style={headerStyle}>{name}</Title>;
};

export default HeaderContainer;
