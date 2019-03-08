"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scroltoSection;

function scroltoSection(elId) {
  var elmnt = document.getElementById(elId);
  elmnt.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
}