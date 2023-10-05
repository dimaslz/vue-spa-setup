import { render, screen } from "@testing-library/vue";

import App from "./App.vue";

describe("App", () => {
	test("should see title", () => {
		render(App);

		expect(
			screen.getByText("Vue 3 + Vite + TailwindCSS + Vitest"),
		).toBeInTheDocument();
	});

	test("should see Dummy component", () => {
		render(App);

		expect(screen.getByText("dummy component")).toBeInTheDocument();
	});
});
