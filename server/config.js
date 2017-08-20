const distPath = require("../webpack.config.prod").output.path;

module.exports = {
    port: 8080,
    public: distPath
}
