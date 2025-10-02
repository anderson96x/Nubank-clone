import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "$src/theme/tokens";

const ICON_SIZE = 24;

export function SwitchVertical({selected = false, ...props}: any) {
  return (
    <Svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.167 3.333v13.334m0 0l-3.334-3.334m3.334 3.334l3.333-3.334M5.833 16.667V3.333m0 0L2.5 6.667m3.333-3.334l3.334 3.334"
        stroke={selected ? "#8a19d6" : "#686868"}
        strokeWidth={2}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CurrencyDollar({selected = false, ...props}: any) {
  return (
    <Svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 3.333H8.333a3.333 3.333 0 000 6.667h3.334a3.333 3.333 0 010 6.667H8.333A3.333 3.333 0 015 13.333m5-10V1.667m0 1.666h1.667A3.333 3.333 0 0115 6.667m-5 11.666v-1.666"
        stroke={selected ? "#8a19d6" : "#686868"}
        strokeWidth={1.8}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ShoppingBag({selected = false, ...props}: any) {
  return (
    <Svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.994 6.626l-.5 6.334c-.142 1.516-.213 2.274.038 2.86a2.5 2.5 0 001.1 1.208c.56.305 1.321.305 2.845.305h7.048c1.523 0 2.284 0 2.844-.305a2.5 2.5 0 001.1-1.208c.252-.586.18-1.344.038-2.86l-.5-6.334M13.334 5a3.333 3.333 0 00-6.667 0"
        stroke={selected ? "#8a19d6" : "#686868"}
        strokeWidth={1.8}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function Phone({selected = false, ...props}: any) {
  return (
    <Svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 14.583h.008m-3.175 3.75h6.334c.933 0 1.4 0 1.756-.181.314-.16.569-.415.729-.729.181-.356.181-.823.181-1.756V4.333c0-.933 0-1.4-.181-1.756a1.667 1.667 0 00-.729-.729c-.356-.181-.823-.181-1.756-.181H6.833c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756v11.334c0 .933 0 1.4.181 1.756.16.314.415.569.729.729.356.181.823.181 1.756.181zm3.584-3.75a.417.417 0 11-.834 0 .417.417 0 01.834 0z"
        stroke={selected ? "#8a19d6" : "#686868"}
        strokeWidth={1.8}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
