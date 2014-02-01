(function (exports) {
  'use strict';

  function BtnClickRegister() {

  }

  BtnClickRegister.prototype = {

    register: function () {
      var target = document.querySelector('#sample4'),
          button = document.createElement('button'),
          self = this;

      button.innerHTML = 'Click here to load script';

      button.onclick = function () {
        self.load('/app/js/sample4.js', function () {
          var sample = new Sample4();
          sample.show();
        });
      };

      target.appendChild(button);
    },

    load: function (url, callback) {
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
  
  exports.BtnClickRegister = BtnClickRegister;

})(this);
