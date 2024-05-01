import React from "react";

type DotProps = {
  active: boolean;
};

export const Dot = ({ active }: DotProps) => {
  return (
    <div
      className={`w-[20px] h-[20px] rounded-full ${
        active ? "bg-black" : "bg-black opacity-25 hover:opacity-40"
      }`}
    ></div>
  );
};
