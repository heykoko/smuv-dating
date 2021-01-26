import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import { Link, useHistory } from "react-router-dom";

function Header({backButton}) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="headericon"></ArrowBackIosIcon>
        </IconButton>
      ):(
        <Link to="/profile">
        <IconButton>
          <PersonIcon className="header_icon" />
        </IconButton>
        </Link>
      )}
      <Link to="/">
        <IconButton>
          <h2>Smuv</h2>
        </IconButton>
      </Link>
      <Link to="/chats">
        <IconButton>
          <ChatIcon className="header_icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
