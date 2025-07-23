import { useState } from "react";

const ReadMore = ({ text, wordCount = 20 }) => {
  const [isExpanded, setIsExpended] = useState(false);

  if (text == null) return false;

  const words = text.split(" ");

  const isTrimmable = words.length > wordCount;
  const trimmedText = words.slice(0, wordCount).join(" ");

  return (
    <p className="text-xs text-gray-600 w-full ">
      {!isTrimmable || isExpanded ? (
        <>
          {text}{" "}
          {isTrimmable && (
            <button
              className="font-bold hover:underline"
              onClick={() => setIsExpended(false)}
            >
              Show less
            </button>
          )}
        </>
      ) : (
        <>
          {trimmedText}...{" "}
          <button
            className="font-bold hover:underline"
            onClick={() => setIsExpended(true)}
          >
            Read more
          </button>
        </>
      )}
    </p>
  );
};

export default ReadMore;
