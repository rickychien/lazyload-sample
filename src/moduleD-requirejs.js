define(['src/moduleD'], function(ModuleD){
  'use strict';

  function ModuleD_REQUIREJS() {

  }

  ModuleD_REQUIREJS.prototype = {

    show: function () {
      if (typeof ModuleD === 'function') {
        return (new ModuleD()).greets();
      }
    }

  };

  return ModuleD_REQUIREJS;
});
