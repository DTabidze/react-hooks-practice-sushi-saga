import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis,handleStartingSushiId,handleEatingSushi}) {
  // console.log(sushis[0].id)

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushis.map (sushi => <Sushi key={sushi.id} eaten={sushi.eaten} sushiId={sushi.id} name={sushi.name} img_url={sushi.img_url} price={sushi.price}  handleEatingSushi={handleEatingSushi}/>)}
      <MoreButton handleStartingSushiId={handleStartingSushiId} lastSushi={sushis[3]}/>
    </div>
  );
}

export default SushiContainer;
