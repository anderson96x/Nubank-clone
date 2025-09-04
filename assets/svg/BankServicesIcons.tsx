import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "$src/theme/tokens";

const ICON_SIZE = 24;

export function IconPagar(props: any) {
  return (
    <Svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 18 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 0v9m4-9v9m2-9v9m4-9v9m4-9v9m2-9v9"
        stroke={colors.black}
        strokeWidth={2}
      />
    </Svg>
  )
}

export function IconPix(props: any) {
  return (
    <Svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.5 6.5L2.828 8.172a4 4 0 000 5.656L4.5 15.5m0-9l3.672-3.672a4 4 0 015.656 0L17.5 6.5m-13 0h2.124a1 1 0 01.659.247l3.058 2.677a1 1 0 001.318 0l3.058-2.677a1 1 0 01.659-.247H17.5m0 0l1.672 1.672a4 4 0 010 5.656L17.5 15.5m-13 0l3.672 3.672a4 4 0 005.656 0L17.5 15.5m-13 0h2.213a1 1 0 00.53-.152l3.227-2.017a1 1 0 011.06 0l3.227 2.017a1 1 0 00.53.152H17.5"
        stroke={colors.black}
        strokeWidth={2}
      />
    </Svg>
  )
}

export function IconRecarga(props: any) {
  return (
    <Svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 12 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 17.5h4m-5 4h6a3 3 0 003-3v-14a3 3 0 00-3-3H4a3 3 0 00-3 3v14a3 3 0 003 3z"
        stroke={colors.black}
        strokeWidth={2}
      />
    </Svg>
  )
}
