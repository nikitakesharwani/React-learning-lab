import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  //removed the resList and set this to null so on page load the page will be empty, after rendering completes, the useEffect will populate the data.
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-ho"
    );
    const json = await data.json();
    const restaurantData =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setTimeout(() => {
      console.log("Timeout occured");
    }, 10000);

    setListOfRestaurant(restaurantData);
    console.log(restaurantData);
  };

  console.log("Page rendered");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} /> //this is data driven UI
        ))}
      </div>
    </div>
  );
};

export default Body;
