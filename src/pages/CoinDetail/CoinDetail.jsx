import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoinDetail = () => {
  const { id } = useParams("id");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => setData(res.data));
  }, []);
  console.log(id);
  return (
    <div>
      <p>{data.symbol}</p>
    </div>
  );
};

export default CoinDetail;
