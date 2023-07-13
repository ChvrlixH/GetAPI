import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Coins = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&authuser=0"
      )
      .then((res) => setData(res.data));
  }, []);
  return (
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Symbol</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Detail</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin, index) => {
          return (
            <tr key={index}>
              <th scope="row">{coin.symbol}</th>
              <td>
                <img style={{ width: "60px" }} src={coin.image} alt="" />
              </td>
              <td>{coin.name}</td>
              <td>{coin.current_price}</td>
              <td>
                <Link to={`admin/coins/${coin.id}`}>Go Detail</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Coins;
