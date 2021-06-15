module.exports = {
	env: {
		APP_TITLE: "Expense Viewer",
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};
