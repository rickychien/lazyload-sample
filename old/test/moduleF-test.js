suite('ModuleF_REQUIREJS', function() {
  var target;

  setup(function (done) {
    require(['src/moduleF-requirejs'], function (ModuleF_REQUIREJS) {
      target = new ModuleF_REQUIREJS();
      done();
    });
  });

  suite('#show', function () {
    test('should return "Hello!"', function() {
      expect(target.show()).to.equal('Hello!');
    });

    test('should work correctly when require same module twice', function() {
      expect(target.show()).to.equal('Hello!');
    });
  });
});
