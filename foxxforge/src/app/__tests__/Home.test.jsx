/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page.tsx';

// Mock the translation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

// Mock child components to isolate Home tests
jest.mock('../components/FadingGallery', () => () => <div data-testid="fading-gallery" />);
jest.mock('../components/TierGallery', () => ({ images }) => (
  <div data-testid="tier-gallery">{images.length} images</div>
));

// Mock JSON data
jest.mock('../../../public/data/basic-tier.json', () => Array(3).fill('img'));
jest.mock('../../../public/data/parade-tier.json', () => Array(4).fill('img'));
jest.mock('../../../public/data/high-end-tier.json', () => Array(5).fill('img'));

describe('Home component', () => {
  it("renders the heading", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to the Foxx Forge!")).toBeInTheDocument();
  });

  it("renders the welcome message", () => {
    render(<Home />);
    expect(
      screen.getByText(
        "We are a company for commission building and painting of miniatures based in Germany. Nice to have you here!"
      )
    ).toBeInTheDocument();
  });

  it("renders the main section headings", () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Our Painting Tiers' })).toBeInTheDocument();
  });

  it("renders service list items", () => {
    render(<Home />);
    ['Painting of Miniatures', 'Building of Miniatures', 'Conversions', 'Army Commissions'].forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders FadingGallery and TierGallery components", () => {
    render(<Home />);
    expect(screen.getByTestId('fading-gallery')).toBeInTheDocument();

    const tierGalleries = screen.getAllByTestId('tier-gallery');
    expect(tierGalleries).toHaveLength(3);

    
    expect(tierGalleries[0]).toHaveTextContent('3 images'); 
    expect(tierGalleries[1]).toHaveTextContent('4 images'); 
    expect(tierGalleries[2]).toHaveTextContent('5 images');
  });

  it("renders gallery link", () => {
    render(<Home />);
    const galleryLink = screen.getByRole('link', { name: 'For more examples check out the gallery!' });
    expect(galleryLink).toHaveAttribute('href', '/gallery');
  });

  it("renders tier descriptions and headings", () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 3, name: 'Basic Tabletop Tier' })).toBeInTheDocument();
    expect(screen.getByText('Basecoats, Shading, functional base design')).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 3, name: 'Parade Ready Tier' })).toBeInTheDocument();
    expect(screen.getByText('Basecoats, Highlights, Shading, detailed base design')).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 3, name: 'High-End Tier' })).toBeInTheDocument();
    expect(screen.getByText('Volumetric Highlights, Non-metallic metal, intricate base design')).toBeInTheDocument();
  });
});
