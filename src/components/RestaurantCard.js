import { CON_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[230px] rounded-md bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-md"
        alt="res-logo"
        src={CON_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="py-2">{cuisines.join(", ")}</h4>
      <h4 className="py-2">{avgRating} stars</h4>
      <h4 className="py-2">{costForTwo}</h4>
      <h4 className="py-2">Delivery Time-{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;

//https://www.swiggy.com/dapi/restaurants/list/update
