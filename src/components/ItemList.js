import ReadMore from "./ReadMore";
import { CON_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 mx-4 mb-2 border-gray-200 border-b-2 text-left "
        >
          <div className="flex justify-between ">
            <div className="w-8/12">
              <span className="mb-4 font-bold">{item.card.info.name}</span>
              <span className=" font-bold">
                - ₹ {item.card.info.price / 100}
              </span>

              <ReadMore text={item.card.info.description} wordCount={20} />
            </div>
            {item.card.info.imageId != null ? (
              <div className="w-3/12">
                <div className="absolute">
                  <button className="mt-0 mx-14 bg-black text-white rounded-md p-1 ">
                    Add +
                  </button>
                </div>

                <img
                  className="w-full"
                  src={CON_URL + item.card.info.imageId}
                />
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
