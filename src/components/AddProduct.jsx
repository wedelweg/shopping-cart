import { useState } from "react";

function AddProduct({ onAdd }) {
    const [value, setValue] = useState("");

    const handleAdd = () => {
        if (value.trim() === "") return;
        onAdd(value);
        setValue("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAdd();
        }
    };

    return (
        <div className="add-container">
            <input
                type="text"
                placeholder="Enter product name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <button className="add-btn" onClick={handleAdd}>
                Add Product
            </button>
        </div>
    );
}

export default AddProduct;
