import ExpenseViewerAmount from "./ExpenseViewerAmout";
import ExpenseViewerGraph from "./ExpenseViewerGraph";
import ExpenseViewerLegends from "./ExpenseViewerLegends";

import css from "./ExpenseViewer.module.scss";

export type Props = {
	tags: Tag[];
};
function ExpenseViewer({ tags }: Props) {
	return (
		<div className={css.viewer}>
			<div className={css.viewer_header}>
				<ExpenseViewerAmount
					label="Total Spent"
					amount="12000"
					currency="$"
				/>
				<ExpenseViewerLegends list={tags} />
			</div>
			<ExpenseViewerGraph />
		</div>
	);
}

export default ExpenseViewer;
