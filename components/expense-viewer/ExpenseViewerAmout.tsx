import css from "./ExpenseViewerAmout.module.scss";

type Props = {
	label: string;
	amount: string;
	currency: string;
};
function ExpenseViewerAmount({ label, amount, currency }: Props) {
	return (
		<div className={css.amount}>
			<span className={css.amount_label}>{label}</span>
			<div className={css.amount_value}>
				<sup className={css.amount_value_currency}>{currency}</sup>
				<span className={css.amount_value_spent}>{amount}</span>
			</div>
		</div>
	);
}

export default ExpenseViewerAmount;
