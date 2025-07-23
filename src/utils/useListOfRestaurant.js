import { API_FETCH_URL } from "../utils/constants";
import { useState, useEffect } from "react";
const useListOfRestaurant = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_FETCH_URL);
    const json = await data.json();

    //Optional Chaining - add ?.
    const restaurantData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(restaurantData);
  };

  return listOfRestaurant;
};
export default useListOfRestaurant;
