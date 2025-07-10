import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
