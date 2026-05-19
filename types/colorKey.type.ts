import type { BaseColorName, ColorShade } from "@/styles/theme";

type ColorKey = BaseColorName | `${BaseColorName & string}-${ColorShade}`;
export default ColorKey;
