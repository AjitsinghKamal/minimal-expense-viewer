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
		console.log(`${process.env.APP_PATH}/api/tags`);
		const data = await fetch(`${process.env.APP_PATH}/api/tags`, {
			headers: { "Content-Type": "application/json" },
		});
		const json = await data.json();
		return { props: { tags: json } };
	} catch (e) {
		console.error(e);
		return { props: { tags: [] } };
	}
};

export default Home;
