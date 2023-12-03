import { Layout, Col, Row, Image } from "antd";
import galleryData from "../json/galleryData.json";
import "../style.css";
import HeaderContainer from "../shared-components/HeaderContainer";

const { Content } = Layout;

const layoutStyle = {
  backgroundColor: "inherit",
  padding: "3rem 2.4rem",
  height: "100%",
};

const contentStyle = {
  padding: "3rem 0",
};

function GalleryContainer() {
  return (
    <Layout style={layoutStyle}>
      <HeaderContainer name={"Photo Gallery!"} />
      <Content>
        <div style={contentStyle}>
          <Image.PreviewGroup>
            <Row gutter={[16, 16]}>
              {galleryData.map(({ id, path }) => (
                <Col key={id} xs={24} sm={12} md={8} lg={6}>
                  <Image width={"100%"} src={path} />
                </Col>
              ))}
            </Row>
          </Image.PreviewGroup>
        </div>
      </Content>
    </Layout>
  );
}

export default GalleryContainer;
