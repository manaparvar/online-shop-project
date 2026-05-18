/**
 * Utils - Display
 */

type ThemeDisplayProps = {
  dBlock?: boolean;
  dFlex?: boolean;
  dInline?: boolean;
  dInlineBlock?: boolean;
  dInlineFlex?: boolean;
  dNone?: boolean;
};

const themeDisplay = ({
  dBlock,
  dFlex,
  dInline,
  dInlineBlock,
  dInlineFlex,
  dNone,
}: ThemeDisplayProps): string => {
  let display: string | null = null;

  if (dBlock) {
    display = "block";
  }

  if (dFlex) {
    display = "flex";
  }

  if (dInline) {
    display = "inline";
  }

  if (dInlineBlock) {
    display = "inline-block";
  }

  if (dInlineFlex) {
    display = "inline-flex";
  }

  if (dNone) {
    display = "none";
  }

  return display ? `display: ${display} !important;` : "";
};

export default themeDisplay;
