import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/main">NOFILM.COM</a>
      </div>
      {/* <div className="search">
        Поиск:
        <input type="text" />
        <button className="search-btn">Поиск</button>
      </div> */}
      <div className="menu">
        <a href="#">Главная</a>
        <a href="#">Топ</a>
      </div>
    </header>
  );
};
