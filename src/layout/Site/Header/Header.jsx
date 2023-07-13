import React from "react";
import Coins from "../../../pages/Admin/Coins/Coins";
import Home from "../../../pages/Site/Home/Home";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin/coins">Coins</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
