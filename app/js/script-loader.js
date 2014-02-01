(function (exports) {
  'use strict';

  function ScriptLoader() {

  }

  ScriptLoader.prototype = {

    load: function (url, callback) {
      var script = document.createElement('script');
      script.src = url;
      script.onload = function () {
        if (callback) {
          callback();
        }
      };
      document.querySelector('head').appendChild(script);
    }

  };
  
  exports.ScriptLoader = ScriptLoader;

})(this);
