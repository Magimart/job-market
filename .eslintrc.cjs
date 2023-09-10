import plugin from "tailwindcss"

/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  "extends": [
     "plugin:vue/vue3-essential",
    //"plugin:vue/vue3-recommended", // recommended for stricter rules
    "eslint:recommended",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:vitest-globals/recommended" // added after installing eslint-plugin-vitest-globals 
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  env: {"vitest-global/env": true} // verg good to remove all the eslints
}
