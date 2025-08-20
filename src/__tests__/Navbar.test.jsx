/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom";

// Mock next/image to simply render an <img>
jest.mock("next/image", () => (props) => <img {...props} alt={props.alt} />);

// Mock next/link to render children directly
jest.mock("next/link", () => ({ children }) => children);

// Mock react-i18next
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

// Mock i18n module (imported in Navbar)
jest.mock("../i18n", () => ({
  changeLanguage: jest.fn(),
}));

import i18n from "../i18n";

describe("Navbar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders logo image and site name", () => {
    render(<Navbar />);
    expect(screen.getByAltText("A logo of a fox skull")).toBeInTheDocument();
    expect(screen.getByText("The Foxx Forge")).toBeInTheDocument();
  });

  test("renders navigation links with correct text", () => {
    render(<Navbar />);
    const nav = screen.getByTestId('navbar');

    expect(nav).toHaveTextContent('Home');
    expect(nav).toHaveTextContent('Gallery');
    expect(nav).toHaveTextContent('Pricing');
    expect(nav).toHaveTextContent('Contact');
    expect(nav).toHaveTextContent('About Me');
  });

  test("language buttons call i18n.changeLanguage with correct args", () => {
    render(<Navbar />);
    const enButton = screen.getAllByRole("button", { name: /switch to english/i })[0];
    const deButton = screen.getAllByRole("button", { name: /switch to german/i })[0];

    fireEvent.click(enButton);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("en");

    fireEvent.click(deButton);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("de");
  });

  test("hamburger menu toggles mobile menu visibility", () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });

    // Initially closed
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    // Open menu
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();

    // Close menu
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });

  test("clicking mobile menu links closes the menu", () => {
    render(<Navbar />)
  fireEvent.click(screen.getByLabelText("Toggle menu"));

  const mobileMenu = screen.getByTestId("mobile-menu");
  const homeLink = within(mobileMenu).getByText("Home"); 
  fireEvent.click(homeLink);

  expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
});

test("language buttons in mobile menu change language and close menu", () => {
  render(<Navbar />);
  const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
  fireEvent.click(toggleButton); // open menu

  const mobileMenu = screen.getByTestId("mobile-menu");
  const enButtonDropdown = within(mobileMenu).getByRole("button", { name: /switch to english/i });
  fireEvent.click(enButtonDropdown);

  expect(i18n.changeLanguage).toHaveBeenCalledWith("en");
  expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
});
});
