'use strict';

require('/app/js/sample4-onclick.js');

suite('Sample4', function () {

  var btnClickReg = new BtnClickRegister(),
      message = 'Hello World!';

  suite('BtnClickRegister', function () {

    suite('#register', function () {

      test('should append a button', function () {
        var button;

        btnClickReg.register();
        button = document.querySelector('button');

        assert(button !== null);
        assert(button.innerHTML === 'Click here to load script');
      });

      test('should start load script when button is clicked', function () {
        var button = document.querySelector('button');

        assert(typeof Sample4 !== 'function');

        button.click();

        assert(typeof Sample4 === 'function');
      });

    });

  });

});
