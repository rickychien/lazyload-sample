'use strict';

suite('Sample3', function () {

  var sample;

  suiteSetup(function () {
    sample = new Sample3();
  });

  suite('#show', function () {

    test('should append a message to #sample3 div', function (done) {
      sample.load('/app/js/welcome3.js', function () {
        var target;

        sample.show();

        target = document.querySelector('#sample3 label');

        assert(target !== null);
        assert(target.innerHTML === 'I am sample3');

        done();
      });
    });

  });

});
