const OFF = "off";
const WARN = "warn";
const ERROR = "error";

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  overrides: [
    {
      files: ["*stories.tsx"],
      rules: {
        "react-hooks/rules-of-hooks": OFF,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "typescript-sort-keys",
    "@typescript-eslint",
    "simple-import-sort",
    "sort-keys-fix",
    "sort-destructure-keys",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ERROR,
    "@typescript-eslint/no-var-requires": WARN,
    "react/jsx-sort-props": [
      WARN,
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    "react/prop-types": OFF,
    "simple-import-sort/exports": WARN,
    "simple-import-sort/imports": WARN,
    "sort-destructure-keys/sort-destructure-keys": WARN,
    "sort-keys-fix/sort-keys-fix": [WARN, "asc", { natural: true }],
    "typescript-sort-keys/interface": WARN,
    "typescript-sort-keys/string-enum": WARN,
  },
};

module.exports = config;
