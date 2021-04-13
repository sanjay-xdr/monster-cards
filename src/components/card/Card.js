import React from "react";
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monsters.id}?set=set2&size=100x100`}
        alt="monster"
      />
      <center>
        {" "}
        <h2>{props.monsters.name}</h2>
      </center>
    </div>
  );
};
