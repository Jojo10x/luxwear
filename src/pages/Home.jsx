import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
// import { products, discoutProducts} from "../utils/products";
import { useProductOptions} from '../components/FirebaseProductDetails/useProductOptions'
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
// import PhotoGallery from "../Firebase/PhotoGallery";

const Home = () => {
  const { comingSoon,bestSales,newArrivalData,discountProducts } = useProductOptions();
  const newArrivalD = newArrivalData.filter(
    (item) => item.category === "hoodie" || item.category === "coat"
  );
  const best = bestSales.filter((item) => item.category === "shirt"|| item.category === "denim");


  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discountProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalD}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={best} />
      {/* <PhotoGallery/> */}
      <Section
        title="Coming Soon"
        bgColor="white"
        productItems={comingSoon}
      />
    </Fragment>
  );
};

export default Home;
