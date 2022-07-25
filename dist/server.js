"use strict";

var _app = require("./app");

const {
  app
} = new _app.App();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});