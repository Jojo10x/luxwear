import { useState, useEffect } from 'react';
import { storage } from '../Firebase-config';
import { ref, getDownloadURL,listAll } from 'firebase/storage';

const PhotoGallery = () => {
    const [imgUrl, setImgUrl] = useState([]);

    useEffect(() => {
        listAll(ref(storage, "images"))
          .then((imgs) => {
            const promises = imgs.items.map((val) => getDownloadURL(val));
            return Promise.all(promises);
          })
          .then((urls) => {
            setImgUrl(urls);
          })
          .catch((error) => {
            console.error("Error fetching images:", error);
          });
      }, []);
    

    return (
      <div>
         {imgUrl.map((dataVal,id) => (
        <div key={id}>
          <img src={dataVal} height="200px" width="200px" />
          <br />
        </div>
      ))}
      </div>
    );
};

export default PhotoGallery;