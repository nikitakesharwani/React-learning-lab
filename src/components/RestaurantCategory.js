import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showAccordian, setShowAccordian] = useState(false);

  const toggleAccordian = () => {
    setShowAccordian(!showAccordian);
  };

  return (
    <div>
      <div className="bg-gray-50 w-6/12 mx-auto my-4 shadow-lg p-4">
        <div
          className="flex justify-between font-bold text-lg cursor-pointer"
          onClick={toggleAccordian}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
        {showAccordian && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
