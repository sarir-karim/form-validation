import React from "react";
import catImg from "./images/dog.jpg";
import { Cat } from "./CardsData";
import "./Card.css";

const maxCards = 6;
const Cards = () => {
  return (
    <section className="container">
      {Cat.slice(0, maxCards).map(({ Catname, age, breed, description }) => (
        <article className="card">
          <img src={catImg} className="catImg" alt="" />
          <div className="card_details">
          <h1 className="card_heading">{Catname}</h1>
          <h5 className="card_subheading">
            {breed} * {age} {age > 1 ? "Years " : "Year"} old
          </h5>
          <p className="card_desc">{description}</p>
          
          </div>
        </article>
      ))}
    </section>
  );
};

export default Cards;
