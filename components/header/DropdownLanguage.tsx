function DropdownLanguage() {
  return (
    <ul className="dropdownDiv absolute top-7 right-0 left-0 flex flex-col gap-y-2 text-left py-4 px-4 min-w-max bg-white text-black rounded-5px shadow-md">
      <li className="cursor-pointer hover:text-red-400">English</li>
      <li className="cursor-pointer hover:text-red-400">Español</li>
      <li className="cursor-pointer hover:text-red-400">Português</li>
      <li className="text-red-400 font-light">Not functional yet</li>
    </ul>
  );
}

export default DropdownLanguage;
