'use strict';

require('/app/js/sample3-append.js');

suite('Sample3', function () {

  var message = 'Hello World!',
      sample;

  suiteSetup(function () {
    require('/app/js/sample3.js');
    sample = new Sample3();
  });

  suite('#constructor', function () {

    test('should be initialized correctly', function () {
      assert(sample.target === '#sample3');
      assert(sample.message === message);
    });

  });

  suite('#greet', function () {

    test('should return "Hello World!"', function () {
      assert(sample.greet() === message);
    });

  });

  suite('#show', function () {

    test('should append "Hello World!" to HTML', function () {
      var target;
      
      sample.show();

      target = document.querySelector('#sample3 label');
      assert(target.innerHTML === message)
    });

  });
});
