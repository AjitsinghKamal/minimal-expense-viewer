import { ExpenseViewer } from "../components";
import { DefaultLayout } from "../layouts";

export default function Home() {
	return (
		<DefaultLayout>
			<section>
				<ExpenseViewer />
			</section>
		</DefaultLayout>
	);
}
