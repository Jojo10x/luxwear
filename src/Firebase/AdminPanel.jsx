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
  const [selectedDatabase, setSelectedDatabase] = useState("comingSoon");

  const generateRandomId = () => {
    return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  };

  const handleUpload = () => {
    if (img) {
      const imageId = generateRandomId();
      let imgRef;

      switch (selectedDatabase) {
        case "comingSoon":
          imgRef = ref(storage, `images/${imageName}`);
          break;
        case "bestSales":
          imgRef = ref(storage, `imagebest/${imageName}`);
          break;
        case "newArrivalData":
          imgRef = ref(storage, `imagesnew/${imageName}`);
          break;
        case "discountProducts":
          imgRef = ref(storage, `imagesdisount/${imageName}`);
          break;
        default:
          imgRef = ref(storage, `images/${imageName}`); // Default to 'images' database
          break;
      }

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
        <select onChange={(e) => setSelectedDatabase(e.target.value)}>
          <option value="comingSoon">Upload to Coming Soon</option>
          <option value="bestSales">Upload to Best Sales</option>
          <option value="newArrivalData">Upload to New Arrivals</option>
          <option value="discountProducts">Upload to Discount Products</option>
        </select>
        <p>Selected Category: {selectedDatabase}</p>
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