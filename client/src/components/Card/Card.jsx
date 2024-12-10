import React from "react";
import "./Card.css";
export const Card = ({ img, name, year, country, InfoFilm }) => {
  return (
    <div className="Card">
      <img src={img} alt="No image" />
      <h1>{name}</h1>
      <p>Год: {year}</p>
      <p>Страна: {country}</p>
      <div className="div-button">
        <button onClick={InfoFilm}>Подробнее</button>
      </div>
    </div>
  );
};
