import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import Navbar from "../Landing Page/Navbar";
import Card from "../Cards/Card";

const Locations = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch("https://hotel-app-api-green.vercel.app/images")
      .then((response) => response.json())
      .then((data) => setDataList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="cards-flex">
        <div className="card-list">
          {dataList.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Locations;
