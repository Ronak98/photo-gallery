import { useState } from "react";
import { Layout, Col, Row, Image } from "antd";
import Lightbox from "yet-another-react-lightbox";
import HeaderContainer from "../shared-components/header/HeaderContainer";
import galleryData from "../json/galleryData.json";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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
  const [index, setIndex] = useState(-1);

  return (
    <Layout style={layoutStyle}>
      <HeaderContainer name="Photo Gallery!" />
      <Content>
        <div style={contentStyle}>
          <Row gutter={[16, 16]}>
            {galleryData.map(({ id, src }, index) => (
              <Col key={id} xs={24} sm={12} md={8} lg={6}>
                <Image
                  src={src}
                  width="100%"
                  preview={{ visible: false }}
                  onClick={() => setIndex(index)}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Content>
      <Lightbox
        slides={galleryData}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
      />
    </Layout>
  );
}

export default GalleryContainer;
