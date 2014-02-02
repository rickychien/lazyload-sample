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
    },

    show: function () {
      if (typeof Welcome2 === 'function') {
        (new Welcome2('#sample2', 'I am sample2')).greets();
      }
    }

  };

  exports.Sample2 = XHRLoader;

})(this);
