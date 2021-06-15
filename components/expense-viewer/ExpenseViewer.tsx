import { useMemo, useReducer } from "react";
import dayjs from "dayjs";

import ExpenseViewerAmount from "./ExpenseViewerAmout";
import ExpenseViewerGraph from "./ExpenseViewerGraph";
import ExpenseViewerLegends from "./ExpenseViewerLegends";
import ExpenseViewerDatePicker from "./ExpenseViewerDate";
import ExpenseReducer, { initialState } from "./ExpenseReducer";

import css from "./ExpenseViewer.module.scss";

export type Props = {
	tags: Tag[];
	teams: Teams[];
	transactions: Transaction[];
};

/**
 * Used in attaching a name to dataset
 * since, multiple filters can be applied at a time
 * @param categorySlug selected category identifier
 * @returns dataset label
 */
const getCategoryName = (categorySlug?: string, subCat?: string) => {
	if (subCat) return subCat;
	if (categorySlug === "tag") return "Tag";
	if (categorySlug === "team") return "Team";
	return "amount";
};

function ExpenseViewer({ tags, transactions, teams }: Props) {
	const [state, dispatch] = useReducer(ExpenseReducer, initialState);

	/**
	 * Compute total spent and
	 * generate datasets based on categories
	 */
	const memo = useMemo(() => {
		const filteredDataSets: any[] = [];
		let total: number = 0;
		const dataKeys: Record<string, string> = {};
		for (const transaction of transactions) {
			const hasFilters = state.category;
			const matchFilter =
				state.category &&
				transaction[state.category] &&
				state.filterBy[transaction[state.category].id];

			// Only add a transaction to the dataset
			// when either -
			//
			// no category filter is set, in which case
			// the dataset represents all transactions
			// or
			// a category is set, in which case we add
			// the transaction matching the category
			if ((hasFilters && matchFilter) || !hasFilters) {
				const slug = getCategoryName(
					state.category,
					state.category && transaction[state.category].title
				);

				total += Number(transaction.amountInCents);
				filteredDataSets.push({
					on: dayjs(transaction.doneAt).format("DD-MM-YY"),
					[slug]: transaction.amountInCents,
				});

				if (!dataKeys.slug) {
					dataKeys[slug] = state.category
						? transaction[state.category].legend
						: `#8884d8`;
				}
			}
		}

		return {
			total,
			filteredDataSets,
			dataKeys: Object.entries(dataKeys),
		};
	}, [transactions.length, state.category, JSON.stringify(state.filterBy)]);

	return (
		<div className={css.viewer}>
			<ExpenseViewerDatePicker />
			<div className={css.viewer_header}>
				<ExpenseViewerAmount
					label="Total Spent"
					amount={memo.total}
					currency="$"
				/>
				<ExpenseViewerLegends
					list={state.category === "tag" ? tags : teams}
					dispatch={dispatch}
					activeCategory={state.category}
					activeFilter={state.filterBy}
				/>
			</div>
			<ExpenseViewerGraph
				datasets={memo.filteredDataSets}
				datakeys={memo.dataKeys}
			/>
		</div>
	);
}

export default ExpenseViewer;
