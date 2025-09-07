import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import promise from "eslint-plugin-promise";
import unused from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/out/**",
      "**/.turbo/**",
      "pnpm-lock.yaml",
      "stylelint.config.*",
      "eslint.config.*",
    ],
  },
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      "import/resolver": {
        typescript: { alwaysTryTypes: true },
      },
    },
  },
  {
    plugins: {
      import: importPlugin,
      promise,
      "unused-imports": unused,
    },
    rules: {
      ...(importPlugin.configs.recommended?.rules ?? {}),
      ...(promise.configs.recommended?.rules ?? {}),
      "func-style": ["error", "declaration", { allowArrowFunctions: true }],
      "no-console": "error",
      "no-empty-function": "off",
      "no-implicit-coercion": ["error", { allow: ["!!"] }],
      "no-return-await": "error",
      "no-use-before-define": ["error", { functions: false }],
      "no-void": ["error", { allowAsStatement: true }],
      "object-shorthand": ["error", "properties"],
      "require-atomic-updates": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_+$",
          varsIgnorePattern: "^_+$",
        },
      ],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            { pattern: "@/**", group: "parent", position: "before" },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],
      "import/newline-after-import": "error",
      "promise/catch-or-return": ["error", { allowFinally: true }],
      "promise/prefer-await-to-callbacks": "error",
      "promise/prefer-await-to-then": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "always" },
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false },
      ],
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      "import/named": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/no-named-as-default-member": "off",
    },
  },
];
