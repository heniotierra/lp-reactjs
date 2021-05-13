/* eslint-disable no-magic-numbers */
import { render } from "@testing-library/react";

import AvailabilityIndicator from "./AvailabilityIndicator";

describe("describing <AvailabilityIndicator /> component", () => {
  it("testing rendering AvailabilityIndicator available", () => {
    const wrapper = render(<AvailabilityIndicator available={true}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
