const { name } = require("./package");

module.exports = {
  webpack: (config) => {
    config.output.library = name;
    config.output.libraryTarget = "umd";
    config.output.jsonpFunction = `webpackJsonp_${name}`;

    config.resolve.alias = {
      ...config.resolve.alias,
      src: require("path").resolve("./src"),
    };

    config.resolve.plugins = config.resolve.plugins.filter(
      (plugin) =>
        !(plugin instanceof require("react-dev-utils/ModuleScopePlugin"))
    );
    config.module.rules.forEach((rule) => {
      if (Array.isArray(rule.oneOf)) {
        rule.oneOf.forEach((ruleItem) => {
          if (
            typeof ruleItem.loader === "string" &&
            ruleItem.loader.match("babel-loader") &&
            typeof ruleItem.include === "string"
          ) {
            ruleItem.include = [
              ruleItem.include,
              require("path").resolve(
                ruleItem.include,
                "../",
                "../",
                "@shared"
              ),
            ];
          }
        });
      }
    });

    if (process.env.NODE_ENV === "production") {
      if (Array.isArray(config.module.rules)) {
        config.module.rules.forEach((rule) => {
          if (Array.isArray(rule.oneOf)) {
            rule.oneOf.forEach((item) => {
              if (
                Array.isArray(item.use) &&
                (item.test + "").match(".module")
              ) {
                item.use.forEach((moduleConfig) => {
                  if (
                    moduleConfig.options &&
                    moduleConfig.options.modules &&
                    moduleConfig.options.modules.getLocalIdent
                  ) {
                    delete moduleConfig.options.modules.getLocalIdent;
                    moduleConfig.options.modules.localIdentName =
                      "[hash:base64]";
                  }
                });
              }
            });
          }
        });
      }
    }

    return config;
  },
};
