import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  let ListOfRestaurant = [
    {
      info: {
        id: "5938",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b88fe4d2-557a-42a5-a801-a43a40134004_5938.jpg",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 3.4,
        sla: {
          deliveryTime: 33,
        },
      },
    },
    {
      info: {
        id: "5935",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b88fe4d2-557a-42a5-a801-a43a40134004_5938.jpg",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 33,
        },
      },
    },
    {
      info: {
        id: "5936",
        name: "Mac Donald",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b88fe4d2-557a-42a5-a801-a43a40134004_5938.jpg",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.4,
        sla: {
          deliveryTime: 33,
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            ListOfRestaurant = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(ListOfRestaurant);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} /> //this is data driven UI
        ))}
      </div>
    </div>
  );
};

export default Body;
