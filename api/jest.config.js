module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "@shelf/jest-mongodb",
  verbose: true,
  setupFiles: ["core-js"],
  restoreMocks: true,
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
