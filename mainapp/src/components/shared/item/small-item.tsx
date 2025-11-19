import { IItem } from "@/lib/types/item";
import Image from "next/image";
import Link from "next/link";
import RenderTitle from "../other/render-title";
import RenderPrice from "../other/render-price";

type ISmallItemProps = {
  item: IItem;
};

const SmallItem = (props: ISmallItemProps) => {
  const { item } = props;

  return (
    <article className="mb-6 w-1/4 box-border px-4" key={item.id}>
      <div className="h-0 pb-[87.5%] relative mb-3">
        <figure className="bottom-0 left-0 right-0 top-0 absolute m-0">
          <Link
            className="flex p-4 justify-center items-center h-full"
            href="/"
          >
            <Image
              src={item.imageSrc}
              alt="image"
              width="336"
              height="262"
              className="h-full object-contain w-full"
            />
          </Link>
        </figure>
      </div>
      <header className="mb-6">
        <h2 className="font-[montserrat] text-[16px] font-medium mb-1.5">
          <RenderTitle title={item.title} />
        </h2>
        <div>
          <span className="text-[16px] font-[montserrat] font-medium">
            <RenderPrice price={item.price} />
          </span>
        </div>
      </header>
    </article>
  );
};

export default SmallItem;
