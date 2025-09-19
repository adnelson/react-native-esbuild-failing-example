const { resolve } = require("path");
/**
 * @type {import('@react-native-esbuild/core').Config}
 */
module.exports = {
  default: {
    cache: true,
    logger: {
      timestamp: "YYYY-MM-DD HH:mm:ss.SSS",
    },
    web: {
      template: resolve(__dirname, "./public/index.html"),
    },
    transformer: {
      stripFlowPackageNames: ["react-native"],
      fullyTransformPackageNames: [],
      additionalTransformRules: {
        babel: [
          {
            test: (path, code) => {
              return (
                /node_modules\/react-native-reanimated\//.test(path) ||
                code.includes("react-native-reanimated")
              );
            },
            options: {
              plugins: [
                "@babel/plugin-transform-export-namespace-from",
                "react-native-reanimated/plugin",
              ],
              babelrc: false,
            },
          },
        ],
      },
    },
  },
};
