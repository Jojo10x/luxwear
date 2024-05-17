import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts} from "../utils/products";
import {useComingSoon} from '../components/FirebaseProductDetails/Stuff'
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
// import PhotoGallery from "../Firebase/PhotoGallery";

const Home = () => {
  const comingsoon = useComingSoon();
  const newArrivalData = products.filter(
    (item) => item.category === "hoodie" || item.category === "denim"
  );
  const bestSales = products.filter((item) => item.category === "shirt");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
      {/* <PhotoGallery/> */}
      <Section
        title="Coming Soon"
        bgColor="white"
        productItems={comingsoon}
      />
    </Fragment>
  );
};

export default Home;
