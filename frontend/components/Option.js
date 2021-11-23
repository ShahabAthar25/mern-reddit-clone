import React from "react";

function Option({ text, Icon, href }) {
  return (
    <div>
      <a
        href={href}
        className="p-4 flex items-center cursor-pointer hover:bg-gray-400"
      >
        <Icon className="h-6 pr-4" />
        <h1>{text}</h1>
      </a>
    </div>
  );
}

export default Option;
