(function (exports) {
  'use strict';

  function CommonLoader() {

  }

  CommonLoader.prototype = {

    require: function (url, callback) {
      var xhr = XMLHttpRequest();

      xhr.open('GET', url, false);

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

  exports.CommonLoader = CommonLoader;

})(this);
