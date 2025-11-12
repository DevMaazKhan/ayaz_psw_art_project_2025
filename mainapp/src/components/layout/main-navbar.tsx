import Icon from "../ui/icon";
import MenuOpenButton from "./menu/main-menu-open-btn";
import SearchOpenButton from "./search/search-open-btn";

const MainNavbar = () => {
  return (
    <div className="flex items-center justify-between p-4 sticky top-0 left-0 bg-white z-10">
      <div>
        <SearchOpenButton />
      </div>

      <div className="flex items-center gap-6">
        <Icon name="user" size={34} />
        <Icon name="shopping-cart" size={34} />
        <MenuOpenButton />
      </div>
    </div>
  );
};

export default MainNavbar;
