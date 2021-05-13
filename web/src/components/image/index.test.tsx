/* eslint-disable no-magic-numbers */
import { render } from "@testing-library/react";

import LocalImage from "./";

describe("describing <LocalImage /> component", () => {
  it("testing rendering LocalImage available", () => {
    const wrapper = render(<LocalImage src={"src"} alt={"alt"}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
