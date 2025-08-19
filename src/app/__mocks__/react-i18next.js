module.exports = {
  useTranslation: () => ({
    t: (key) => key, // Return key instead of real translation
  }),
  Trans: ({ children }) => children,
};
