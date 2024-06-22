import React, { useState } from 'react';

const AddItems = () => {
  const [items, setItems] = useState([
    {
      name: 'Italian-Style chicken Maetballs',
      price: 8.45,
      imageUrl: 'https://i.postimg.cc/50k0w9j3/italian-chicken.jpg'
    },
    {
      name: 'Crispy Classic Buffalo Wings',
      price: 8.45,
      imageUrl: 'https://i.postimg.cc/50k0w9j3/buffalo-wings.jpg'
    },
    {
      name: 'Seafoods Stuffed Alaskan Salmon',
      price: 8.45,
      imageUrl: 'https://i.postimg.cc/50k0w9j3/stuffed-salmon.jpg'
    },
    {
      name: 'Grass-fed 85_15 Ground Beef',
      price: 8.45,
      imageUrl: 'https://i.postimg.cc/50k0w9j3/ground-beef.jpg'
    },
    {
      name: 'Choice Angus Beef Stew Meat',
      price: 8.45,
      imageUrl: 'https://i.postimg.cc/50k0w9j3/stew-meat.jpg'
    },
    {
      name: 'Italian-Style chicken Meatballs',
      price: 8.45,
      imageUrl: 'https://i.postimg.cc/50k0w9j3/italian-chicken.jpg'
    }
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-10">Add Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.name} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet quam in lacus risus.
            </p>
            <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddItem(item)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Selected Items</h2>
        <ul className="list-disc pl-6">
          {selectedItems.map((item) => (
            <li key={item.name}>
              {item.name} - ${item.price.toFixed(2)}
              <button
                onClick={() => handleRemoveItem(item)}
                className="ml-4 px-2 py-1 rounded-sm bg-red-500 text-white"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddItems;