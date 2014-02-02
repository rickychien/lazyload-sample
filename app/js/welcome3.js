(function (exports) {
  'use strict';

  function Welcome (selector, message) {
    this._target = selector || '#sample';
    this._message = message || 'Hello World!';
  }

  Welcome.prototype = {

    get target () {
      return document.querySelector(this._target);
    },

    get message () {
      return this._message;
    },

    greets: function () {
      var label = document.createElement('label');
      label.innerHTML = this.message;
      this.target.appendChild(label);
    }

  };

  exports.Welcome3 = Welcome;

})(this);
