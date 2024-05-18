
const CategorySelector = ({ category, setCategory }) => {
  return (
    <select 
      value={category} 
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Select Category</option>
      <option value="shirt">Shirts</option>
      <option value="jacket">Jackets</option>
      <option value="hoodie">Hoodies</option>
      <option value="denim">Denim</option>
      <option value="short">Shorts</option>
      <option value="coat">Coats</option>
    </select>
  );
};

export default CategorySelector;
