(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("WebGLDetector", function moduleClosure(/* global */) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
// --- class / interfaces ----------------------------------
var WebGLDetector = {
    "detect":           WebGLDetector_detect,
    "DETECTED":         false,
    "WEBGL_CONTEXT":    "",     // WebGL context. "webgl", "webgl2", "experimental-webgl", ...
    "WEBGL_VERSION":    "",     // WebGL version string.
    "MAX_TEXTURE_SIZE": 0,      // MAX_TEXTURE_SIZE (0, 1024 - 16384)
    "repository":       "https://github.com/uupaa/WebGLDetector.js",
};

// --- implements ------------------------------------------
function WebGLDetector_detect() {
    if (IN_BROWSER || IN_NW) {
        if (!WebGLDetector["DETECTED"]) {
            var canvas = document.createElement("canvas");

            if (canvas &&
                canvas.getContext) { // avoid [IE8]
                var idents = ["webgl2", "experimental-webgl2", "webgl", "experimental-webgl"];

                for (var i = 0, iz = idents.length; i < iz; ++i) {
                    var ctx = idents[i];
                    var gl = canvas.getContext(ctx);

                    if (gl) {
                        WebGLDetector["WEBGL_CONTEXT"] = ctx;
                        WebGLDetector["WEBGL_VERSION"] = gl["getParameter"](gl["VERSION"]);
                        WebGLDetector["MAX_TEXTURE_SIZE"] = gl["getParameter"](gl["MAX_TEXTURE_SIZE"]);
                        WebGLDetector["DETECTED"] = true;
                        break;
                    }
                }
            }
        }
    }
}

return WebGLDetector; // return entity

});

