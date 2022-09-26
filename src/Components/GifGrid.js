import React from "react";
import { useFetchGifd } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
const { data:images, loading } = useFetchGifd( category );


  return (
    <>
      <h3>{category}</h3>
      { loading && <p className="animate__animated animate__fadeIn">Cargando</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};