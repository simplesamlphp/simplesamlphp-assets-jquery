// eslint.config.js
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
    {
        ignores: [
            "!/tools/linters/eslint.config.js",
            "!/tools/linters/.stylelintrc.json",
            "!/.ncurc.js",
            "!/js/**",
            "!/css/**",
            "!/webfonts/**",
            "!/icons/**"
        ],
        languageOptions: {
            ecmaVersion: 2015,
            sourceType: "module"
        },
        files: [
            "resources/**.js",
        ],
        rules: {
            semi: "error",
            "prefer-const": "error"
        }
    }
]);
