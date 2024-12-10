import React, { useState, useEffect } from "react";
import "./Main.css";
import axios from "axios";
import { Card } from "../Card/Card";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const [films, setFilms] = useState([]);
  const [filmyear, setFilmmyear] = useState(2024);
  const [month, setMonth] = useState("JANUARY");
  const navigate = useNavigate();
  const apiKey = import.meta.env["VITE_X-API-KEY"];

  useEffect(() => {
    axios
      .get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${filmyear}&month=${month}`,
        {
          headers: {
            "X-API-KEY": apiKey,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setFilms(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [filmyear, month]);

  return (
    <div className="div">
      <div className="center">
        <div className="years">
          <span>Год: {filmyear}</span>
          <span>Месяц: {month}</span>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="months-box"
          >
            <option value="JANUARY">Январь</option>
            <option value="FEBRUARY">Февраль</option>
            <option value="MARCH">Март</option>
            <option value="APRIL">Апрель</option>
            <option value="MAY">Май</option>
            <option value="JUNE">Июнь</option>
            <option value="JULY">Июль</option>
            <option value="AUGUST">Август</option>
            <option value="SEPTEMBER">Сентябрь</option>
            <option value="OCTOBER">Октябрь</option>
            <option value="NOVEMBER">Ноябрь</option>
            <option value="DECEMBER">Декабрь</option>
          </select>
        </div>
        <div className="month-selector"></div>
        <div className="cards">
          {films.map((film) => (
            <Card
              key={film.kinopoiskId}
              img={film.posterUrl}
              name={film.nameRu}
              year={film.year}
              country={film.countries[0]?.country}
              InfoFilm={() => navigate(`/film/${film.kinopoiskId}`)}
            />
          ))}
        </div>
        <div className="buttons-year">
          <button
            onClick={() =>
              setFilmmyear((filmyear) =>
                filmyear > 1 ? filmyear - 1 : filmyear
              )
            }
            className="yearBack-btn"
          >
            Назад
          </button>
          <button
            onClick={() =>
              setFilmmyear((filmyear) =>
                filmyear == 2024 ? filmyear : filmyear + 1
              )
            }
            className="yearNext-btn"
          >
            Вперед
          </button>
        </div>
      </div>
    </div>
  );
};
