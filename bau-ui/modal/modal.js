import classNames from "@grucloud/bau-css/classNames";
import { toPropsAndChildren } from "@grucloud/bau/bau.js";

export default function (context, options) {
  const { bau, css } = context;
  const { dialog } = bau.tags;

  const className = css`
    box-shadow: var(--shadow-s);
    background-color: var(--background-color);
    top: 0;
    left: 0;
    max-height: 90vh;
    max-width: 95vw;
    transition: transform 0.3s ease-out;
    border-radius: 10px;
    min-width: 400px;
    padding: 0px;
    border: 0px;
    & header {
      padding: 1rem;
      font-size: 1.8rem;
      font-weight: 800;
      text-align: center;
      background-color: var(--color-primary);
      color: var(--font-color-inverse);
    }
    & footer {
      display: flex;
      justify-content: flex-end;
      margin: 0px;
      box-shadow: var(--shadow-s);
      > * {
        margin: 12px;
      }
    }
    & > main {
      margin: 12px;
      flex-grow: 1;
      overflow: scroll;
    }
  `;

  return function Modal(...args) {
    let [props, ...children] = toPropsAndChildren(args);

    return dialog(
      { class: classNames(className, options?.class, props?.class) },
      ...children
    );
  };
}
