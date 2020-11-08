const chromedriver = require('chromedriver');
module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "page_object_path" : "pages",

  "webdriver" : {
    "start_process": true,
    "server_path": chromedriver.path,
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}