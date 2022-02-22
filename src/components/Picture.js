import React, { useState } from "react";
import classes from "./Picture.module.scss";
const Picture = (props) => {
  const changeBackGround = (event) => {
    document.querySelector(".App").style =
      "background-image: linear-gradient(to right, rgba(126, 213, 111, 0.4),#55c57ab9,#28b485b6),url(" +
      event.target.src +
      ");background-size:cover";
  };
  return (
    <img
      onClick={changeBackGround}
      className={classes.picture}
      src={props.urlSrc}
    ></img>
  );
};
export default Picture;
