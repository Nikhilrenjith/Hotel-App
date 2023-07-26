import React from "react";
import "./style.css";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
const Review = (props) => {
  const { Name, Desc, Month, Year } = props;
  return (
    <div>
      <div className="review-details">
        <div>
          <AccountBoxRoundedIcon sx={{ fontSize: "3rem" }} />
        </div>
        <div className="review-name">
          <strong>{Name}</strong>
          <p>
            {Month} {Year}
          </p>
        </div>
      </div>
      <div className="description">
        <p>{Desc}</p>
      </div>
    </div>
  );
};

export default Review;
