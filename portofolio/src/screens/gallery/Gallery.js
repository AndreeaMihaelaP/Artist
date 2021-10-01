import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CardImage } from "components/gallery/CardImage";

import "../../styles/gallery.css";
import img1 from "assets/background.jpg";
import img2 from "assets/img6.jpg";
import img3 from "assets/img5.jpg";
import img4 from "assets/2.jpg";
import img5 from "assets/5.jpg";

const Gallery = () => {
  useEffect(() => {
    console.log("mount");
  }, []);
  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h3 className="gallery-description">
          Welcome to our gallery.
          <p>
            Every painting is a story of healing, of seeking "love-tings" and
            "comfort-tings."
          </p>
        </h3>
        <Container>
          <Row>
            <Col>
              <CardImage image={img1} title="Static Nature" />
            </Col>
            <Col>
              <CardImage image={img2} title="Portrete" />
            </Col>
            <Col>
              <CardImage image={img5} title="Abstract" />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardImage image={img4} title="Peisaj" />
            </Col>
            <Col>
              <CardImage image={img3} title="Icoane" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Gallery;
