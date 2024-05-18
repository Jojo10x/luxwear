import { useState, useEffect } from 'react';
import { storage } from '../Firebase-config';
import { ref, listAll, getMetadata, updateMetadata, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import "./panel.css"

const EditAdminPanel = () => {
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [imageName, setImageName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDatabase, setSelectedDatabase] = useState('comingSoon');
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    const fetchRecords = async () => {
      const dbCollections = {
        comingSoon: 'images/',
        bestSales: 'imagebest/',
        newArrivalData: 'imagesnew/',
        discountProducts: 'imagesdisount/',
      };
      const storageRef = ref(storage, dbCollections[selectedDatabase]);
      const response = await listAll(storageRef);
      const items = response.items;

      const metadataPromises = items.map((itemRef) => getMetadata(itemRef));
      const metadataArray = await Promise.all(metadataPromises);
      setRecords(metadataArray);
    };

    fetchRecords();
  }, [selectedDatabase]);

  const handleSelectRecord = (record) => {
    setSelectedRecord(record);
    setImageName(record.customMetadata?.imageName || '');
    setPrice(record.customMetadata?.price || '');
    setCategory(record.customMetadata?.category || '');
    setShortDesc(record.customMetadata?.shortDesc || '');
    setDescription(record.customMetadata?.description || '');
    setNewImage(null); // Reset new image
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * (50 - 1 + 1)) + 50;
  };

  const handleSaveChanges = async () => {
    const  imageId= generateRandomId();
    if (selectedRecord) {
      const imgRef = ref(storage, selectedRecord.fullPath);
      console.log("Updating metadata for: ", selectedRecord.fullPath);
  
      const newMetadata = {
        customMetadata: {
          imageName,
          price,
          category,
          shortDesc,
          description,
          id: imageId.toString(),
        },
      };
  
      try {
        if (newImage) {
          const newImageRef = ref(storage, `${imgRef.parent.fullPath}/${newImage.name}`);
          await uploadBytes(newImageRef, newImage);
          const newImageUrl = await getDownloadURL(newImageRef);
          newMetadata.customMetadata.imageUrl = newImageUrl;
          await updateMetadata(newImageRef, newMetadata);
          await deleteObject(imgRef);
        } else {
          await updateMetadata(imgRef, newMetadata);
        }
  
        alert('Metadata updated successfully');
        setNewImage(null);
        // Refetch records to update the UI
        const updatedRecords = await listAll(ref(storage, imgRef.parent.fullPath));
        const updatedMetadataArray = await Promise.all(updatedRecords.items.map((itemRef) => getMetadata(itemRef)));
        setRecords(updatedMetadataArray);
      } catch (error) {
        console.error("Error updating metadata: ", error);
        alert('Error updating metadata');
      }
    }
  };
  

  return (
    <div className="edit-container">
      <h1>Admin Panel</h1>
      <select value={selectedDatabase} onChange={(e) => setSelectedDatabase(e.target.value)}>
        <option value="comingSoon">Coming Soon</option>
        <option value="bestSales">Best Sales</option>
        <option value="newArrivalData">New Arrivals</option>
        <option value="discountProducts">Discount Products</option>
      </select>
      
      <ul>
        {records.map(record => (
          <li key={record.name} onClick={() => handleSelectRecord(record)}>
            {record.customMetadata?.imageName} - {record.customMetadata?.price}
          </li>
        ))}
      </ul>

      {selectedRecord && (
        <div className="editForm">
          <h2>Edit Metadata</h2>
          <input type="file" onChange={(e) => setNewImage(e.target.files[0])} />
          <input type="text" value={imageName} onChange={(e) => setImageName(e.target.value)} placeholder="Image Name" />
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
          <input type="text" value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} placeholder="Short Description" />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
          <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default EditAdminPanel;

