import  { useState, useEffect } from "react";
import { ref, getDownloadURL,listAll ,getMetadata} from 'firebase/storage';
import { storage } from '../../Firebase-config';

const defaultProduct = {
  id: "",
  productName: "",
  imgUrl: "",
  category: "shirt",
  price: "",
  discount: 30,
  shortDesc: "Bandana Vacation short-sleeve shirt",
  description: "Bandana Vacation short-sleeve shirt",
  reviews: [
    {
      rating: 4.7,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
  avgRating: 4.5,
};

const fetchProducts = async (categoryPath) => {
  try {
    const imgs = await listAll(ref(storage, categoryPath));
    const promises = imgs.items.map(async (val) => {
      const url = await getDownloadURL(val);
      try {
        const metadata = await getMetadata(val);
        const { price,id,category,shortDesc,description,imageName } = metadata.customMetadata || {};
        return { url, imageName, price, id,category,shortDesc,description };
      } catch (error) {
        console.error("Error fetching metadata for image:", error);
        return { url, imageName:" ", price: "", id: "", category: " ", shortDesc: " ", description: " " };
      }
    });
    return await Promise.all(promises);
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    return [];
  }
};

const processProducts = (imageURLs) => {
  return imageURLs.map((image) => ({
    id: image.id,
    productName: image.imageName,
    imgUrl: image.url,
    category: image.category,
    price: image.price,
    discount: 30,
    shortDesc: image.shortDesc,
    description: image.description,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  }));
};

export const useComingSoon = () => {
  const [comingSoon, setComingSoon] = useState([defaultProduct]);

  useEffect(() => {
    const fetchComingSoon = async () => {
      const data = await fetchProducts("images");
      const processedData = processProducts(data);
      setComingSoon(processedData.length > 0 ? processedData : [defaultProduct]);
    };
    fetchComingSoon();
  }, []);

  return comingSoon;
};

export const useDiscountProducts = () => {
  const [discountProducts, setDiscountProducts] = useState([defaultProduct]);

  useEffect(() => {
    const fetchDiscountProducts = async () => {
      const data = await fetchProducts("imagesdisount");
      const processedData = processProducts(data);
      setDiscountProducts(processedData.length > 0 ? processedData : [defaultProduct]);
    };
    fetchDiscountProducts();
  }, []);

  return discountProducts;
};

export const useNewArrivalData = () => {
  const [newArrivalData, setNewArrivalData] = useState([defaultProduct]);

  useEffect(() => {
    const fetchNewArrivalData = async () => {
      const data = await fetchProducts("imagesnew");
      const processedData = processProducts(data);
      setNewArrivalData(processedData.length > 0 ? processedData : [defaultProduct]);
    };
    fetchNewArrivalData();
  }, []);

  return newArrivalData;
};

export const useBestSales = () => {
  const [bestSales, setBestSales] = useState([defaultProduct]);

  useEffect(() => {
    const fetchBestSales = async () => {
      const data = await fetchProducts("imagebest");
      const processedData = processProducts(data);
      setBestSales(processedData.length > 0 ? processedData : [defaultProduct]);
    };
    fetchBestSales();
  }, []);

  return bestSales;
};
