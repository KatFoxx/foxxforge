/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom';
import FadingGallery from "../components/FadingGallery"

// Mock next/image to simplify tests
jest.mock("next/image", () => (props) => {

  return <img src={props.src} alt={props.alt} className={props.className} />;
});

jest.useFakeTimers();

describe("FadingGallery", () => {
  test("renders all images with only one visible at a time", () => {
    render(<FadingGallery />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(4);

    images.forEach((img, i) => {
      if (i === 0) {
        expect(img.className).toContain("opacity-100");
      } else {
        expect(img.className).toContain("opacity-0");
      }
    });
  });

  test("cycles images every 5 seconds", () => {
  jest.useFakeTimers();
  render(<FadingGallery />);
  const images = screen.getAllByRole("img");

  // Initially first image visible
  expect(images[0]).toHaveClass("opacity-100");
  expect(images[1]).toHaveClass("opacity-0");

  // Advance time by 5 seconds
  act(() => {
    jest.advanceTimersByTime(5000);
  });

  // Second image visible
  expect(images[0]).toHaveClass("opacity-0");
  expect(images[1]).toHaveClass("opacity-100");

  // Advance another 5 seconds
  act(() => {
    jest.advanceTimersByTime(5000);
  });

  // Third image visible
  expect(images[1]).toHaveClass("opacity-0");
  expect(images[2]).toHaveClass("opacity-100");
});

  test("clears interval on unmount", () => {
    const clearIntervalSpy = jest.spyOn(global, "clearInterval");
    const { unmount } = render(<FadingGallery />);

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
