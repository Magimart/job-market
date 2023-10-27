// import plugin from "tailwindcss"
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended", // recommended for stricter rules
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-prettier",
    //"@vue/eslint-config-prettier/skip-formatting", ___workd prev
    "plugin:vitest-globals/recommended", // added after installing eslint-plugin-vitest-globals,

  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  env: {"vitest-global/env": true} // verg good to remove all the eslints
}
