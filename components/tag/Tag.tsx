import { HTMLAttributes } from "react";
import cx from "classnames";
import css from "./Tag.module.scss";

type Props = {
	label: string;
	color: string;
};
function Tag({
	label,
	color,
	className,
	...rest
}: Props & HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...rest}
			className={cx(css.tag, className)}
			style={{
				["--dot" as any]: color,
			}}
		>
			<span className={css.tag_label}>{label}</span>
		</div>
	);
}

export default Tag;
