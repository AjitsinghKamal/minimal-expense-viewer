import cx from "classnames";
import { Tag, Button } from "components";
import { Dispatch } from "react";
import { Action } from "./ExpenseReducer";

import css from "./ExpenseViewerLegends.module.scss";

type Props = {
	list: Tag[];
	activeCategory?: "tag" | "team";
	activeFilter?: Record<string, boolean>;
	dispatch: Dispatch<Action>;
};

function ExpenseViewerLegends({
	list,
	dispatch,
	activeCategory,
	activeFilter,
}: Props) {
	const handleCategoryChange = (val: "tag" | "team") => {
		dispatch({
			type: "category",
			payload: val,
			default: list[0].id,
		});
	};

	const handleFilterChange = (val: number) => {
		dispatch({
			type: "filter",
			payload: val,
		});
	};

	return (
		<div className={css.wrap}>
			<div className={css.actions}>
				<Button
					className={cx(css.actions_team, {
						[css.actions___active]: activeCategory === "team",
					})}
					onClick={() => handleCategoryChange("team")}
				>
					Expense by Type
				</Button>
				<Button
					className={cx(css.actions_team, {
						[css.actions___active]: activeCategory === "tag",
					})}
					onClick={() => handleCategoryChange("tag")}
				>
					Expense by Team
				</Button>
			</div>
			<div className={css.legends}>
				{activeCategory &&
					list.map((item) => (
						<Tag
							onClick={() => handleFilterChange(item.id)}
							className={cx(css.legends_item, {
								[css.legends_item___active]:
									activeFilter && activeFilter[item.id],
							})}
							label={item.title}
							color={item.legend}
							key={item.id}
						/>
					))}
			</div>
		</div>
	);
}

export default ExpenseViewerLegends;
