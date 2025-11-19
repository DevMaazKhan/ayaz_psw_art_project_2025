import { IItem } from "@/lib/types/item";
import ItemsSectionList from "./items-section-list";

const mostRatedItems: IItem[] = [
  {
    id: 1,
    imageSrc:
      "https://i0.wp.com/fraenkelgallery.com/wp-content/uploads/2025/09/Hujar-Gracie-Mansion-Revisted-poster.jpg?fit=235%2C294&quality=90&strip=all&ssl=1",
    price: 10000,
    title: "Peter Hujar: The Gracie Mansion Show Revisited (poster)",
  },
  {
    id: 2,
    imageSrc:
      "https://i0.wp.com/fraenkelgallery.com/wp-content/uploads/2025/07/Learoyd-2025-Poster.jpg?fit=336%2C269&quality=90&strip=all&ssl=1",
    price: 1500,
    title: "Richard Learoyd (poster)",
  },
  {
    id: 3,
    imageSrc:
      "https://i0.wp.com/fraenkelgallery.com/wp-content/uploads/2025/05/ASO-18-019-poster-with-signature-mockup.jpg?fit=235%2C294&quality=90&strip=all&ssl=1",
    price: 50000,
    title: "Alec Soth: Advice For Young Artists (50 x 40″ signed poster)",
  },
  {
    id: 4,
    imageSrc:
      "https://i0.wp.com/fraenkelgallery.com/wp-content/uploads/2025/01/CMW-The-Shape-of-Things-Cover.png?fit=215%2C294&quality=90&strip=all&ssl=1",
    price: 60000,
    title: "Alec Soth: Advice For Young Artists (50 x 40″ signed poster)",
  },
];

const MostRatedItemsList = () => {
  return (
    <div className="bg-custom">
      <ItemsSectionList heading="most rated" items={mostRatedItems} />
    </div>
  );
};

export default MostRatedItemsList;
