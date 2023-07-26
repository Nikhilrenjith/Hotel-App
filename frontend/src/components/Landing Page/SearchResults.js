import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "../Cards/Card";
import { useEffect, useState } from "react";
import "./style.css";
const capitalizeWords = (str) => {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });

  return capitalizedWords.join(" ");
};
const SearchResults = ({}) => {
  const { searchText } = useParams();
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/images")
      .then((response) => response.json())
      .then((data) => setDataList(data))
      .catch((error) => console.error(error));
  }, []);
  const capitalizedSearchText = capitalizeWords(searchText);
  return (
    <div>
      <Navbar />

      <div className="cards-flex">
        <div className="card-list">
          {dataList
            .filter(
              (data) =>
                data.Address.City == capitalizedSearchText ||
                data.Category === capitalizedSearchText
            )
            .map((data, index) => (
              <Card key={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
