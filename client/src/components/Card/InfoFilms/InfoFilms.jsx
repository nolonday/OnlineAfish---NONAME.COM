import React, { useState, useEffect } from "react";
import "./InfoFilm.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export const InfoFilms = () => {
  const [film, setFilm] = useState(null);
  const [watching, setWatching] = useState([]);
  const { id } = useParams();
  const apiKey = import.meta.env["VITE_X-API-KEY"];

  useEffect(() => {
    axios
      .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        headers: {
          "X-API-KEY": apiKey,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setFilm(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/external_sources`,
        {
          headers: {
            "X-API-KEY": apiKey,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setWatching(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!film) return <div>Загрузка...</div>;

  return (
    <div className="film-info">
      <img src={film.posterUrl} alt={film.nameRu} />
      <div className="info">
        <h1>{film.nameRu}</h1>
        <hr />
        <p>
          <span>Год: </span> {film.year}
        </p>
        <p>
          <span>Рейтинг Кинопоиска: </span> {film.ratingKinopoisk || "Нету"}
        </p>
        <p>
          <span>Рейтинг Imdb: </span> {film.ratingImdb || "Нету"}
        </p>
        <p>
          <span>Описание: </span> {film.description || "Нету"}
        </p>
        <p>
          <span>Страна: </span> {film.countries[0]?.country || "Нету"}
        </p>
        <p>
          <span>Длина фильма: </span>
          {film.filmLength
            ? `${Math.floor(film.filmLength / 60)} ч ${
                film.filmLength % 60
              } мин`
            : "Нету"}
        </p>
        <p>
          <span>Жанр: </span> {film.genres[0]?.genre}
        </p>
        <p>
          <span>Возраст: </span>
          {film.ratingAgeLimits === "age18"
            ? "18+"
            : film.ratingAgeLimits === "age16"
            ? "16+"
            : "0+"}
        </p>
        <hr />
        <h1>Где можно посмотреть:</h1>
        <div className="watch">
          {watching.map((item) => (
            <a href={item.url} target="_blank">
              <img src={item.logoUrl} alt={item.platform} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
