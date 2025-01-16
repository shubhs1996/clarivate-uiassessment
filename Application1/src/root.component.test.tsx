import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Root from "./root.component";
import React from "react";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root/>);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
