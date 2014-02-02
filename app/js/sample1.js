(function (exports) {
  'use strict';

  function Sample () {
    this.welcome = new Welcome('#sample1', 'I am sample1');
  }

  Sample.prototype = {

    show: function () {
      this.welcome.greets();
    }

  };

  exports.Sample1 = Sample;

})(this);
