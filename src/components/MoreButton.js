import React from "react";

function MoreButton({handleStartingSushiId,lastSushi}) {
  //render next 4 sushi, check if it reaches the end of array, it it does start rendering from 0 index
  return <button onClick={() => lastSushi.id !== 100 ? handleStartingSushiId(lastSushi.id) : handleStartingSushiId(0)}>More sushi!</button>;
}

export default MoreButton;
