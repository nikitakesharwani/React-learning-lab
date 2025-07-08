import { RES_MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    const MenuHeaderInfo = json.data;

    setResInfo(MenuHeaderInfo);
    console.log(MenuHeaderInfo);
  };

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwo, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>
        {cuisines.join(", ")} - ₹{costForTwo / 100} for two
      </h4>
      <ul>
        {itemCards && itemCards.length > 0 ? (
          itemCards.map((menuItem) => (
            <li
              key={menuItem?.card?.info?.id}
              style={{ listStyleType: "none" }}
            >
              {menuItem?.card?.info?.name}- ₹
              {menuItem?.card?.info?.defaultPrice / 100 ||
                menuItem?.card?.info?.price / 100}
            </li>
          ))
        ) : (
          <li>No menu items found</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
