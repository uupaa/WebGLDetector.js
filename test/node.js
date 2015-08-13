// WebGLDetector test

require("../lib/WebModule.js");

// publish to global
WebModule.publish = true;


require("./wmtools.js");
require("../lib/WebGLDetector.js");
require("../release/WebGLDetector.n.min.js");
require("./testcase.js");

