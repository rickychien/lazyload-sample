suite('ModuleD_REQUIREJS', function() {
  var target;

  setup(function (done) {
    require(['src/moduleD-requirejs'], function (ModuleD_REQUIREJS) {
      target = new ModuleD_REQUIREJS();
      done();
    });
  });

  suite('#show', function () {
    test('should return "Hello!"', function() {
      assert(target.show() === 'Hello!');
    });

    test('should work correctly when require same module twice', function() {
      assert(target.show() === 'Hello!');
    });

    test('should work correctly when require same module thrice', function() {
      assert(target.show() === 'Hello!');
    });
  });
});
