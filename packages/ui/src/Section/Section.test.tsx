import { fireEvent, render, screen } from "@testing-library/react";

import Section from "./index";

describe("Section", () => {
  it("renders with the correct title and icon", () => {
    render(
      <Section title="Test Section" icon="/icons/test-icon.svg">
        <div>Test content</div>
      </Section>,
    );

    expect(screen.getByText("Test Section")).toBeInTheDocument();
    expect(screen.getByAltText("section icon")).toHaveAttribute("src", "/icons/test-icon.svg");
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies correct scroll margin class based on pathname", () => {
    const { container } = render(
      <Section title="EHS Section" icon="/icons/test-icon.svg">
        <div>Content</div>
      </Section>,
    );

    expect(container.querySelector(".scroll-mt-24")).toBeInTheDocument();
  });

  it("renders help text tooltip when provided", () => {
    render(
      <Section title="Help Section" icon="/icons/test-icon.svg" helpText="This is helpful information">
        <div>Content</div>
      </Section>,
    );

    expect(screen.getByAltText("ai assistant icon")).toBeInTheDocument();
  });

  it("does not render help text tooltip when not provided", () => {
    render(
      <Section title="No Help Section" icon="/icons/test-icon.svg">
        <div>Content</div>
      </Section>,
    );

    expect(screen.queryByAltText("ai assistant icon")).not.toBeInTheDocument();
  });

  it("renders add button when canAddNewItem is true", () => {
    const handleAddItem = jest.fn();
    render(
      <Section title="Add Section" icon="/icons/test-icon.svg" canAddNewItem={true} handleAddItem={handleAddItem}>
        <div>Content</div>
      </Section>,
    );

    const addButton = screen.getByAltText("add").closest("button");
    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton as Element);
    expect(handleAddItem).toHaveBeenCalledTimes(1);
  });

  it("does not render add button when canAddNewItem is false", () => {
    render(
      <Section title="No Add Section" icon="/icons/test-icon.svg" canAddNewItem={false}>
        <div>Content</div>
      </Section>,
    );

    expect(screen.queryByAltText("add")).not.toBeInTheDocument();
  });
});
