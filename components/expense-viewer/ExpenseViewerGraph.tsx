import {
	AreaChart,
	Area,
	CartesianGrid,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import css from "./ExpenseViewerGraph.module.scss";

type Props = {
	datasets: Transaction[];
	datakeys: [string, string][];
};

const formatYAxisLabel = (tick: number) => `$ ${(tick / 100).toLocaleString()}`;
const CustomTooltip = ({
	active,
	payload,
}: {
	active?: string;
	payload?: any[];
}) => {
	if (active && payload && payload.length) {
		return (
			<div className={css.tooltip}>
				<p>{payload[0].payload.on}</p>
				<p className={css.tooltip_value}>
					$ {(payload[0].value / 100).toLocaleString()}
				</p>
			</div>
		);
	}

	return null;
};

function ExpenseViewerGraph({ datasets, datakeys }: Props) {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart width={600} height={250} data={datasets}>
				<defs>
					{datakeys.map(([key, color]) => (
						<linearGradient
							id={key}
							x1="0"
							y1="0"
							x2="0"
							y2="1"
							key={key}
						>
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
				<YAxis
					tickLine={false}
					tickFormatter={formatYAxisLabel}
					width={80}
				/>
				<Tooltip content={<CustomTooltip />} />
			</AreaChart>
		</ResponsiveContainer>
	);
}

export default ExpenseViewerGraph;
