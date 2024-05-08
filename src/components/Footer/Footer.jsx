import "./style.css"
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap"
import { IonIcon } from '@ionic/react';
import { bag} from 'ionicons/icons';

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <div className="logo">
          <IonIcon icon={bag} />
          <h1>Luxury Wear</h1>
        </div>
      </Link>
      <p>
        Discover the epitome of luxury with our exclusive collection. Immerse
        yourself in elegance and sophistication.
      </p>
      <div className="separator"></div>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Our Story</li>
              <li>Brand Values</li>
              <li>Press & Media</li>
              <li>Careers</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Shop</h2>
            <ul>
              <li>Mens Clothing</li>
              <li>Suits</li>
              <li>Shirts</li>
              <li>Pants</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Service</h2>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Follow Us</h2>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Pinterest</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
