import * as constants from "@/lib/constant/resources-en";

const Header = () => {
  return (
    <div className="w-full h-72 flex items-center justify-center">
      <h1 className="font-extrabold text-7xl animate-fade-in">{constants.HEADER_TITLE}</h1>
    </div>
  );
};

export default Header;
