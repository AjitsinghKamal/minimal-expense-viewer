import css from "./ExpenseViewerDate.module.scss";
import CalendarIcon from "assets/calendar.svg";

type Props = {};
function ExpenseViewerDatePicker() {
	return (
		<div className={css.wrap}>
			<div className={css.picker}>
				<CalendarIcon width={20} />
				<span className={css.label}>This Month</span>
			</div>
		</div>
	);
}

export default ExpenseViewerDatePicker;
