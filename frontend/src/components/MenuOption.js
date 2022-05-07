import React from "react";

export default function MenuOption({ text, Icon }) {
  return (
    <div className="flex items-center px-2 bg-white dark:bg-[#1A1A1B] hover:bg-blue-500 dark:hover:bg-[#232324] cursor-pointer group my-1 space-x-2 py-2 z-40">
      <Icon className="text-gray-700 dark:text-white group-hover:text-white h-6 stroke-[1.5]" />
      <h1 className="group-hover:text-white text-[15px] font-medium text-gray-700 dark:text-white">
        {text}
      </h1>
    </div>
  );
}
