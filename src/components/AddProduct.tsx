import { useState } from "react";

function AddProduct({ onAdd }) {
    const [value, setValue] = useState("");

    const handleAdd = () => {
        onAdd(value);
        setValue("");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter product name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="add-btn" onClick={handleAdd}>Add Product</button>
        </div>
    );
}

export default AddProduct;
