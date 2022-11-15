const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  server: {
    port: process.env.PORT || 3010,
  },
});
