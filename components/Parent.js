"use client";
import React, { useState } from "react";
import useSWR from "swr";

const Parent = () => {
  const { data, isLoading, error } = useSWR("count", null, {
    fallbackData: {
      count: 0,
    },
  });
  if (isLoading) return null;
  if (error) return null;
  return (
    <div>
      Parent
      <div>{data?.count}</div>
      <Child />
    </div>
  );
};

const Child = (props) => {
  return (
    <div>
      Child
      <Child2 {...props} />
    </div>
  );
};

const Child2 = () => {
  const { data, mutate } = useSWR("count", null, {
    fallbackData: {
      count: 0,
    },
  });
  return (
    <div>
      Child2
      <button
        onClick={() => {
          mutate({ count: data.count + 1 });
        }}
      >
        +
      </button>
    </div>
  );
};

export default Parent;
