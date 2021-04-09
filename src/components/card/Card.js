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
        <h1>{props.monsters.name}</h1>
      </center>
    </div>
  );
};
