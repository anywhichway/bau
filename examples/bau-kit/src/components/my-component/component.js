import { css } from "goober";

export default function (context, options = {}) {
  const { theme, bau, tr } = context;
  const { palette, shape, shadows } = theme;
  const { div, span, pre, h3, h4 } = bau.tags;

  return function Checkbox(props, ...children) {
    const {} = props;

    return div("TODO");
  };
}