import ExpenseViewerAmount from "./ExpenseViewerAmout";
import ExpenseViewerGraph from "./ExpenseViewerGraph";
import ExpenseViewerLegends from "./ExpenseViewerLegends";
import ExpenseReducer, { initialState } from "./ExpenseReducer";

import css from "./ExpenseViewer.module.scss";
import { useMemo, useReducer } from "react";

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
function getCategoryName(categorySlug: string | null) {
	if (categorySlug === "tagId") return "Tag";
	if (categorySlug === "teamId") return "Team";
	return "All";
}

function ExpenseViewer({ tags, transactions, teams }: Props) {
	const [state, dispatch] = useReducer(ExpenseReducer, initialState);

	// compute total spent and
	// generate datasets based on categories
	const memo = useMemo(() => {
		return transactions.reduce<{
			filteredDataSets: Record<string, number[]>;
			total: number;
			labels: string[];
		}>(
			(acc, transaction) => {
				const hasFilters = state.category;
				const matchFilter =
					state.category &&
					state.filterBy[transaction[state.category]];

				// Only add a transaction to the dataset
				// when either -
				//
				// no category filter is set, in which case
				// the dataset represents all transactions
				// or
				// a category is set, in which case we add
				// the transaction matching the category
				if ((hasFilters && matchFilter) || !hasFilters) {
					const slug = getCategoryName(state.category);
					acc.total += Number(transaction.amountInCents);
					acc.labels.push(transaction.doneAt);

					if (acc.filteredDataSets[slug]) {
						acc.filteredDataSets[slug].push(
							+transaction.amountInCents
						);
					} else {
						acc.filteredDataSets[slug] = [
							+transaction.amountInCents,
						];
					}
				}
				return acc;
			},
			{ filteredDataSets: {}, total: 0, labels: [] }
		);
	}, [transactions.length, JSON.stringify(state.filterBy)]);

	return (
		<div className={css.viewer}>
			<div className={css.viewer_header}>
				<ExpenseViewerAmount
					label="Total Spent"
					amount={memo.total}
					currency="$"
				/>
				<ExpenseViewerLegends list={tags} dispatch={dispatch} />
			</div>
			<ExpenseViewerGraph
				datasets={memo.filteredDataSets}
				labels={memo.labels}
			/>
		</div>
	);
}

export default ExpenseViewer;
