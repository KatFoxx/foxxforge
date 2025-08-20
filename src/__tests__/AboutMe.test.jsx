/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; 
import AboutMe from "../pages/components/AboutMe"; 

describe("AboutMe component", () => {
  it("renders the heading", () => {
    render(<AboutMe />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the image with alt text", () => {
    render(<AboutMe />);
    expect(
      screen.getByAltText(
        "A picture of a human in their 30s with green hair and a cat on their shoulders"
      )
    ).toBeInTheDocument();
  });

  it("renders the paragraph", () => {
    render(<AboutMe />);
    expect(
      screen.getByText(
        "Hi! I'm Kat, I am an avid hobbyist and tabletop wargamer, variety streamer and content creator and I love bringing your ideas to life. If you want to see more of what I do, check out my socials linked below."
      )
    ).toBeInTheDocument();
  });

  it("renders Instagram and Twitch links", () => {
    render(<AboutMe />);
    expect(screen.getByText("Instagram")).toHaveAttribute(
      "href",
      "https://instagram.com/foxxforge"
    );
    expect(screen.getByText("Twitch")).toHaveAttribute(
      "href",
      "https://twitch.tv/katfoxxtv"
    );
  });
});
