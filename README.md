# WebGLDetector.js [![Build Status](https://travis-ci.org/uupaa/WebGLDetector.js.svg)](https://travis-ci.org/uupaa/WebGLDetector.js)

[![npm](https://nodei.co/npm/uupaa.webgldetector.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.webgldetector.js/)

Detect WebGL.


This module made of [WebModule](https://github.com/uupaa/WebModule).

## Documentation
- [Spec](https://github.com/uupaa/WebGLDetector.js/wiki/)
- [API Spec](https://github.com/uupaa/WebGLDetector.js/wiki/WebGLDetector)

## Browser, NW.js and Electron

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/WebGLDetector.js"></script>
<script>
WebGLDetector.detect();
WebGLDetector.WEBGL_CONTEXT     // -> "wegbl"
WebGLDetector.WEBGL_VERSION     // -> "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
WebGLDetector.WEBGL_VERNDOR     // -> "WebKit"
WebGLDetector.WEBGL_RENDERER    // -> "WebKit WebGL"
WebGLDetector.WEBGL_SL_VERSION  // -> "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)"
WebGLDetector.MAX_TEXTURE_SIZE  // -> 16384
</script>
```

