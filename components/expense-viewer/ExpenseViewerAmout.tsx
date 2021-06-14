import css from "./ExpenseViewerAmout.module.scss";

type Props = {
	label: string;
	amount: string;
};
function ExpenseViewerAmount({ label, amount }: Props) {
	return (
		<div className={css.amount}>
			<span className={css.amount_label}>{label}</span>
			<span className={css.amount_value}>{amount}</span>
		</div>
	);
}

export default ExpenseViewerAmount;
