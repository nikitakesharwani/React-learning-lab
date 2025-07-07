import { API_FETCH_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchByName = () => {
    let filteredRestaurantByName = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurantByName);
  };

  const fetchData = async () => {
    const data = await fetch(API_FETCH_URL);
    const json = await data.json();

    //Optional Chaining - add ?.
    const restaurantData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restaurantData);
    setFilteredRestaurant(restaurantData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={searchByName}>search</button>
        </div>
        <div className="filterByRating">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} /> //this is data driven UI
        ))}
      </div>
    </div>
  );
};

export default Body;
