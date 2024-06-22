import React from "react";
import { Link } from "react-router-dom";
import Items from "../Items/Items";
import Image2 from "../../assets/Images 2.png";

export default function Home() {
  return (
    <div className="flex-start">
      <div className="sm:my-0.1 bg-slate-100">
        <aside className="relative text-black rounded-lg sm:mx-24 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4 pb-15 pt-9 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="sm:mt-1 text-center sm:text-left sm:ml-auto">
              <h6 className="text-small pl-0.5 font-serif">
                Discount up to 20%
              </h6>
              <h2 className="text-2xl font-semibold sm:text-4xl">
                Buy Fresh And Organic <br />
                <span className="sm:block text-4xl">Grocery Food</span>
                <p className="mt-6 mb-6 font-light font-serif text-gray-300 sm:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Ut magni quis fugiat cupiditate in? Delectus?
                </p>
              </h2>
              <div className="flex items-center space-x-4">
                <Link
                  className="inline-flex items-center justify-center px-5 py-3 font-medium text-white bg-green-900 rounded-full hover:opacity-75 mr-20"
                  to="/"
                >
                  SHOP NOW →
                </Link>
                <div className="flex flex-row text-gray-700 text-base font-bold">
                  <div>
                    <span className="text-2xl">35k +</span> <br />
                    <span className="text-xs">Users</span>
                  </div>
                  <div className="ml-12 ">
                    <span className="text-2xl">18k +</span>
                    <br />
                    <span className="text-xs">Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="absolute inset-0 sm:my-4 max-w-xl sm:ml-auto bg-green-900">
        <img
          src={Image2}
          alt="image2"
          className="sm:mx-1 inset-1 absolute mt-20"
        />
      </div>

      {/* Collection and Button */}
      <h6 className="text-center mt-2 mb-2 font-semibold">Shop by Category</h6>
      <h1 className="text-center text-3xl font-semibold pt-4 sm:text-2xl py-5 mb-2 font-small">
        Top Category Of Organic Food
      </h1>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <Link
          className="px-8 py-3 font-medium text-black bg-gray-200 rounded-full hover:bg-green-800 hover:text-white"
          to="/"
        >
          FRUITS AND VEGETABLE
        </Link>

        <Link
          className="px-6 py-3 font-medium text-black bg-gray-200 rounded-full hover:bg-green-800 hover:text-white"
          to="/"
        >
          Bakery
        </Link>

        <Link
          className="px-5 py-3 font-medium text-black bg-gray-200 rounded-full hover:bg-green-800 hover:text-white"
          to="/"
        >
          MEAT AND SEAFOOD
        </Link>

        <Link
          className="px-5 py-3 font-medium text-black bg-gray-200 rounded-full hover:bg-green-800 hover:text-white"
          to="/"
        >
          BEVERAGE
        </Link>

        <Link
          className="px-5 py-3 font-medium text-black bg-gray-200 rounded-full hover:bg-green-800 hover:text-white"
          to="/"
        >
          BISCUIT AND SNACKS
        </Link>
      </div>

      {/* Items lists */}
      <Items />
    </div>
  );
}
