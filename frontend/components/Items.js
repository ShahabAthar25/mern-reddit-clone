function Items({ text, Icon }) {
  return (
    <a href="/user/profile">
      <li className="p-4 list-none text-white z-10 shadow-md hover:bg-gray-300 rounded-lg cursor-pointer flex">
        <Icon className="mr-4 h-6" />
        <p>{text}</p>
      </li>
    </a>
  );
}

export default Items;
