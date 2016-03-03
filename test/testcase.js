var ModuleTestWebGLDetector = (function(global) {

var test = new Test(["WebGLDetector"], { // Add the ModuleName to be tested here (if necessary).
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     false, // enable worker test.
        node:       false, // enable node test.
        nw:         true,  // enable nw.js test.
        el:         true,  // enable electron (render process) test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
            console.error(error.message);
        }
    });

if (IN_BROWSER || IN_NW || IN_EL) {
    test.add([
        testWebGLDetector,
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

