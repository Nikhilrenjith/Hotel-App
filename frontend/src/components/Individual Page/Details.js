import React, { useEffect, useState } from "react";
import Navbar from "../Landing Page/Navbar";
import "../Individual Page/style.css";
import AttributionOutlinedIcon from "@mui/icons-material/AttributionOutlined";
import KingBedTwoToneIcon from "@mui/icons-material/KingBedTwoTone";
import BathtubTwoToneIcon from "@mui/icons-material/BathtubTwoTone";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Review from "./Review";
import { useParams } from "react-router-dom";
import axios from "axios";
import Weather from "./Weather";

const Details = () => {
  const { id } = useParams();

  const [place, setPlace] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=us&z=18&output=embed`;
  const key = "06b744e0e888b212e663ffb1421d464b";
  useEffect(() => {
    axios.get(`http://localhost:3001/images/${id}`).then((response) => {
      setPlace(response.data);
      setLatitude(response.data.Latitude);
      setLongitude(response.data.Longitude);
    });
  });

  if (!place) return "";

  return (
    <>
      <div>
        <Navbar />
        <div className="whole">
          <div className="left">
            <div className="property-info">
              <div className="property-title">
                <h1>{place.HotelName}</h1>
                <p>
                  {place.Address.City}, {place.Address.State},{" "}
                  {place.Address.Country}
                </p>
                <span>
                  <strong>₹{place.Rooms[2].BaseRate}</strong> /night
                </span>
              </div>
              <div className="property-availability">
                <button id="btn-1" onClick={handleClick}>
                  Check Availability{" "}
                  <span className="icon-1">
                    <CalendarMonthIcon />
                  </span>
                </button>
                {isShown && (
                  <div className="dateRange">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateRangePicker"]}>
                        <DateRangePicker
                          localeText={{ start: "Check-in", end: "Check-out" }}
                          invalid={{ start: "2023-07-21", end: "2023-07-23" }}
                          disablePast="true"
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                )}
              </div>
              <div className="hotel-info">
                <div className="room-details">
                  <AttributionOutlinedIcon sx={{ fontSize: "2rem" }} />
                  <p> {place.Rooms[2].SleepsCount} Guests</p>
                </div>
                <div className="room-details">
                  <KingBedTwoToneIcon sx={{ fontSize: "2rem" }} />
                  <p>{place.Rooms[2].BedOptions}</p>
                </div>
                <div className="room-details">
                  <BathtubTwoToneIcon sx={{ fontSize: "2rem" }} />
                  <p> {place.Rooms[0].Restroom} Bathrooms</p>
                </div>
              </div>
              <div className="descrpt">
                <p>{place.Description}</p>
              </div>
              <div className="amentity">
                <ul className="amenity-list">
                  {place.Amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="review">
                <div className="review-head">
                  <div className="rating">
                    <strong>{place.Rating}</strong>
                    <StarRateRoundedIcon />
                  </div>
                  <div className="no-of-review">
                    <p style={{ fontSize: "20px" }}>
                      {place.NoOfReviews} Reviews
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {place.Review.map((review, index) => (
                  <Review
                    key={index}
                    Name={place.Review[index].Name}
                    Desc={place.Review[index].Desc}
                    Month={place.Review[index].Month}
                    Year={place.Review[index].Year}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="addons">
              <div className="weather-tab">
                <div>
                  <Weather city={place.Address.City} apiKey={key} />
                </div>
              </div>
              <div className="location">
                <iframe
                  title="Map"
                  width="350"
                  height="200"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  src={mapUrl}
                  allowfullscreen="true"
                />
              </div>
            </div>
            <div className="images">
              <div className="div1">
                <img className="div-img" src={place.Links[0]} alt=" from DB" />
              </div>
              <div className="div2">
                <div className="div2-1">
                  <img
                    className="div-img"
                    src={place.Links[1]}
                    alt=" from DB"
                  />
                </div>
                <div className="div2-2">
                  <img
                    className="div-img"
                    src={place.Links[2]}
                    alt=" from DB"
                  />
                </div>
              </div>
              <div className="div3">
                <img className="div-img" src={place.Links[3]} alt=" from DB" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div>Get in Touch</div>
        <div className="divide">
          <p>Owner Name: {place.Owner.Name}</p>
          <p>Email: {place.Owner.Email}</p>
          <p>Contact: +91 {place.Owner.Number}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
