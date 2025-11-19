import { StaticImport } from "next/dist/shared/lib/get-img-props";
import dayjs from "dayjs";
import Image from "next/image";
import RenderTitle from "../other/render-title";

interface ILargeExhibitionProps {
  image: string | StaticImport;
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

const LargeExhibition = (props: ILargeExhibitionProps) => {
  return (
    <>
      {/* Exhibition Image */}
      <div className="h-[1101px] mb-11">
        <Image
          src={props.image}
          alt="header-exhibition-image"
          className="w-full h-auto object-fill"
        />
      </div>

      {/* Exhibition Details */}
      <article className="w-7/12 mx-auto px-3.5">
        <span className="text-lg font-bold mb-1.5">ON VIEW</span>
        <h2 className="text-7xl font-bold mb-6">
          <RenderTitle title={props.name} />
        </h2>
        <div className="mb-6">
          <span className="font-[montserrat] text-lg font-medium">
            {dayjs(props.startDate).format("MMM D")} - {' '}
            {dayjs(props.endDate).format("MMM D")}, {' '}
            {dayjs(props.endDate).format("YYYY")}
          </span>
        </div>
        <p className="font-[montserrat] text-2xl font-normal">
          {props.description}
        </p>
      </article>
    </>
  );
};

export default LargeExhibition;
