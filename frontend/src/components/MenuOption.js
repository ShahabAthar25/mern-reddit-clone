import React from "react";

export default function MenuOption({ title }) {
  return (
    <div className="px-3 py-2 hover:bg-[#0179D3]">
      <h1 className="text-base ">{title}</h1>
    </div>
  );
}
