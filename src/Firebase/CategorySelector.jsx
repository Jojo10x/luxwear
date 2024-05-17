
const CategorySelector = ({ category, setCategory }) => {
  return (
    <select 
      value={category} 
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Select Category</option>
      <option value="Shirt">Shirt</option>
      <option value="Jacket">Jacket</option>
      <option value="Hoodie">Hoodie</option>
      <option value="Denim">Denim</option>
      <option value="Shorts">Shorts</option>
    </select>
  );
};

export default CategorySelector;
