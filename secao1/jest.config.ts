import type {Config} from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$':'ts-jest'
  }
};

export default config;
