(function (exports) {
  'use strict';

  function XHRLoader() {

  }

  XHRLoader.prototype = {

    load: function (url, callback) {
      var xhr = XMLHttpRequest();

      xhr.open('GET', url, true);

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
  
  (new XHRLoader()).load('/app/js/sample2.js');

})(this);
