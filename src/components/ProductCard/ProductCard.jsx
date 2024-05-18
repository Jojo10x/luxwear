import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToCart } from "../../app/features/cart/cartSlice";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { heart } from 'ionicons/icons';

const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const handelClick = () => {
    router(`/shop/${productItem.id}`);
  };
  const handelAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to cart!");
  };
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null}
      <img
        loading="lazy"
        onClick={() => handelClick()}
        src={productItem.imgUrl}
        alt=""
      />
      <div className="product-like">
        {/* <ion-icon name="heart-outline"></ion-icon> */}
        <IonIcon icon={heart} />
      </div>
      <div className="product-details">
        <h3 onClick={() => handelClick()}>{productItem.productName}</h3>
        <div className="rate">
          <FontAwesomeIcon icon={faStar} className="golden-star" />
          <FontAwesomeIcon icon={faStar} className="golden-star" />
          <FontAwesomeIcon icon={faStar} className="golden-star" />
          <FontAwesomeIcon icon={faStar} className="golden-star" />
          <FontAwesomeIcon icon={faStar} className="golden-star" />
        </div>
        <div className="price">
          <h4>${productItem.price}</h4>
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => handelAdd(productItem)}
          >
            <IonIcon icon={add} />
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
