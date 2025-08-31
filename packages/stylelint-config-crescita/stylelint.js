/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-css-modules",
    "stylelint-config-prettier"
  ],
  plugins: ["stylelint-order"],
  rules: {
    "length-zero-no-unit": [
      true,
      {
        ignore: ["custom-properties"],
      },
    ],
    "function-name-case": "lower",
    "selector-type-case": "lower",
    "value-keyword-case": "lower",
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["stylelint-commands"],
      },
    ],
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["after-custom-property", "first-nested"],
        ignore: ["after-comment", "inside-single-line-block"],
      },
    ],
    "declaration-empty-line-before": [
      "always",
      {
        except: ["after-declaration", "first-nested"],
        ignore: ["after-comment", "inside-single-line-block"],
      },
    ],
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "color-hex-length": "short",
    "import-notation": "url",
    "keyframe-selector-notation": "percentage-unless-within-keyword-only-block",
    "selector-pseudo-element-colon-notation": "double",
    "font-family-name-quotes": "always-where-recommended",
    "function-url-quotes": "always",
    "selector-attribute-quotes": "always",
    "declaration-block-no-redundant-longhand-properties": [
      true,
      { ignoreShorthands: ["inset"] },
    ],
    "shorthand-property-no-redundant-values": true,
    "comment-whitespace-inside": "always",
  },
  overrides: [
    { files: ["**/*.{css,scss}"], customSyntax: "postcss-scss" },
    { files: ["**/*.{js,jsx,ts,tsx}"], customSyntax: "@stylelint/postcss-css-in-js" }
  ],
  
  ignoreFiles: [
    "**/.next/**","**/dist/**","**/build/**","**/out/**","**/node_modules/**",".cache/**"
  ]
};