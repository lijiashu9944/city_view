import React, { useState } from "react";
import classes from "./Gallery.module.scss";
import Picture from "./Picture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
const Gallery = (props) => {
  const nextPage = () => {
    fetch();
  };
  return (
    <div className={classes.container}>
      {props.imgArr.map((url) => {
        return <Picture urlSrc={url} />;
      })}
    </div>
  );
};

export default Gallery;
