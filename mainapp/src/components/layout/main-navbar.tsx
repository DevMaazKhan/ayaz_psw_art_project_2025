import Icon from "../ui/icon";
import MenuOpenButton from "./main-menu-open-btn";

const MainNavbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <Icon name="search" size={34} />
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
