import React from "react";

// card je pan value recive kart ti object chya form madhe aste
const card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      {/* it is a function and function change value every time as per the input  */}
      <h1>
        {props.user},{props.age}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>view profile</button>
    </div>
  );
};

export default card;
