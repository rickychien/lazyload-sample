'use strict';

suite('Sample4', function () {

  var sample;

  suiteSetup(function () {
    sample = new Sample4();
  });

  teardown(function () {
    document.querySelector('#sample4 button').remove();
  });

  suite('#register', function () {

    test('should append a button to #sample4 div', function () {
      var button;

      sample.register('/app/js/welcome4.js');

      button = document.querySelector('#sample4 button');

      assert(button !== null);
      assert(button.innerHTML === 'Click here to load script');
    });

    test('should append a message to #sample4 div when button was clicked', function (done) {
      sample.register('/app/js/welcome4.js', function () {
        var target;

        sample.show();

        target = document.querySelector('#sample4 label');

        assert(target !== null);
        assert(target.innerHTML === 'I am sample4');

        done();
      });

      sample.button.click();
    });

  });

});
