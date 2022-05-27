import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
  roots: ['<rootDir>/src'],
  testMatch: ['**/tests/**/*.+(ts|tsx|js|jsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  detectOpenHandles: true,

  bail: 1,
  verbose: true,
});
