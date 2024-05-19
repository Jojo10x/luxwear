import { useComingSoon,useDiscountProducts,useNewArrivalData,useBestSales } from "./ProductDataHooks";

export const useProductOptions = () => {
    const comingSoon = useComingSoon();
    const discountProducts = useDiscountProducts();
    const newArrivalData = useNewArrivalData();
    const bestSales = useBestSales();
  
    return {
      comingSoon,
      discountProducts,
      newArrivalData,
      bestSales,
    };
  };
  