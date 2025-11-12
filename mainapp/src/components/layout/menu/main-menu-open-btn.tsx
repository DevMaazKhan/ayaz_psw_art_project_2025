import Link from "next/link";
import Icon from "../../ui/icon";

const MainMenuOpenButton = () => {
  return (
    <div>
      <Link href="/menu" prefetch={true}>
        <Icon name="menu" size={34} />
      </Link>
    </div>
  );
};

export default MainMenuOpenButton;
