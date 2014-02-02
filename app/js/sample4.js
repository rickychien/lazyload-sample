(function (exports) {
  'use strict';

  function OnClickLoader() {

  }

  OnClickLoader.prototype = {

    get button() {
      if (!this._button) {
        this._button = document.createElement('button');
        this._button.innerHTML = 'Click here to load script';
      }
      return this._button;
    },

    get target() {
      if (!this._target) {
        this._target = document.querySelector('#sample4');
      }
      return this._target;
    },

    register: function (url, callback) {
      this.button.onclick = this._load.bind(this, url, callback);
      this.target.appendChild(this.button);
    },

    show: function () {
      if (typeof Welcome === 'function') {
        (new Welcome('#sample4', 'I am sample4')).greets();
      }
    },

    _load: function (url, callback) {
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

  exports.Sample4 = OnClickLoader;

})(this);
