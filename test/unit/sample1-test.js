'use strict';

suite('Sample1', function () {

  var sample;

  suiteSetup(function () {
    sample = new Sample1();
  });

  suiteTeardown(function () {
    delete window.Welcome;
  });

  suite('#show', function () {

    test('should append a message to #sample1 div', function () {
      var target;

      sample.show();

      target = document.querySelector('#sample1 label');

      assert(target !== null);
      assert(target.innerHTML === 'I am sample1');
    });

  });

});
