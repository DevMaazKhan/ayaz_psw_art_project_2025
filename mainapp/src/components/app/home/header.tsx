import * as constants from "@/lib/constant/resources-en";

const Header = () => {
  return (
    <div className="w-full h-72 flex items-center justify-center animate-fade-in group-[.header-scrolled]:animate-fade-out">
      <h1 className="font-extrabold text-7xl">{constants.HEADER_TITLE}</h1>
    </div>
  );
};

export default Header;
