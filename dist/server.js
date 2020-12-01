"use strict";

var _express = _interopRequireDefault(require("express"));

var _home = _interopRequireDefault(require("./routes/home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 5500;
app.use("/", _home["default"]);
app.listen(port, console.log("app started on port ".concat(port)));