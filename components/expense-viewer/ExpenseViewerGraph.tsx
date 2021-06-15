import { AreaChart, Area, CartesianGrid, YAxis } from "recharts";

type Props = {
	showSpecialisedColor: boolean;
	legends: Tag[] | Teams[];
	datasets: Transaction[];
	datakeys: [string, string][];
};
function ExpenseViewerGraph({ datasets, datakeys }: Props) {
	return (
		<div>
			<AreaChart width={600} height={250} data={datasets}>
				<defs>
					{datakeys.map(([key, color]) => (
						<linearGradient id={key} x1="0" y1="0" x2="0" y2="1">
							<stop
								offset="5%"
								stopColor={color}
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor={color}
								stopOpacity={0}
							/>
						</linearGradient>
					))}
				</defs>
				{datakeys.map(([key, color]) => (
					<Area
						type="monotone"
						dataKey={key}
						stroke={color}
						key={key}
						fillOpacity={1}
						fill={`url(#${key})`}
					/>
				))}
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<YAxis tickLine={false} />
			</AreaChart>
		</div>
	);
}

export default ExpenseViewerGraph;
