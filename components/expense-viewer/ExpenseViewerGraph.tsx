import { useMemo } from "react";
import ReactFrappeChart from "react-frappe-charts";

type Props = {
	labels: string[];
	datasets: Record<string, number[]>;
};
function ExpenseViewerGraph({ datasets, labels }: Props) {
	const memoisedDataSet = useMemo(
		() =>
			Object.entries(datasets).map(([name, values]) => ({
				name,
				values,
			})),
		[datasets]
	);
	return (
		<ReactFrappeChart
			type="line"
			colors={["#21ba45"]}
			axisOptions={{
				xIsSeries: 0,
				yAxisMode: "tick",
				xAxisMode: "tick",
			}}
			lineOptions={{
				hideDots: 1,
				heatline: 1,
				regionFill: 1,
			}}
			height={250}
			data={{
				labels: labels,
				datasets: memoisedDataSet,
			}}
		/>
	);
}

export default ExpenseViewerGraph;
