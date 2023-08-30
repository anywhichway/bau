import classNames from "@grucloud/bau-css/classNames.js";
import { toPropsAndChildren } from "@grucloud/bau/bau.js";

export default function (context, options) {
  const { bau, css } = context;
  const { form } = bau.tags;

  const className = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    & label {
      display: inline-flex;
      flex-direction: column;
      gap: 0.3rem;
      font-weight: 500;
    }
  `;

  return function Form(...args) {
    let [
      { color, variant = "outline", size = "md", content, ...props },
      ...children
    ] = toPropsAndChildren(args);
    return form(
      {
        ...props,
        class: classNames(
          "form",
          color,
          variant,
          size,
          className,
          options?.class,
          props?.class
        ),
      },
      ...children
    );
  };
}
