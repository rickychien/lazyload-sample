suite('ModuleC_APPENDCHILD', function () {
  var target,
      url = 'src/moduleC-appendchild.js';

  suiteSetup(function () {
    target = new ModuleC_APPENDCHILD();
  });

  suite('#show', function () {
    test('should return "Hello!"', function (done) {
      target.load(url, function () {
        assert(target.show() === 'Hello!');
        done();
      });
    });
  });
});
