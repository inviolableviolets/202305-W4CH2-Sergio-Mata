import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Given a Header component", () => {
  describe("When it is intantiated", () => {
    //ARRANGE
    const title = "test title";
    //ACT

    beforeEach(() => {
      render(<Header title={title.toUpperCase()}></Header>);
    });

    test("Then it should be in the document", () => {
      //ASSERT
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument;
    });
    test.skip("Then it should display props values", () => {
      const elementH1 = screen.getByText(title);
      expect(elementH1).toBeInTheDocument;
    });
  });
});
