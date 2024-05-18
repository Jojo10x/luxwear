import { useState, useEffect } from 'react';
import { storage } from '../Firebase-config';
import { useNavigate } from "react-router-dom";
import { Container, Col ,Row} from "react-bootstrap";
import "../components/ProductCard/product-card.css";
import { ref, getDownloadURL,listAll ,getMetadata} from 'firebase/storage';

const PhotoGallery = ({productItem }) => {
    const [images, setImages] = useState([]);
    const router = useNavigate();

    useEffect(() => {
      listAll(ref(storage, "images"))
        .then((imgs) => {
          const promises = imgs.items.map(async (val) => {
            const url = await getDownloadURL(val);
            try {
                // Get metadata for the image
                const metadata = await getMetadata(val);
                const price = metadata.customMetadata.price || "";
                return { url, name: val.name, price };
              } catch (error) {
                console.error("Error fetching metadata for image:", error);
                return { url, name: val.name, price: "" };
              }
            });
          return Promise.all(promises);
        })
        .then((imageData) => {
          setImages(imageData);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }, []);

    const handelClick = () => {
        router(`/shop/${productItem}`);
      };
  
    return (
      <section>
        <Container>
          <div className="heading">
            <h1>Coming Soon</h1>
          </div>
          <Row className="justify-content-center">
            {images.map((image) => (
              <Col
                key={image.name}
                md={3}
                sm={5}
                xs={10}
                className="product mtop"
              >
                <div className="product-details">
                  <img
                    src={image.url}
                    alt={image.name}
                    height="200px"
                    width="100%"
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                    onClick={() => handelClick()}
                  />
                  <h3>{image.name}</h3>
                  <div className="price">
                    <h4>${image.price}</h4>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  };

export default PhotoGallery;