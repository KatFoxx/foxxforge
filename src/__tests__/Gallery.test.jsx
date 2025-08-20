/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Gallery from "../components/Gallery";

// Mock react-i18next
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

// Mock TierGallery component to render placeholder
jest.mock("../components/TierGallery", () => ({ images }) => (
  <div data-testid="tier-gallery">{JSON.stringify(images)}</div>
));

describe("Gallery", () => {
  test("renders main heading and subheadings", () => {
    render(<Gallery />);
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Painted Miniatures")).toBeInTheDocument();
    expect(screen.getByText("Conversions")).toBeInTheDocument();
  });

  test("renders two TierGallery components with correct props", () => {
    render(<Gallery />);
    const tierGalleries = screen.getAllByTestId("tier-gallery");
    expect(tierGalleries).toHaveLength(2);
    
    tierGalleries.forEach(gallery => {
      expect(gallery.textContent.length).toBeGreaterThan(0);
    });
  });
});
