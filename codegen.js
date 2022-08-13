/** @type {import("@rtk-query/codegen-openapi").ConfigFile} */
const config = {
  schemaFile:
    "https://raw.githubusercontent.com/gothinkster/realworld/main/api/openapi.yml",
  apiFile: "./store/api/setup.ts",
  apiImport: "emptySplitApi",
  outputFile: "./api/index.ts",
  exportName: "api",
  hooks: true,
};

module.exports = config;
