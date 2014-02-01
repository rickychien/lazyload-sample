'use strict';

require('/app/js/sample2-xhr.js');

suite('Sample2', function () {
  var sample,
      message = 'Hello World!';

  setup(function () {
    sample = new Sample2();
  });

  suite('#constructor', function () {

    test('should be initialized correctly', function () {
      assert(sample.target === '#sample2');
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

      target = document.querySelector('#sample2 label');
      assert(target.innerHTML === message)
    });

  });
});
