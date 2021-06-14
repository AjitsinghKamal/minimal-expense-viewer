import ExpenseViewerAmount from "./ExpenseViewerAmout";
import ExpenseViewerGraph from "./ExpenseViewerGraph";
import css from "./ExpenseViewer.module.scss";

function ExpenseViewer() {
	return (
		<div className={css.viewer}>
			<ExpenseViewerAmount label="Total Spent" amount="12000" />
			<div>
				<ExpenseViewerGraph />
			</div>
		</div>
	);
}

export default ExpenseViewer;
