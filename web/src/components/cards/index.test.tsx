/* eslint-disable no-magic-numbers */
import { render } from "@testing-library/react";

import { Card } from "./";

describe("describing <Card /> component", () => {
  it("testing rendering button with a child text", () => {
    const text = "Hello I am a card";
    const wrapper = render(<Card><div>{text}</div></Card>);
    expect(wrapper).toMatchSnapshot();
  });
});
