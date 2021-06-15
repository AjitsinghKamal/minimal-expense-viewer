import { PropsWithChildren, HTMLAttributes } from "react";
import css from "./Button.module.scss";
import cx from "classnames";

type Props = {
	onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>;
function Button({
	children,
	className,
	onClick,
	...rest
}: PropsWithChildren<Props>) {
	return (
		<button className={cx(css.btn, className)} {...rest} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
