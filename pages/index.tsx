import { GetStaticProps } from "next";

import { ExpenseViewer } from "components";
import type { ExpenseViewerProps } from "components";
import { DefaultLayout } from "layouts";
import { fetchTags, fetchTeams, fetchTransactions } from "http/expense";

function Home(props: ExpenseViewerProps) {
	return (
		<DefaultLayout>
			<section>
				<ExpenseViewer {...props} />
			</section>
		</DefaultLayout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const [tagsRes, teamRes, dataRes] = await Promise.all([
			fetchTags(),
			fetchTeams(),
			fetchTransactions(),
		]);
		const tags = await tagsRes.json();
		const teams = await teamRes.json();
		const transactions = await dataRes.json();
		return { props: { tags, transactions, teams } };
	} catch (e) {
		console.error(e);
		return { props: { tags: [], transactions: [], teams: [] } };
	}
};

export default Home;
