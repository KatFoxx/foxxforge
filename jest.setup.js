import '@testing-library/jest-dom';

// Mock next/image to just render an img tag in tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ''} />;
  },
}));

// Mock i18next so translation functions don’t break
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: () => new Promise(() => {}) },
  }),
}));
