import { PropsWithChildren } from "react";
import Head from "next/head";

import css from "./DefaultLayout.module.scss";

type Props = {
	title?: string;
	meta?: Record<string, string>;
	og?: Record<string, string>;
};

function DefaultLayout({
	children,
	title = process.env.APP_TITLE,
	meta,
}: PropsWithChildren<Props>) {
	return (
		<div className={css.page}>
			<Head>
				<title>{title}</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				{meta &&
					Object.entries(meta).map(([key, value]) => (
						<meta name={key} content={value} key={key} />
					))}
			</Head>
			<main className={css.page_content}>{children}</main>
		</div>
	);
}

export default DefaultLayout;
