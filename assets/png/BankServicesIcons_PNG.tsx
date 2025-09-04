import { Image } from "react-native";

const ICON_SIZE = 24;

export const IconsPNG_black = {
  IconCaixinhas: (
    <Image
      source={require("@/assets/png/IconCaixinhas_black.png")}
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
    />
  ),
  IconPegarEmprestado: (
    <Image
      source={require("@/assets/png/IconPegarEmprestado_black.png")}
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
    />
  ),
  IconPix: (
    <Image
      source={require("@/assets/png/IconPix_black.png")}
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
    />
  ),
};


export const IconsPNG_white = {
  IconCaixinhas: (
    <Image
      source={require("@/assets/png/IconCaixinhas_white.png")}
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
    />
  ),
  IconPegarEmprestado: (
    <Image
      source={require("@/assets/png/IconPegarEmprestado_white.png")}
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
    />
  ),
  IconPix: (
    <Image
      source={require("@/assets/png/IconPix_white.png")}
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
    />
  ),
};
