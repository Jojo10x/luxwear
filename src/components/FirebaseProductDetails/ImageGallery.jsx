import  { useState, useEffect } from "react";
import { ref, getDownloadURL,listAll ,getMetadata} from 'firebase/storage';
import { storage } from '../../Firebase-config';

function ImageGallery() {
    const [imgUrl, setImgUrl] = useState([]);
    const [imgPrice, setImgPrice] = useState(null);
    const [imgName, setImgName] = useState(null);
    const [imgID, setImgID] = useState(null);
  
    useEffect(() => {
      function getImageURLs() {
        return listAll(ref(storage, "images"))
          .then((imgs) => {
            const promises = imgs.items.map(async (val) => {
              const url = await getDownloadURL(val);
              try {
                // Get metadata for the image
                const metadata = await getMetadata(val);
                // const price = metadata.customMetadata.price || "";
                const { price, id } = metadata.customMetadata;
                return { url, name: val.name, price, id };
              } catch (error) {
                console.error("Error fetching metadata for image:", error);
                return { url, name: val.name, price: "", id:" " };
              }
            });
            return Promise.all(promises);
          })
          .catch((error) => {
            console.error("Error fetching image URLs:", error);
          });
      }
  
      getImageURLs()
        .then((imageURLs) => {
            if (imageURLs.length > 0) {
                imageURLs.map((image) => {
                  setImgUrl(image.url);
                  setImgPrice(image.price);
                  setImgName(image.name);
                  setImgID(image.id);
                });
              } else {
            console.error("No image URLs found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching image URLs:", error);
        });
    }, []);
  
    return { imgUrl, imgPrice,imgName,imgID };
  }

export default ImageGallery;
