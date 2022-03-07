import React from "react";
import "./Cards.css";
import CardItem from "./CardItem.js";

function Cards() {
  return (
    <div className="cards">
      <h1>CHECK OUT THIS EPIC SYSTEM!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="img/call-center.png"
              text="this is where the card discription will be"
              label="Services"
              path="/services"
            />
            <CardItem
              src="img/call-center.png"
              text="this is where the card discription will be"
              label="Services"
              path="/services"
            />
            <CardItem
              src="img/call-center.png"
              text="this is where the card discription will be"
              label="Services"
              path="/services"
            />
            <CardItem
              src="img/call-center.png"
              text="this is where the card discription will be"
              label="Services"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
