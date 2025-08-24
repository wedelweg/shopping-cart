import { useState } from "react";

function Cart({ products, onRemove, onEdit }) {
    return (
        <ul>
            {products.map((product, index) => (
                <CartItem
                    key={index}
                    product={product}
                    index={index}
                    onRemove={onRemove}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
}

function CartItem({ product, index, onRemove, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(product);

    const handleSave = () => {
        onEdit(index, newName);
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button className="add-btn" onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <span>{product}</span>
                    <div className="action-buttons">
                        <button className="edit-btn" onClick={() => setIsEditing(true)}>✏️</button>
                        <button className="delete-btn" onClick={() => onRemove(index)}>❌</button>
                    </div>
                </>
            )}
        </li>
    );
}

export default Cart;
