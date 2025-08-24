import { useState } from "react";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";

function App() {
    const [products, setProducts] = useState([]);

    const addProduct = (name) => {
        if (name.trim() === "") return;
        setProducts([...products, name]);
    };

    const removeProduct = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    const editProduct = (index, newName) => {
        const updated = [...products];
        updated[index] = newName;
        setProducts(updated);
    };

    return (
        <div className="container">
            <h1>My Shopping Cart</h1>
            <AddProduct onAdd={addProduct} />
            <Cart
                products={products}
                onRemove={removeProduct}
                onEdit={editProduct}
            />
        </div>
    );
}

export default App;