"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {data?.products?.map((e) => {
        return (
          <div style={{ padding: "0 50px" }}>
            <h1>Title</h1>
            <div>{e?.title || "데이터 없음"}</div>
            <h1>Image</h1>
            {data?.products?.length > 0 ? (
              <img src={e?.images[0]} />
            ) : (
              <div>이미지 없음</div>
            )}
            <div style={{ borderBottom: "1px solid" }}></div>
          </div>
        );
      }) || "데이터 없음"}
    </div>
  );
};

export default Home;
