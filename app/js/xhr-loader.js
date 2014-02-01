(function (exports) {
  'use strict';

  function XHRLoader() {

  }

  XHRLoader.prototype = {

    load: function (url, callback) {
      var xhr = XMLHttpRequest();

      xhr.open('GET', url);

      xhr.onload = function () {
        // Execute response script
        window.eval(xhr.response);

        if (callback) {
          callback();
        }
      };

      xhr.send();
    }

  };
  
  exports.XHRLoader = XHRLoader;

})(this);
