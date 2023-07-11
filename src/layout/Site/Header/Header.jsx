import React from "react";
import Coins from "../../../pages/Admin/Coins/Coins";
import Home from "../../../pages/Site/Home/Home";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/coins">Coins</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
