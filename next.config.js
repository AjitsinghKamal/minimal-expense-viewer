const withTM = require("next-transpile-modules")([
	"react-frappe-charts",
	"frappe-charts",
]);
module.exports = withTM({
	env: {
		APP_TITLE: "Expense Viewer",
	},
});
