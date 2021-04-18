module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: '(/specs/.*|(\\.|/)(spec))\\.(ts)$',
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node'
}
