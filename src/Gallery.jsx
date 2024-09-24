import React, { useState } from "react";
import "./Gallery.css";
import { Outlet, Link } from "react-router-dom";
import { AppLink } from "./components/AppLink";

export function Gallery({ pictures, columns, onFavorite }) {
  return (
    // <div>
    <>
      {/*вместо этого счетчика использовать селект но функционал точно такой же (3, 5, 9 столбцов) */}
      <div className="gallery" style={{ "--columns": columns }}>
        {pictures.map((picture) => (
          <div key={picture.id} className="gallery__item">
            <img
              className="gallery__item-img"
              src={picture.thumbnailUrl}
              alt={picture.title}
            />
            <p className="gallery__item-picture-title">{picture.title}</p>
            <AppLink to={`/todo-list/${picture.id}`} text="Подробнее" />
            {/* <button onClick={() => onFavorite(picture)}>
              Add to Favorites
            </button> */}
          </div>
        ))}
      </div>
    </>
    // </div>
  );
}
