import Link from "next/link";
import Icon from "../../ui/icon";
import { PATH } from "@/lib/constant/path";

const SearchOpenButton = () => {
  return (
    <Link href={PATH.SEARCH_PAGE} prefetch={true}>
      <Icon name="search" size={34} />
    </Link>
  );
};

export default SearchOpenButton;
