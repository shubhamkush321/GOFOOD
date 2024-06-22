import React from "react";
import Italian from "../../assets/italian.jpeg";
import Crispy from "../../assets/crispy.jpeg";
import Grass from "../../assets/grass.jpg";
import Choice from "../../assets/choice.jpg";
import Seafood from "../../assets/seafood.jpeg";
import { Link } from "react-router-dom";

function Items() {
  const items = [
    {
      title: "Italian-Style chicken Maetballs",
      price: "$8.45",
      image: Italian,
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
    {
      title: "Crispy Classic Buffalo Wings",
      price: "$8.45",
      image: Crispy,
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
    {
      title: "Seafoods Stuffed Alaskan Salmon",
      price: "$8.45",
      image: Seafood,
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
    {
      title: "Grass-fed 85_15 Ground Beef",
      price: "$8.45",
      image: Grass,
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
    {
      title: "Choice Angus Beef Stew Meat",
      price: "$8.45",
      image: Choice,
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },

    {
      title: "Italian-Style chicken Meatballs",
      price: "$8.45",
      image: Italian,
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
  ];

  return (
    <div className="w-full flex flex-col-wrap items-center justify-start">

      <div className="pt-5">

      <Link
          className="px-5 py-3 mb-4 font-medium text-black bg-red-400 rounded-full hover:bg-gray-200 hover:text-black"
          to="/AddItems"
        >
          ADD ITEMS
        </Link>

        <div className="flex flex-col gap-10 justify-between pt-6">
          <div className="flex ml-20">
            <div className="flex">
              <img
                className="w-20 h-20 rounded-full"
                src={items[0].image}
                alt={items[0].title}
              />
              <div className="flex flex-col pl-6">
                <h3 className="text-xl font-medium mb-1">{items[0].title}</h3>
                <hr className="border-dashed border-gray-300 my-2" />
                <p className="text-gray-500 text-sm mt-1">
                  {items[0].description}
                </p>
              </div>
              <div className="pl-10">
                <span className="font-semibold text-xl">{items[0].price}</span>
                <a className="text-green-600 font-semibold flex mt-4">
                  SHOP NOW →
                </a>
              </div>
            </div>

            <img
              className="w-20 h-20 ml-10  rounded-full"
              src={items[1].image}
              alt={items[1].title}
            />
            <div className="flex flex-col pl-6">
              <h3 className="text-xl font-medium mb-1">{items[1].title}</h3>
              <hr className="border-dashed border-gray-300 my-2" />
              <p className="text-gray-500 text-sm mt-1">
                {items[1].description}
              </p>
            </div>
            <div className="pl-10">
              <span className="font-semibold text-xl">{items[1].price}</span>
              <a className="text-green-600 font-semibold flex mt-4">
                SHOP NOW →
              </a>
            </div>
          </div>
          <div className="flex ml-20">
            <div className="flex">
              <img
                className="w-20 h-20 rounded-full"
                src={items[2].image}
                alt={items[2].title}
              />
              <div className="flex flex-col pl-6">
                <h3 className="text-xl font-medium mb-1">{items[2].title}</h3>
                <hr className="border-dashed border-gray-300 my-2" />
                <p className="text-gray-500 text-sm mt-1">
                  {items[2].description}
                </p>
              </div>
              <div className="pl-8">
                <span className="font-semibold text-xl">{items[2].price}</span>
                <a className="text-green-600 font-semibold flex mt-4">
                  SHOP NOW →
                </a>
              </div>
            </div>
            <img
              className="w-20 h-20 ml-10 rounded-full"
              src={items[3].image}
              alt={items[3].title}
            />
            <div className="flex flex-col pl-6">
              <h3 className="text-xl font-medium mb-1">{items[3].title}</h3>
              <hr className="border-dashed border-gray-300 my-2" />
              <p className="text-gray-500 text-sm mt-1">
                {items[3].description}
              </p>
            </div>
            <div className="pl-10">
              <span className="font-semibold text-xl">{items[3].price}</span>
              <a className="text-green-600 font-semibold flex mt-4">
                SHOP NOW →
              </a>
            </div>
          </div>

          <div className="flex ml-20">
            <div className="flex">
              <img
                className="w-20 h-20 rounded-full"
                src={items[4].image}
                alt={items[4].title}
              />
              <div className="flex flex-col pl-6">
                <h3 className="text-xl font-medium mb-1">{items[4].title}</h3>
                <hr className="border-dashed border-gray-300 my-2" />
                <p className="text-gray-500 text-sm mt-1">
                  {items[4].description}
                </p>
              </div>
              <div className="pl-10">
                <span className="font-semibold text-xl">{items[4].price}</span>
                <a className="text-green-600 font-semibold flex mt-4">
                  SHOP NOW →
                </a>
              </div>
            </div>
            <img
              className="w-20 h-20 ml-10 mb-6 rounded-full"
              src={items[5].image}
              alt={items[5].title}
            />
            <div className="flex flex-col pl-6">
              <h3 className="text-xl font-medium mb-1">{items[5].title}</h3>
              <hr className="border-dashed border-gray-300 my-2" />
              <p className="text-gray-500 text-sm mt-1">
                {items[5].description}
              </p>
            </div>
            <div className="pl-10">
              <span className="font-semibold text-xl">{items[5].price}</span>
              <a className="text-green-600 font-semibold flex mt-4">
                SHOP NOW →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
