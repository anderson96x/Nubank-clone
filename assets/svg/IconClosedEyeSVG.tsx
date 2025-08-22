import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { ICON_SIZE } from "../../src/theme/tokens";

const IconClosedEyeSVG = (props: any) => (
  <Svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.20459 10.7273C3.20459 10.7273 4.21579 12.6052 6.16967 14.5795M28.2444 10.7273C28.2444 10.7273 27.3776 12.6052 25.5756 14.5795M25.5756 14.5795C24.161 16.1294 22.1701 17.7386 19.5698 18.5455M25.5756 14.5795L28.2444 17.1477M19.5698 18.5455C18.4991 18.8777 17.3251 19.0739 16.0455 19.0739C14.6532 19.0739 13.3681 18.8416 12.1932 18.4546M19.5698 18.5455L21.1819 21.642M12.1932 18.4546C9.6656 17.622 7.64786 16.0732 6.16967 14.5795M12.1932 18.4546L10.9091 21.642M6.16967 14.5795L3.84664 17.1477"
      stroke="white"
      strokeWidth={2.56818}
    />
  </Svg>
);
export default IconClosedEyeSVG;
