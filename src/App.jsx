import { useState } from "react";
import AddProduct from "./components/AddProduct.jsx";
import Cart from "./components/Cart.jsx";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);

    const addProduct = (name) => {
        if (name.trim() === "") return;
        setProducts([...products, { id: crypto.randomUUID(), name }]);
    };

    const removeProduct = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    const editProduct = (id, newName) => {
        setProducts(
            products.map((p) => (p.id === id ? { ...p, name: newName } : p))
        );
    };

    return (
        <div className="container">
            <h1>My Shopping Cart</h1>
            <AddProduct onAdd={addProduct} />
            <Cart products={products} onRemove={removeProduct} onEdit={editProduct} />
        </div>
    );
}

export default App;
