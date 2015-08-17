var ModuleTestWebGLDetector = (function(global) {

global["BENCHMARK"] = false;

var test = new Test("WebGLDetector", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
        }
    }).add([
        // generic test
    ]);

if (IN_BROWSER || IN_NW) {
    test.add([
        testWebGLDetector,
    ]);
} else if (IN_WORKER) {
    test.add([
        // worker test
    ]);
} else if (IN_NODE) {
    test.add([
        // node.js and io.js test
    ]);
}

// --- test cases ------------------------------------------
function testWebGLDetector(test, pass, miss) {

    WebGLDetector.detect();
    switch ( WebGLDetector.WEBGL_CONTEXT ) {
    case "webgl2":
    case "experimental-webgl2":
    case "webgl":
    case "experimental-webgl":
        var version = WebGLDetector.WEBGL_VERSION; // WebGL 1.0 (OpenGL ES 2.0 IMGSGX543-113.3)
        if (/WebGL/.test(version)) {
            test.done(pass());
        } else {
            test.done(miss());
        }
        break;
    case "":
        test.done(pass());
        break;
    default:
        test.done(miss());
    }
}

return test.run();

})(GLOBAL);

