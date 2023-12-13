import classNames from "@grucloud/bau-css/classNames.js";
import { toPropsAndChildren } from "@grucloud/bau/bau.js";
import { Colors } from "../constants.js";
import radioButton from "../radioButton";

export default function (context, options = {}) {
  const { bau, css } = context;
  const { div, label } = bau.tags;
  const RadioButton = radioButton(context);

  const colorsToCss = () =>
    Colors.map(
      (color) =>
        `
  `
    ).join("\n");

  const className = css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    & label {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px dotted var(--color-emphasis-500);
      border-radius: var(--global-radius);
      gap: 0.5rem;
      padding: 0.5rem;
      cursor: pointer;
      > div {
        display: flex;
        flex-direction: column;
      }
    }
    ${colorsToCss()};
  `;

  return function RadioButtonGroup(...args) {
    let [
      {
        size = options.size ?? "md",
        variant = options.variant ?? "none",
        color = options.color ?? "neutral",
        name,
        oninput,
        value,
        radios = [],
        ...props
      },
    ] = toPropsAndChildren(args);

    return div(
      {
        ...props,
        class: classNames(
          "radioButtonGroup",
          size,
          color,
          variant,
          className,
          options?.class,
          props?.class
        ),
      },
      radios.map(({ id, Label }) =>
        label(
          RadioButton({
            size,
            variant,
            color,
            id,
            name,
            checked: value == id,
            value: id,
            oninput,
          }),
          Label()
        )
      )
    );
  };
}
