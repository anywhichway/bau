import { Colors } from "../constants.js";

const colorsToCss = () =>
  Colors.map(
    (color) =>
      `
&.input.${color} {
  border: 2px solid transparent;
}
&.input.plain.${color} {
  &:focus {
    border-color: var(--color-${color});
  };
}
&.input.outline.${color} {
  border: 1px solid var(--color-${color});
  &:focus {
    outline: 4px auto var(--color-${color});
  };
}
&.input.solid.${color} {
  &:focus {
    outline: 4px auto var(--color-${color}-lightest);
  };
  &::placeholder {
    color: var(--font-color-inverse-secondary);
  }
  &:hover {
    background-color: var(--color-${color}-light);
  }
}
`
  ).join("\n");

export default function (context, options = {}) {
  const { bau, css } = context;
  const { input } = bau.tags;

  const className = css`
    display: inline-block;
    box-shadow: var(--shadow-s);
    border-radius: var(--global-radius);
    box-sizing: border-box;
    outline: none;
    color: inherit;
    transition: background-color var(--transition-fast) ease-in-out;
    &.input:hover {
      background-color: var(--color-emphasis-100);
    }
    &.input:disabled {
      filter: grayscale(100%);
      background-color: var(--color-emphasis-100);
    }
    &.sm {
      padding: 0.4rem;
    }
    &.md {
      padding: 0.5rem;
    }
    &.lg {
      padding: 0.8rem;
    }
    ${colorsToCss()}
  `;

  return function Input(props) {
    const {
      // Use options to set the component size,
      variant = options.variant ?? "outline",
      color = options.color ?? "neutral",
      ...otherProps
    } = props;

    return input({
      type: "text",
      ...otherProps,
      class: [
        "input",
        options.class,
        options.size ?? "md",
        color,
        variant,
        className,
        Array.isArray(props.class) ? props.class?.join(" ") : props.class,
      ],
    });
  };
}
