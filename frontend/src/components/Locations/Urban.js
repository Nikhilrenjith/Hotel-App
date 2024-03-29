import React from "react";
import Navbar from "../Landing Page/Navbar";
import Card from "../Cards/Card";
import { useEffect, useState } from "react";
const Urban = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch("https://hotel-app-api-green.vercel.app/images")
      .then((response) => response.json())
      .then((data) => setDataList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="cards-flex">
        <div className="card-list">
          {dataList
            .filter((data) => data.Location === "Urban")
            .map((data, index) => (
              <Card key={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Urban;
