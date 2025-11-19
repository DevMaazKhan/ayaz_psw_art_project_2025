import ItemList from "@/components/shared/item/item-list";
import { Button } from "@/components/ui/button";
import { IItem } from "@/lib/types/item";

type IItemsSectionListProps = {
  heading: string;
  items: IItem[];
};

const ItemsSectionList = (props: IItemsSectionListProps) => {
  return (
    <div className="py-23">
      <div className="max-w-360 mx-auto px-5">
        <header className="flex justify-between items-center">
          <span className="font-bold text-3xl uppercase mb-6">
            {props.heading}
          </span>
          <Button variant="link" size="lg" className="uppercase text-lg">
            View All
          </Button>
        </header>
        <ItemList items={props.items} />
      </div>
    </div>
  );
};

export default ItemsSectionList;
