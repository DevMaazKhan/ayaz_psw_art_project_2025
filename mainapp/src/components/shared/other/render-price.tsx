type IRenderPriceProps = {
  price: number;
};

const RenderPrice = (props: IRenderPriceProps) => {
  const num = props.price;

  const formatted = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatted;
};

export default RenderPrice;
