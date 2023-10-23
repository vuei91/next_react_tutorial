"use client";
import axios from "axios";
import React from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const resp = await axios.get(url);
  return resp.data;
};

const page = () => {
  const { data, isLoading, error, mutate } = useSWR(
    "https://dummyjson.com/products",
    fetcher
  );
  if (error) return <h1>에러 발생</h1>;
  if (isLoading) return <div>데이터 없음</div>;
  if (data) {
    return (
      <div>
        {data.products?.map((e) => {
          return (
            <div key={e.id} style={{ padding: "0 50px" }}>
              <h1>Title</h1>
              <div>{e?.title || "데이터 없음"}</div>
              <h1>Image</h1>
              {data.products?.length > 0 ? (
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
  }
};

export default page;
