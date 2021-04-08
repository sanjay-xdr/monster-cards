import React from "react";
import "./cardList.css";
import { Card } from ".././card/Card";

export const CardList = (props) => {
  return (
    <div className="CardList">
      {props.monsters.map((monsters) => (
        <Card key={monsters.id} monsters={monsters} />
      ))}
    </div>
  );
};
