import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";

export default function Header() {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const toggleHeart = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUserClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <header className="sticky z-50 top-0">
      <nav className="bg-white px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <div className="text-2xl ml-28 transition-colors duration-100 hover:text-orange-500 text-green-900">
              GO FOOD
            </div>
          </Link>

          <div
            className="hidden lg:flex lg:flex-grow lg:items-center lg:justify-center"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ml-20">
              {["Home", "Groceries", "Pages"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="#"
            className="text-gray-800 hover:bg-gray-5font-small text-sm px-4 "
          >
            Connect with us -&gt;
          </Link>
          
          {/* <form
            onSubmit={handleSearchSubmit}
            className="flex items-center"
          > */}
            {/* <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search meals..."
              className="border-2 border-gray-300 rounded-md py-1 px-3 mr-2 search-input"
            /> */}
            <button
              type="submit"
              onSubmit={handleSearchSubmit}
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 focus:outline-none" // Reduced padding
            >
              <FiSearch
                size={15}
                className="text-gray-800 hover:text-orange-300"
              />
            </button>
          {/* </form> */}
          
          <div className="flex items-center lg:order-2 gap-3 ml-2">
            <FaRegUser
              size={16}
              className="text-gray-800 hover:text-orange-700 cursor-pointer mr-2"
              onClick={handleUserClick} // Navigate to /login when clicked
            />
            <div onClick={toggleHeart} className="cursor-pointer">
              {isHeartFilled ? (
                <IoMdHeart
                  size={20}
                  className="text-red-500 hover:text-red-700"
                />
              ) : (
                <IoMdHeartEmpty
                  size={20}
                  className="text-gray-800 hover:text-red-700"
                />
              )}
            </div>
            <TiShoppingBag
              size={20}
              className="text-gray-800 hover:text-orange-700 cursor-pointer"
            />
          </div>
        </div>
      </nav>
{/* 
      Render Search Results */}
      {/* {searchResults.length > 0 && (
        <div className="bg-white border border-gray-300 mt-2 mx-auto max-w-screen">
          <ul className="divide-y divide-gray-200">
            {searchResults.map((meal) => (
              <li key={meal.idMeal} className="px-4 py-3">
                <Link
                  to={`/meal/${meal.idMeal}`}
                  className="block text-gray-800 hover:text-orange-700"
                >
                  {meal.strMeal}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </header>
  );
}