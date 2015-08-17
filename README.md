# WebGLDetector.js [![Build Status](https://travis-ci.org/uupaa/WebGLDetector.js.svg)](https://travis-ci.org/uupaa/WebGLDetector.js)

[![npm](https://nodei.co/npm/uupaa.webgldetector.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.webgldetector.js/)

Detect WebGL

- Please refer to [Spec](https://github.com/uupaa/WebGLDetector.js/wiki/) and [API Spec](https://github.com/uupaa/WebGLDetector.js/wiki/WebGLDetector) links.
- The WebGLDetector.js is made of [WebModule](https://github.com/uupaa/WebModule).

## Browser and NW.js(node-webkit)

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/WebGLDetector.js"></script>
<script>

WebGLDetector.detect();
WebGLDetector.WEBGL_CONTEXT     // -> "wegbl"
WebGLDetector.WEBGL_VERSION     // -> "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
WebGLDetector.MAX_TEXTURE_SIZE  // -> 16384

</script>
```


