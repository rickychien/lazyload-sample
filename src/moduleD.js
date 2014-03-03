define(function() {
  'use strict';

  function ModuleD () {

  }

  ModuleD.prototype = {

    greets: function () {
      require(['src/moduleD']);
      return 'Hello!';
    }

  };

  return ModuleD;
});
