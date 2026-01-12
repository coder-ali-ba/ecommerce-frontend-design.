import React, { useEffect, useState } from "react";
import shirt from "../assets/66ac8758b171e503e38e7b8c0a5fa03996d5d467.png";
import bag from "../assets/deea14d78e68b15c28eb29234224b8b2f71d5eb5.png";
import vase from "../assets/e7609aa3afe3483e736054358d53f2f8797b4546.png";
import Navbar from "../Components/Navbar";

const cartItems = [
  {
    id: 1,
    name: "T-shirts with multiple colors for men",
    price: 78.99,
    qty: 2,
    image: shirt,
  },
  {
    id: 2,
    name: "Solid Backpack blue jeans large size",
    price: 78.99,
    qty: 1,
    image: bag,
  },
  {
    id: 3,
    name: "Water boiler black for kitchen",
    price: 78.99,
    qty: 1,
    image: vase,
  },
  {
    id: 4,
    name: "Water boiler black for kitchen",
    price: 78.99,
    qty: 1,
    image: vase,
  },
  {
    id: 5,
    name: "Water boiler black for kitchen",
    price: 78.99,
    qty: 1,
    image: vase,
  },
];

const savedItems = [
  {
    id: 1,
    name: "T-shirts with multiple colors for men",
    price: 78.99,
    qty: 2,
    image: shirt,
  },
  {
    id: 2,
    name: "Solid Backpack blue jeans large size",
    price: 78.99,
    qty: 1,
    image: bag,
  },
  {
    id: 3,
    name: "Water boiler black for kitchen",
    price: 78.99,
    qty: 1,
    image: vase,
  },
];

export default function Cart() {
  const [currentItems, setCurrentItems] = useState(cartItems);
  const [currentSaved, setCurrentSaved] = useState(savedItems);
  const [total , setTotal] = useState(0)
  // const [items , setItems] = useState(1)

  // const handleInc = (qty) =>{
  //   const same =cartItems.find((i)=>i.qty ==qty )
  //   console.log(same);
    
  //   setItems(same.qty)
  // }
  // const handleDec = (qty) => {
  //   console.log(qty);  
  //   setItems((prev)=> prev > 0 ? prev -1 : 0)
  // }

  const RemoveAll = () => {
    setCurrentItems([])
  }




  const handleRemove = (id) => {
    setCurrentItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleSave = (id) => {
    const add = currentItems.find((item) => item.id == id);
    setCurrentSaved((prev) => [...prev, add]);
  };

  const totalPrice = currentItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  useEffect(()=>{
    setTotal(totalPrice)

  }, [total])
  return (
    <>
      <Navbar />
      <div className="flex justify-center  bg-gray-200">
        <div className="max-w-[91%] mr-4  p-4">
          <h2 className="text-xl font-semibold mb-4">Shopping cart</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CART ITEMS */}
            <div className="md:col-span-2 space-y-4 border bg-white border-gray-400 p-2">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-400 p-4 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Seller: Artel Market
                    </p>
                    <p>
                      Size: medium, Color: blue, Material: PlasticSeller: Artel
                      Market
                    </p>
                    <div className="mt-2">
                      <button
                        className="py-1 px-3 bg-white text-red-500 border border-gray-300 rounded"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="py-1 px-3 bg-white ml-3 text-blue-500 border border-gray-300 rounded"
                        onClick={() => handleSave(item.id)}
                      >
                        Save for later
                      </button>
                    </div>

                   
                    <p className="md:hidden font-semibold mt-2">
                      ${item.price}
                    </p>
                  </div>

                  
                  <div>
                    
                    <div className="hidden md:block font-semibold">
                      ${item.price}
                    </div>
                    
                    

                    <div className="hidden md:flex items-center gap-2">
                      Qty
                      <select name="Qty">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">6</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-full  flex justify-between items-center p-4">
                <button className="px-3 py-1 border border-gray-400 rounded text-white bg-blue-700">- Back to shop</button>
                <button className="px-3 py-1 border border-gray-400 rounded text-blue-500 bg-white" onClick={RemoveAll}>Remove all</button>
              </div>
            </div>

            {/* SUMMARY */}

            <div>
              <div className="p-4 h-fit border mb-4 bg-white">
                <p>Have a coupon</p>
                <div className="w-[90%] border mt-3 h-[40px] rounded flex justify-between px-4 items-center">Add coupon <button>Apply</button></div>
              </div>
              <div className="border rounded-lg p-4 h-fit bg-white">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Items {currentItems.length}</span>
                    <span>$32.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$7.00</span>
                  </div>

                  <hr />

                  <div className="flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>{total}</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700">
                  {cartItems.length} Items
                </button>
              </div>
              
            </div>

            {/* <div className="w-full h-[80px] border"></div> */}
          </div>

          {/* SAVED FOR LATER */}
          <div className="mt-8">
            <h3 className="font-semibold mb-4 text-xl">Saved for later</h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {currentSaved.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-3 text-center bg-white"
                >
                  <img src={item.image} className="mx-auto mb-2" />
                  <p className="text-sm font-medium">
                    Regular Fit Resort Shirt
                  </p>
                  <p className="font-semibold">$57.70</p>

                  <div className="flex justify-center gap-2 mt-2">
                    <button className="text-blue-600 text-sm">
                      Move to cart
                    </button>
                    <button className="text-red-500 text-sm">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
