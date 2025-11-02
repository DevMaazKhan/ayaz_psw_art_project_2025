import {
  LucideProps,
  SearchIcon,
  ShoppingCartIcon,
  TextAlignJustifyIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import { MouseEvent, ReactNode } from "react";

type IconName = "search" | "user" | "shopping-cart" | "menu" | "cancel";

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  onClick?: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
};

const DEFAULT_SIZE = 16;
const DEFAULT_STROKE_WIDTH = 1.3;

const Icon = (props: Readonly<IconProps>) => {
  const { name, size, strokeWidth } = props;

  let Comp: ReactNode = null;
  const iconProps: LucideProps = {
    size: size || DEFAULT_SIZE,
    strokeWidth: strokeWidth || DEFAULT_STROKE_WIDTH,
  };

  switch (name) {
    case "search":
      Comp = <SearchIcon {...iconProps} />;
      break;
    case "menu":
      Comp = <TextAlignJustifyIcon {...iconProps} />;
      break;
    case "shopping-cart":
      Comp = <ShoppingCartIcon {...iconProps} />;
      break;
    case "user":
      Comp = <UserIcon {...iconProps} />;
      break;
    case "cancel":
      Comp = <XIcon {...iconProps} />;
      break;
    default:
      Comp = null;
      break;
  }

  return (
    <div className="cursor-pointer w-max h-max" onClick={props.onClick}>
      {Comp}
    </div>
  );
};

export default Icon;
