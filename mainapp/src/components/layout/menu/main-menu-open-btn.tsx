import Link from "next/link";
import Icon from "../../ui/icon";
import { PATH } from "@/lib/constant/path";

const MainMenuOpenButton = () => {
  return (
    <div>
      <Link href={PATH.MENU_PAGE} prefetch={true}>
        <Icon name="menu" size={34} />
      </Link>
    </div>
  );
};

export default MainMenuOpenButton;
