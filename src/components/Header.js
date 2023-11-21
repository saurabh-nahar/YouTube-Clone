import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../utils/sideMenuSlice";
import { searchApi } from "../constants/searchApi";
import { createCache } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [showRes, setShowRes] = useState(true);

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    navigate("/results?q=" + searchText);
    setSearchText("");
  };

  const dispatch = useDispatch();

  const cache = useSelector((store) => store.search);

  const clickHandler = () => {
    if (window.innerWidth > 640) {
      dispatch(menuToggle());
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchText]) {
        setSearchRes(cache[searchText]);
      } else {
        searchFn();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchText]);

  const searchFn = async () => {
    const data = await fetch(searchApi + searchText);
    const json = await data.json();

    setSearchRes(json[1]);
    dispatch(createCache({ [searchText]: json[1] }));
  };

  function handleBlur() {
    setTimeout(() => setShowRes(false), 100);
  }

  function handleFocus() {
    setShowRes(true);
  }

  return (
    <form onSubmit={handleForm}>
      <div className="fixed top-0 left-0 w-full z-50 flex-col bg-white shadow-lg">
        <div className="flex px-1 justify-between max-w-screen h-16">
          <div className="w-3/12 flex items-center ml-2">
            <i
              className="fa-solid fa-bars text-3xl cursor-pointer ml-2 hidden sm:block"
              onClick={clickHandler}
            ></i>
            <a href="/">
              <img
                className="w-44 cursor-pointer"
                src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
                alt="logo"
              ></img>
            </a>
          </div>
          <div className="w-6/12 relative flex items-center justify-around">
            <input
              className="rounded-l-full border-gray-200 border-2 w-full py-1 px-2"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
            <button className="rounded-r-full border-gray-200 border-l-0 border-2 bg-b2071d py-1 px-2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            {showRes && searchRes && (
              <ul
                className="absolute top-full left-0 right-0 bg-white shadow-lg max-h-60 overflow-y-auto z-10 rounded-lg"
                onMouseDown={(e) => e.preventDefault()}
              >
                {searchRes.map((res, index) => (
                  <Link to={"/results?q=" + res} key={index}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <i className="fa-solid fa-magnifying-glass mr-2"></i>{" "}
                      {res}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <div className="w-3/12 flex items-center justify-around">
            <i className="fa-solid fa-circle-user text-2xl md:text-3xl lg:text-4xl"></i>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Header;
