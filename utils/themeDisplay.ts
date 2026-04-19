/**
 * Utils - Display
 */

const themeDisplay = ({
  dBlock,
  dFlex,
  dInline,
  dInlineBlock,
  dInlineFlex,
  dNone,
}: any): string => {
  let display: any = null;

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
