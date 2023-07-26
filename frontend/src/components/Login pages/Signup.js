import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./style.css";

function Signup() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);

  const cities = [
    "Jaipur",
    "Goa",
    "Mangalore",
    "Varanasi",
    "Hampi",
    "New Delhi",
    "Rishikesh",
    "Manali",
    "Amritsar",
    "Darjeeling",
  ];

  const handleCityChange = (event, value) => {
    setSelectedCities(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const address = {
      street,
      city,
      state,
      pincode,
    };

    axios
      .post("http://localhost:3001/user/register", {
        lname,
        fname,
        email,
        password,
        address,
        phone,
        city: selectedCities,
      })
      .then((response) => {
        if (response.data.message === "User registered successfully") {
          alert("User created successfully");
          navigate("/");
        } else {
          console.log("Enter correct details");
        }
      });
  };

  return (
    <div className="container">
      <div className="wrapper ">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="fname">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              autoComplete="off"
              name="fname"
              className="input-type"
              required
              value={fname}
              onChange={(e) => setfName(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="lname">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              autoComplete="off"
              name="lname"
              required
              className="input-type"
              value={lname}
              onChange={(e) => setlName(e.target.value)}
            />
          </div>

          <div className="inputs">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              required
              className="input-type"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              name="password"
              className="input-type"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="street">
              <strong>Street</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Street"
              name="street"
              required
              className="input-type"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="city">
              <strong>City</strong>
            </label>
            <input
              type="text"
              placeholder="Enter City"
              name="city"
              required
              className="input-type"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="state">
              <strong>State</strong>
            </label>
            <input
              type="text"
              required
              placeholder="Enter State"
              name="state"
              className="input-type"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="pincode">
              <strong>Pincode</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Pincode"
              name="pincode"
              required
              className="input-type"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="phone">
              <strong>Phone Number</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Number"
              name="phone"
              required
              className="input-type"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="interest">
            <label htmlFor="City">
              <strong>City of Interest</strong>
            </label>
            <Autocomplete
              multiple
              limitTags={2}
              id="multiple-limit-tags"
              options={cities}
              required
              value={selectedCities}
              onChange={handleCityChange}
              className="selecter"
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Cities"
                  placeholder="Select cities"
                />
              )}
            />
          </div>
          <div className="footer">
            <button type="submit" className="button">
              Register
            </button>
          </div>
        </form>
        <div className="footer">
          <p className="mt-2">Already Have an Account ?</p>
          <Link to="/" className="link">
            Click Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
