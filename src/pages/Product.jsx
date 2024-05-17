import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import {useComingSoon} from '../components/FirebaseProductDetails/Stuff'
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Product = () => {
  const comingsoon = useComingSoon();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    const findProductById = (arr, id) => arr.find(item => parseInt(item.id) === parseInt(id));
  
    const selectedProduct = findProductById(products, id) || findProductById(comingsoon, id);
  
    setSelectedProduct(selectedProduct);
  }, [comingsoon, id]);
  
  

  console.log("selectedProduct:",selectedProduct);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
  window.scrollTo(0, 0);
  setSelectedProduct(
    products.filter((item) => parseInt(item.id) === parseInt(id))[0]
  );
}, [id]);

useEffect(() => {
  if (selectedProduct) {
    setRelatedProducts(
      products.filter(
        (item) =>
          item.category === selectedProduct.category &&
          item.id !== selectedProduct.id
      )
    );
  }
}, [selectedProduct]);

  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title={selectedProduct?.productName} />
      <ProductDetails selectedProduct={selectedProduct} />
      <ProductReviews selectedProduct={selectedProduct} />
      <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={relatedProducts} />
      </section>
    </Fragment>
  );
};

export default Product;
