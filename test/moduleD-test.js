define(['src/moduleD-requirejs'], function(ModuleD_REQUIREJS) {
  suite('ModuleD_REQUIREJS', function() {
    var target;

    suiteSetup(function () {
      target = new ModuleD_REQUIREJS();
    });

    suite('#show', function () {
      test('should return "Hello!"', function() {
        assert(target.show() === 'Hello!');
      });
    });
  });
});
