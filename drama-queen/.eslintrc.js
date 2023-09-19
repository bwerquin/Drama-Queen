module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended" // Make sure this is always the last element in the array.
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "detect" } },
    env: { browser: true, amd: true, node: true },
    plugins: ["simple-import-sort", "prettier"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/accessible-emoji": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight"],
                aspects: ["invalidHref", "preferButton"]
            }
        ]
    }
};
