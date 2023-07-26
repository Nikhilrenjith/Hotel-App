import React from "react";
import logo from "../../images/logo.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
          <Link to="/homepage">
            <img src={logo} alt="Not working" className="logo"></img>
          </Link>
        </div>
        <div className="title">
          <a href="/location" className="heading">
            All Locations
          </a>
          <a href="/rural" className="heading">
            Rural
          </a>
          <a href="/urban" className="heading">
            Urban
          </a>
        </div>
      </div>
      <div className="nav-right">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleSharpIcon
            className="profile"
            sx={{
              backgroundColor: "transparent",
              color: "grey",
              fontSize: "3rem",
            }}
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              borderRadius: "0.8rem",
              marginTop: "0.5rem",
              minWidth: "200px",
            },
          }}
        >
          <MenuItem component={Link} to="/homepage" onClick={handleClose}>
            Profile
          </MenuItem>
          <MenuItem component={Link} to="/details" onClick={handleClose}>
            My Bookings
          </MenuItem>
          <MenuItem component={Link} to="/" onClick={handleClose}>
            Log Out
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
