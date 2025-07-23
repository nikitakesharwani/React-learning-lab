import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwo, cuisines } = resInfo?.cards[2]?.card?.card?.info;

  const ResCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log("res category", ResCategory);

  return (
    <div className="text-center ">
      <h1 className="text-xl font-bold py-6">{name}</h1>
      <h4 className="text-md font-bold">
        {cuisines.join(", ")} - ₹{costForTwo / 100} for two
      </h4>
      {ResCategory.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
