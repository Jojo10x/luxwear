import  { useState, useEffect } from "react";
import { ref, getDownloadURL,listAll ,getMetadata} from 'firebase/storage';
import { storage } from '../../Firebase-config';

export function useComingSoon() {
  const [comingsoon, setComingsoon] = useState([
    {
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
    },
  ]);

  useEffect(() => {
    async function getImageURLs() {
      try {
        const imgs = await listAll(ref(storage, "images"));
        const promises = imgs.items.map(async (val) => {
          const url = await getDownloadURL(val);
          try {
            const metadata = await getMetadata(val);
            const { price, id,category,shortDesc,description } = metadata.customMetadata || {};
            return { url, name: val.name, price, id,category,shortDesc,description };
          } catch (error) {
            console.error("Error fetching metadata for image:", error);
            return { url, name: val.name, price: "", id: "",category:" ",shortDesc:" ",description:" " };
          }
        });
        const imageURLs = await Promise.all(promises);

        if (imageURLs.length > 0) {
            const updatedComingsoon = imageURLs.map((image) => ({
              id: image.id ,
              productName: image.name,
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
  
            setComingsoon(updatedComingsoon);
          }
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    }

    getImageURLs();
  }, []);

  return comingsoon;
}
