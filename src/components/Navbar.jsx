import React from "react";

export default function Navbar() {
  return (
    <div className="w-[25px] h-auto  m-[15px] absolute top-0 left-0 flex flex-col justify-around gap-1 ">
      <div className=" bg-[#E9D985] w-[70%] h-[4px] rounded-3xl self-end " />
      <div className=" bg-[#E9D985] w-[100%] h-[4px] rounded-3xl" />
      <div className=" bg-[#E9D985] w-[60%] h-[4px] rounded-3xl" />
    </div>
  );
}
