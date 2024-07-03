import React, { useEffect, useState } from "react";

const UseCurrency = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/6fa4d3491e9dd34dc916a2ad/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.log(err));
    console.log(data);
  }, [currency]);

  return data;
};

export default UseCurrency;
