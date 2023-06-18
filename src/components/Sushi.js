import React from "react";

function Sushi({name,img_url,price,sushiId,handleEatingSushi,eaten}) {


  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEatingSushi(sushiId)}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={`${name} "Sushi"`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
