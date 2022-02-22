import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchBar.module.scss";
const SearchBar = (props) => {
  //default var
  const accessKey = "uXCfq9X9a1Yf5ucSt1W1hroNBlozYWdUGK9rW9XLV8E";
  const url = "https://api.unsplash.com/search/photos/?client_id=" + accessKey;

  //states
  const [keyWord, setKeyWords] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [hasResult, setHasResult] = useState(false);

  //function for handle input change
  const handleInputValueChange = (event) => {
    setKeyWords(() => {
      return event.target.value;
    });
  };

  //function for API call
  const searchPic = () => {
    console.log(keyWord);
    let searchResult = [];
    fetch(`${url}&query=${keyWord}&page=${pageNum}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length !== 0) {
          setHasResult(true);
          //data returns a array
          data.results.map((d) => {
            searchResult.push(d.urls.regular);
          });
        } else {
          setHasResult(false);
        }
      })

      .finally(() => {
        //return data to parent components
        props.imgArrHandler(searchResult);

        return searchResult;
      });
  };

  //function for previews
  const prevPic = () => {
    if (pageNum > 1) {
      setPageNum(() => {
        return pageNum - 1;
      });
      searchPic();
    }
  };

  //function for next
  const nextPic = () => {
    if (pageNum < 10) {
      setPageNum(() => {
        return pageNum + 1;
      });
      searchPic();
    }
  };

  return (
    <div className={classes.container}>
      {hasResult && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={classes.arrow}
          onClick={prevPic}
        />
      )}

      <div className={classes.SearchBar_container}>
        <input
          className={classes.SearchBar_input}
          type="text"
          placeholder="Please Enter City Name"
          onChange={handleInputValueChange}
          value={keyWord}
        />
        <FontAwesomeIcon
          className={classes.SearchBar_icon}
          icon={faMagnifyingGlass}
          onClick={searchPic}
        />
      </div>
      {hasResult && (
        <FontAwesomeIcon
          icon={faArrowRight}
          className={classes.arrow}
          onClick={nextPic}
        />
      )}
    </div>
  );
};

export default SearchBar;
