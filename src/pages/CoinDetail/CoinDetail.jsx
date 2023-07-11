import React from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const { id } = useParams();
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
