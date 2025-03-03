import { FC } from "react";
import theme from "../styles/Theme";

interface ColoredIconProps {
  src: string;
  width?: string;
  height?: string;
}

const ColoredIcon: FC<ColoredIconProps> = ({ src, width = "4.7rem", height = "4.7rem" }) => (
  <span
    style={{
      display: "inline-block",
      width,
      height,
      backgroundColor: theme.palette.common.redColor,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      mask: `url(${src}) no-repeat center / contain`,
    }}
  />
);

export default ColoredIcon;
