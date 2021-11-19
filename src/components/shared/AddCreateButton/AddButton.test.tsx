import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddButton from "./AddButton";

describe("Add Button component", () => {
  test("should have a button element", () => {
    render(<AddButton />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should call a function when button is clicked", () => {
    //Arrange
    const mockFn = jest.fn();
    render(<AddButton onAddCreate={mockFn} />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert;
    expect(mockFn.mock.calls.length).toEqual(1);
  });

  test("should have a title based on title props", () => {
    render(<AddButton title="Button Title" />);

    const buttonWithTitle = screen.getByText("Button Title", {
      selector: "button",
    });
    expect(buttonWithTitle).toBeInTheDocument();
  });

  test("should be disabled if button receives 'disabled' props as true", () => {
    render(<AddButton disabled={true} />);

    const disabledButton = screen.getByRole("button");
    expect(disabledButton).toBeDisabled();
  });
});
