import { useState } from 'react';
import { storage } from '../Firebase-config';
import { ref, uploadBytes} from 'firebase/storage';
import { v4 } from "uuid";

const AdminPanel = () => {
    const [img, setImg] = useState(null); 

    const handleUpload = (file) => {
      if (file) {
        const imgRef = ref(storage, `images/${v4()}`);
        uploadBytes(imgRef, file).then((snapshot) => {
          console.log("Uploaded successfully:", snapshot);
          alert("Uploaded successfully")
          setImg(null); 
        }).catch((error) => {
          console.error("Error uploading image:", error);
        });
      }
    };
  
    return (
      <div className="admin-panel">
        <h2>Admin Panel</h2>
        <div className="upload-section">
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
          <button onClick={() => handleUpload(img)}>Upload</button>
        </div>
      </div>
    );
  }

export default AdminPanel;