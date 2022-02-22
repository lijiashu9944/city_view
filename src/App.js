import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SeachBar";
import Gallery from "./components/Gallery";
import { faL } from "@fortawesome/free-solid-svg-icons";

function App() {
  //default var
  const accessKey = "uXCfq9X9a1Yf5ucSt1W1hroNBlozYWdUGK9rW9XLV8E";
  const url = "https://api.unsplash.com/search/photos/?client_id=" + accessKey;
  const [imgArr, setImgArr] = useState([]);
  const [hasResult, setHasResult] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  if (hasResult && imgArr.length !== 0) {
    document.querySelector(".App").style =
      "background-image: linear-gradient(to right, rgba(126, 213, 111, 0.4),#55c57ab9,#28b485b6),url(" +
      imgArr[0] +
      ");background-size:cover";
  }

  const imgArrHandler = (newImgArr) => {
    setImgArr((imgArr) => {
      setHasResult((hasResult) => {
        return true;
      });
      return newImgArr;
    });
  };

  return (
    <div className="App">
      <SearchBar imgArrHandler={imgArrHandler} pageNum={pageNum} />
      <Gallery imgArr={imgArr} />
    </div>
  );
}

export default App;
