import classNames from "classnames";
import React, {
  forwardRef,
  ReactNode,
  MouseEventHandler,
  ButtonHTMLAttributes,
} from "react";

type Props = {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: "primary" | "secondary";
  variant?: "filled" | "link";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    className,
    children,
    disabled,
    onClick,
    color = "primary",
    variant = "filled",
    ...rest
  } = props;

  const classes = classNames(
    "button",
    color && `button-${color}`,
    variant && `button-${variant}`,
    disabled && "button-disabled",
    className
  );

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <span className="text">{children}</span>
    </button>
  );
});

Button.displayName = "Button";

export default Button;
