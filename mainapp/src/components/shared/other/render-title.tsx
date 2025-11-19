type IRenderTitleProps = {
  title: string;
};

const RenderTitle = (props: IRenderTitleProps) => {
  return (
    <>
      {props.title.split(":")[0].trim()}
      <br />
      <span className="text-black/50">{props.title.split(":")[1]?.trim() || ""}</span>
    </>
  );
};

export default RenderTitle;
