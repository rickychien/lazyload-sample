define(['src/moduleX'], function(ModuleX){
  'use strict';

  function ModuleX_REQUIREJS() {

  }

  ModuleX_REQUIREJS.prototype = {

    show: function () {
        return new ModuleX().greets();
    }

  };

  return ModuleX_REQUIREJS;
});
