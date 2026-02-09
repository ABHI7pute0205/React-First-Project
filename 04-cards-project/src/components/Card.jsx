import React from "react";
import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.brandLogo} alt="Not found" />
        <button>
          save <Bookmark />
        </button>
      </div>
      <div className="center"></div>
      <h3>{props.company}</h3> <span>{props.datePosted}</span>
      <h2>{props.post}</h2>
      <div>
        <h4>{props.tag1}</h4>
        <h4>{props.tag2}</h4>
      </div>
      <div className="bottom">
        <div>
          <h3>${props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
