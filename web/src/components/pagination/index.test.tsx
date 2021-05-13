/* eslint-disable no-magic-numbers */
import { render } from "@testing-library/react";

import Pagination from "./";

describe("describing <Pagination /> component", () => {
  it("testing rendering Pagination available", () => {
    const wrapper = render(
      <Pagination
        nextPage={() => ({})}
        prevPage={() => ({})}
        offset={10}
        paginationLimit={10}
        totalCount={10}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
