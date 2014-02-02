(function (exports) {
  'use strict';

  function ScriptLoader() {

  }

  ScriptLoader.prototype = {

    load: function (url, callback) {
      var script = document.createElement('script');

      script.src = url;

      script.onload = callback;

      document.querySelector('head').appendChild(script);
    },

    show: function () {
      if (typeof Welcome3 === 'function') {
        (new Welcome3('#sample3', 'I am sample3')).greets();
      }
    }

  };

  exports.Sample3 = ScriptLoader;

})(this);
