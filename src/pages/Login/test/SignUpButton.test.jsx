import { SignupButton } from "./SignUoButton";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const dataTestId = "test-id";

describe("<SignupButton/>", () => {
  describe("Snapshots tests", () => {
    it("should render successfully and match snapshot", () => {
      const { container } = render(
        <SignupButton>Зарегистрироваться</SignupButton>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe("Attributes tests", () => {
    it('should set type="button" by default', () => {
      render(<SignupButton />);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });
  });
  it("should set type attribute", () => {
    const type = "submit";
    render(<SignupButton type={type} />);

    expect(screen.getByRole("button")).toHaveAttribute("type", type);
  });

  describe("Callbacks tests", () => {
    it("should call 'onClick' prop", () => {
      const cb = jest.fn();

      render(<SignupButton onClick={cb} dataTestId={dataTestId} />);

      fireEvent.click(screen.getByTestId(dataTestId));

      expect(cb).toBeCalledWith({ name: "Name" });
    });
  });
});
