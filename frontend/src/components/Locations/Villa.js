import React from "react";
import Navbar from "../Landing Page/Navbar";
import Card from "../Cards/Card";
import { useEffect, useState } from "react";
const Villa = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/images")
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
            .filter((data) => data.Category === "Villa")
            .map((data, index) => (
              <Card key={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Villa;
