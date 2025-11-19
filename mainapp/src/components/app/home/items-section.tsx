import BestOf2025ItemsList from "./best-of-2025-items-list";
import MostRatedItemsList from "./most-rated-items-list";
import TopPicksItemsList from "./top-picks-items-list";

const ItemsSection = () => {
  return (
    <div className="mb-22">
      <BestOf2025ItemsList />
      <MostRatedItemsList />
      <TopPicksItemsList />
    </div>
  );
};

export default ItemsSection;
