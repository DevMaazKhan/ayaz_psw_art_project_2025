import Link from "next/link";
import Icon from "../../ui/icon";

const SearchOpenButton = () => {
  return (
    <Link href="/search" prefetch={true}>
      <Icon name="search" size={34} />
    </Link>
  );
};

export default SearchOpenButton;
