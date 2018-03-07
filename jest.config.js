module.exports = {
    "testMatch": [
        "<rootDir>/src/**/*.spec.ts",
    ],
    "collectCoverage": false,
    "coverageDirectory": ".testresults",
    "coverageReporters": [
        "text-summary",
        // "lcov",
    ],
    "collectCoverageFrom": [
        "src/**/*.ts",
        "!src/**/*.spec.ts",
    ],
    "transform": {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    },
    "moduleFileExtensions": ["ts", "tsx", "js"]
};
