import Select from 'react-select';
import { products } from '../utils/products';
import {useComingSoon} from '../components/FirebaseProductDetails/ProductDataHooks'

const options = [
    { value: "shirt", label: "Shirt" },
    { value: "jacket", label: "Jacket" },
    { value: "coat", label: "Coat" },
    { value: "hoodie", label: "Hoodie" },
    { value: "denim", label: "Denim" },
    { value: "short", label: "Shorts" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({setFilterList}) => {
    const handleChange = (selectedOption)=> {
        setFilterList(products.filter(item => item.category ===selectedOption.value))
        console.log(products.filter(item => item.category===selectedOption.value))
    }
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;
