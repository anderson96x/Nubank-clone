import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "$src/theme/tokens";

function IconCard(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.153 6.91v2.567M6.66 23.602h6.42c2.837 0 5.137-2.3 5.137-5.136V6.909c0-2.837-2.3-5.136-5.137-5.136H6.66a5.136 5.136 0 00-5.136 5.136v11.557c0 2.837 2.3 5.136 5.136 5.136z"
        stroke={colors.black}
        strokeWidth={2.56818}
      />
    </Svg>
  )
}

export default IconCard;