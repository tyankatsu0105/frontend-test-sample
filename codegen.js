/** @type {import("@rtk-query/codegen-openapi").ConfigFile} */
const config = {
  apiFile: "./store/api/setup.ts",
  apiImport: "emptySplitApi",
  exportName: "api",
  hooks: true,
  outputFile: "./api/index.ts",
  schemaFile:
    "https://raw.githubusercontent.com/gothinkster/realworld/main/api/openapi.yml",
};

module.exports = config;
