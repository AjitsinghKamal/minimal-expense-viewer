import { Tag } from "components";
import css from "./ExpenseViewerLegends.module.scss";

type Props = {
	list: Tag[];
};

function ExpenseViewerLegends({ list }: Props) {
	return (
		<div className={css.legends}>
			{list.map((item) => (
				<Tag
					className={css.legends_item}
					label={item.title}
					color={item.legend}
					key={item.id}
				/>
			))}
		</div>
	);
}

export default ExpenseViewerLegends;
