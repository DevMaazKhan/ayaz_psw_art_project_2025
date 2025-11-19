import { IItem } from "@/lib/types/item";
import SmallItem from "./small-item";

type IItemListProps = {
  items: IItem[];
};

const ItemList = (props: IItemListProps) => {
  return (
    <div className="flex">
      {props.items.map((item) => (
        <SmallItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
