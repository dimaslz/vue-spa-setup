import { render, screen } from "@testing-library/vue";

import Dummy from "./Dummy.vue";

describe("Components - Dummy", () => {
	test("should be render correctly", () => {
		render(Dummy);

		expect(screen.getByText("dummy component")).toBeInTheDocument();
	});
});
