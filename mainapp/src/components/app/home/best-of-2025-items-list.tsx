import { IItem } from "@/lib/types/item";
import ItemsSectionList from "./items-section-list";

const bestOf2025Items: IItem[] = [
  {
    id: 1,
    imageSrc:
      "https://i0.wp.com/fraenkelgallery.com/wp-content/uploads/2025/10/Richard-Misrach-Cargo-Cover.png?fit=336%2C262&quality=90&strip=all&ssl=1",
    price: 10000,
    title: "Richard Misrach: Cargo",
  },
  {
    id: 2,
    imageSrc:
      "https://i0.wp.com/fraenkelgallery.com/wp-content/uploads/2025/10/Diane-Arbus-Sanctum-Sanctorum-Cover_edit.png?fit=262%2C294&quality=90&strip=all&ssl=1",
    price: 1500,
    title: "Diane Arbus: Sanctum Sanctorum",
  },
  {
    id: 3,
    imageSrc:
      "https://i0.wp.com/fraenkelgallery.com/wp-content/uploads/2025/08/Peter-Hujar-Portraits-in-Life-and-Death-2024-Cover-02.png?fit=272%2C294&quality=90&strip=all&ssl=1",
    price: 50000,
    title: "Peter Hujar: Portraits in Life and Death",
  },
  {
    id: 4,
    imageSrc:
      "https://i0.wp.com/fraenkelgallery.com/wp-content/uploads/2025/05/ASO-18-019-poster-with-signature-mockup.jpg?fit=235%2C294&quality=90&strip=all&ssl=1",
    price: 60000,
    title: "Alec Soth: Advice For Young Artists (50 x 40″ signed poster)",
  },
];

const BestOf2025ItemsList = () => {
  return <ItemsSectionList heading="Best of 2025" items={bestOf2025Items} />;
};

export default BestOf2025ItemsList;
