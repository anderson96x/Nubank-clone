import * as React from "react"
import Svg, { Path } from "react-native-svg"

type ChevronRightProps = {
  color?: string;
  width?: number;
  height?: number;
};

function ChevronRight({color = "#5c5c5c", width=20, height=20, ...props}: ChevronRightProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M7.5 15l5-5-5-5"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ChevronRight;