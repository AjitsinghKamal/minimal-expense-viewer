import {
	GetServerSideProps,
	GetServerSidePropsContext,
	GetStaticProps,
	NextApiRequest,
} from "next";
import { ExpenseViewer } from "../components";
import { DefaultLayout } from "../layouts";

type Props = {
	tags: Tag[];
	transactions: Transaction[];
};
function Home(props: Props) {
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
		const [tagsRes, dataRes] = await Promise.all([
			fetch(`${process.env.APP_PATH}/api/tags`, {
				headers: { "Content-Type": "application/json" },
			}),
			fetch(`${process.env.APP_PATH}/api/transactions`, {
				headers: { "Content-Type": "application/json" },
			}),
		]);
		const tags = await tagsRes.json();
		const transactions = await dataRes.json();

		console.log(transactions);
		return { props: { tags, transactions } };
	} catch (e) {
		console.error(e);
		return { props: { tags: [] } };
	}
};

export default Home;
