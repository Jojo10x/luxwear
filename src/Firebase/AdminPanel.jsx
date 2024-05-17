import { useState } from 'react';
import { storage } from '../Firebase-config';
import { ref, uploadBytes} from 'firebase/storage';
import CategorySelector from './CategorySelector';
// import { v4 } from "uuid";
import "./panel.css"

const AdminPanel = () => {
  const [img, setImg] = useState(null);
  const [imageName, setImageName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");

  const generateRandomId = () => {
    return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  };

  const handleUpload = () => {
    if (img) {
      const imageId = generateRandomId();
      const imgRef = ref(storage, `images/${imageName}`);

      const metadata = {
        contentType: img.type,
        customMetadata: {
          imageName: imageName,
          price: price,
          category: category,
          shortDesc: shortDesc,
          description: description,
          id: imageId.toString(),
        },
      };

      uploadBytes(imgRef, img, metadata)
        .then((snapshot) => {
          console.log("Uploaded successfully:", snapshot);
          alert("Uploaded successfully");
          setImg(null);
          setImageName("");
          setPrice("");
          setCategory("");
          setShortDesc("");
          setDescription("");
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="upload-section">
        <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <input
        type="text"
        placeholder="Enter Image Name"
        value={imageName}
        onChange={(e) => setImageName(e.target.value)}
      />

     
      <input
        type="text"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter short description"
        value={shortDesc}
        onChange={(e) => setShortDesc(e.target.value)}
      />
     
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <CategorySelector category={category} setCategory={setCategory} />
        <p>Selected Category: {category}</p>
      </div>
    </div>
  );
};
  
export default AdminPanel;