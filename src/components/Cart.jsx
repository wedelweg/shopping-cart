import { useState } from "react";
import "./Cart.css";

function Cart({ products, onRemove, onEdit }) {
    const handleRemove = (id) => {
        const item = document.getElementById(`item-${id}`);
        if (item) {
            item.classList.add("removing");
            setTimeout(() => onRemove(id), 400);
        }
    };

    return (
        <ul className="cart-list">
            {products.map((product) => (
                <CartItem
                    key={product.id}
                    product={product}
                    onRemove={handleRemove}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
}

function CartItem({ product, onRemove, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(product.name);

    const handleSave = () => {
        if (newName.trim() !== "") {
            onEdit(product.id, newName);
            setIsEditing(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSave();
        if (e.key === "Escape") {
            setIsEditing(false);
            setNewName(product.name);
        }
    };

    return (
        <li id={`item-${product.id}`} className="cart-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        onKeyDown={handleKeyPress}
                        autoFocus
                    />
                    <button className="save-btn" onClick={handleSave}>💾</button>
                </>
            ) : (
                <>
                    <span>{product.name}</span>
                    <div className="action-buttons">
                        <button className="edit-btn" onClick={() => setIsEditing(true)}>✏️</button>
                        <button className="delete-btn" onClick={() => onRemove(product.id)}>❌</button>
                    </div>
                </>
            )}
        </li>
    );
}

export default Cart;
