/* eslint-disable no-magic-numbers */
import { render } from "@testing-library/react";

import LoadingSpinner from "./";

describe("describing <LoadingSpinner /> component", () => {
  it("testing rendering LoadingSpinner available", () => {
    const wrapper = render(<LoadingSpinner />);
    expect(wrapper).toMatchSnapshot();
  });
});
