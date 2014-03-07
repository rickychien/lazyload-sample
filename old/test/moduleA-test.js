suite('ModuleA_HTML', function () {
  var target;

  suiteSetup(function () {
    target = new ModuleA_HTML();
  });

  suite('#show', function () {
    test('should return "Hello!"', function () {
      assert(target.show() === 'Hello!');
    });
  });
});
