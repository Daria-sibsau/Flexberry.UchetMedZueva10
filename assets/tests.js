'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s uchet med zueva10 должности l');

  (0, _qunit.test)('testing i-i-s-uchet-med-zueva10-должности-l', function (assert) {
    var _this = this;

    visit('/i-i-s-uchet-med-zueva10-должности-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s uchet med zueva10 инд напр медосм l');

  (0, _qunit.test)('testing i-i-s-uchet-med-zueva10-инд-напр-медосм-l', function (assert) {
    var _this = this;

    visit('/i-i-s-uchet-med-zueva10-инд-напр-медосм-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s uchet med zueva10 класс вред фактор l');

  (0, _qunit.test)('testing i-i-s-uchet-med-zueva10-класс-вред-фактор-l', function (assert) {
    var _this = this;

    visit('/i-i-s-uchet-med-zueva10-класс-вред-фактор-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s uchet med zueva10 мед учреждение l');

  (0, _qunit.test)('testing i-i-s-uchet-med-zueva10-мед-учреждение-l', function (assert) {
    var _this = this;

    visit('/i-i-s-uchet-med-zueva10-мед-учреждение-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s uchet med zueva10 организации l');

  (0, _qunit.test)('testing i-i-s-uchet-med-zueva10-организации-l', function (assert) {
    var _this = this;

    visit('/i-i-s-uchet-med-zueva10-организации-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s uchet med zueva10 подразделение l');

  (0, _qunit.test)('testing i-i-s-uchet-med-zueva10-подразделение-l', function (assert) {
    var _this = this;

    visit('/i-i-s-uchet-med-zueva10-подразделение-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s uchet med zueva10 приказ м з р l');

  (0, _qunit.test)('testing i-i-s-uchet-med-zueva10-приказ-м-з-р-l', function (assert) {
    var _this = this;

    visit('/i-i-s-uchet-med-zueva10-приказ-м-з-р-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s uchet med zueva10 сотрудники l');

  (0, _qunit.test)('testing i-i-s-uchet-med-zueva10-сотрудники-l', function (assert) {
    var _this = this;

    visit('/i-i-s-uchet-med-zueva10-сотрудники-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s uchet med zueva10 список на медосм l');

  (0, _qunit.test)('testing i-i-s-uchet-med-zueva10-список-на-медосм-l', function (assert) {
    var _this = this;

    visit('/i-i-s-uchet-med-zueva10-список-на-медосм-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-uchet-med-zueva10-\u043F\u0435\u0440\u0438\u043E\u0434-\u043C\u0435\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-uchet-med-zueva10-\u043F\u0435\u0440\u0438\u043E\u0434-\u043C\u0435\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-uchet-med-zueva10-\u043F\u043E\u043B-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-uchet-med-zueva10-\u043F\u043E\u043B-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-uchet-med-zueva10-\u043F\u0435\u0440\u0438\u043E\u0434-\u043C\u0435\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-uchet-med-zueva10-\u043F\u0435\u0440\u0438\u043E\u0434-\u043C\u0435\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-uchet-med-zueva10-\u043F\u043E\u043B-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-uchet-med-zueva10-\u043F\u043E\u043B-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-должности-e', 'Unit | Controller | i-i-s-uchet-med-zueva10-должности-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-должности-l', 'Unit | Controller | i-i-s-uchet-med-zueva10-должности-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-инд-напр-медосм-e', 'Unit | Controller | i-i-s-uchet-med-zueva10-инд-напр-медосм-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-инд-напр-медосм-l', 'Unit | Controller | i-i-s-uchet-med-zueva10-инд-напр-медосм-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-класс-вред-фактор-e', 'Unit | Controller | i-i-s-uchet-med-zueva10-класс-вред-фактор-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-класс-вред-фактор-l', 'Unit | Controller | i-i-s-uchet-med-zueva10-класс-вред-фактор-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-мед-учреждение-e', 'Unit | Controller | i-i-s-uchet-med-zueva10-мед-учреждение-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-мед-учреждение-l', 'Unit | Controller | i-i-s-uchet-med-zueva10-мед-учреждение-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-организации-e', 'Unit | Controller | i-i-s-uchet-med-zueva10-организации-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-организации-l', 'Unit | Controller | i-i-s-uchet-med-zueva10-организации-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-подразделение-e', 'Unit | Controller | i-i-s-uchet-med-zueva10-подразделение-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-подразделение-l', 'Unit | Controller | i-i-s-uchet-med-zueva10-подразделение-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-приказ-м-з-р-e', 'Unit | Controller | i-i-s-uchet-med-zueva10-приказ-м-з-р-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-приказ-м-з-р-l', 'Unit | Controller | i-i-s-uchet-med-zueva10-приказ-м-з-р-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-сотрудники-e', 'Unit | Controller | i-i-s-uchet-med-zueva10-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-сотрудники-l', 'Unit | Controller | i-i-s-uchet-med-zueva10-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-список-на-медосм-e', 'Unit | Controller | i-i-s-uchet-med-zueva10-список-на-медосм-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-uchet-med-zueva10-список-на-медосм-l', 'Unit | Controller | i-i-s-uchet-med-zueva10-список-на-медосм-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-вредн-факт-произ', 'Unit | Model | i-i-s-uchet-med-zueva10-вредн-факт-произ', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-должности', 'Unit | Model | i-i-s-uchet-med-zueva10-должности', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-инд-напр-медосм', 'Unit | Model | i-i-s-uchet-med-zueva10-инд-напр-медосм', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-класс-вред-фактор', 'Unit | Model | i-i-s-uchet-med-zueva10-класс-вред-фактор', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-контингент-сотр', 'Unit | Model | i-i-s-uchet-med-zueva10-контингент-сотр', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-мед-учреждение', 'Unit | Model | i-i-s-uchet-med-zueva10-мед-учреждение', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-организации', 'Unit | Model | i-i-s-uchet-med-zueva10-организации', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-подразделение', 'Unit | Model | i-i-s-uchet-med-zueva10-подразделение', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-приказ-м-з-р', 'Unit | Model | i-i-s-uchet-med-zueva10-приказ-м-з-р', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-сотрудники', 'Unit | Model | i-i-s-uchet-med-zueva10-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-список-на-медосм', 'Unit | Model | i-i-s-uchet-med-zueva10-список-на-медосм', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('вредные-факторы-производства', 'Unit | Model | вредные-факторы-производства', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('классификатор-вредных-факторов', 'Unit | Model | классификатор-вредных-факторов', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-должности-e', 'Unit | Route | i-i-s-uchet-med-zueva10-должности-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-должности-l', 'Unit | Route | i-i-s-uchet-med-zueva10-должности-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-инд-напр-медосм-e', 'Unit | Route | i-i-s-uchet-med-zueva10-инд-напр-медосм-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-инд-напр-медосм-l', 'Unit | Route | i-i-s-uchet-med-zueva10-инд-напр-медосм-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-класс-вред-фактор-e', 'Unit | Route | i-i-s-uchet-med-zueva10-класс-вред-фактор-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-класс-вред-фактор-l', 'Unit | Route | i-i-s-uchet-med-zueva10-класс-вред-фактор-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-мед-учреждение-e', 'Unit | Route | i-i-s-uchet-med-zueva10-мед-учреждение-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-мед-учреждение-l', 'Unit | Route | i-i-s-uchet-med-zueva10-мед-учреждение-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-организации-e', 'Unit | Route | i-i-s-uchet-med-zueva10-организации-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-организации-l', 'Unit | Route | i-i-s-uchet-med-zueva10-организации-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-подразделение-e', 'Unit | Route | i-i-s-uchet-med-zueva10-подразделение-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-подразделение-l', 'Unit | Route | i-i-s-uchet-med-zueva10-подразделение-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-приказ-м-з-р-e', 'Unit | Route | i-i-s-uchet-med-zueva10-приказ-м-з-р-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-приказ-м-з-р-l', 'Unit | Route | i-i-s-uchet-med-zueva10-приказ-м-з-р-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-сотрудники-e', 'Unit | Route | i-i-s-uchet-med-zueva10-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-сотрудники-l', 'Unit | Route | i-i-s-uchet-med-zueva10-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-список-на-медосм-e', 'Unit | Route | i-i-s-uchet-med-zueva10-список-на-медосм-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-uchet-med-zueva10-список-на-медосм-l', 'Unit | Route | i-i-s-uchet-med-zueva10-список-на-медосм-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u0432\u0440\u0435\u0434\u043D-\u0444\u0430\u043A\u0442-\u043F\u0440\u043E\u0438\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-вредн-факт-произ', 'Unit | Serializer | i-i-s-uchet-med-zueva10-вредн-факт-произ', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-должности', 'Unit | Serializer | i-i-s-uchet-med-zueva10-должности', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-должности', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u0438\u043D\u0434-\u043D\u0430\u043F\u0440-\u043C\u0435\u0434\u043E\u0441\u043C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-инд-напр-медосм', 'Unit | Serializer | i-i-s-uchet-med-zueva10-инд-напр-медосм', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u043A\u043B\u0430\u0441\u0441-\u0432\u0440\u0435\u0434-\u0444\u0430\u043A\u0442\u043E\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-класс-вред-фактор', 'Unit | Serializer | i-i-s-uchet-med-zueva10-класс-вред-фактор', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u043A\u043E\u043D\u0442\u0438\u043D\u0433\u0435\u043D\u0442-\u0441\u043E\u0442\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-контингент-сотр', 'Unit | Serializer | i-i-s-uchet-med-zueva10-контингент-сотр', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-контингент-сотр', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u043C\u0435\u0434-\u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-мед-учреждение', 'Unit | Serializer | i-i-s-uchet-med-zueva10-мед-учреждение', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-мед-учреждение', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-организации', 'Unit | Serializer | i-i-s-uchet-med-zueva10-организации', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-организации', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-подразделение', 'Unit | Serializer | i-i-s-uchet-med-zueva10-подразделение', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-подразделение', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u043F\u0440\u0438\u043A\u0430\u0437-\u043C-\u0437-\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-приказ-м-з-р', 'Unit | Serializer | i-i-s-uchet-med-zueva10-приказ-м-з-р', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-сотрудники', 'Unit | Serializer | i-i-s-uchet-med-zueva10-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-сотрудники', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-uchet-med-zueva10-\u0441\u043F\u0438\u0441\u043E\u043A-\u043D\u0430-\u043C\u0435\u0434\u043E\u0441\u043C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-uchet-med-zueva10-список-на-медосм', 'Unit | Serializer | i-i-s-uchet-med-zueva10-список-на-медосм', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-uchet-med-zueva10-список-на-медосм', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/\u0432\u0440\u0435\u0434\u043D\u044B\u0435-\u0444\u0430\u043A\u0442\u043E\u0440\u044B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('вредные-факторы-производства', 'Unit | Serializer | вредные-факторы-производства', {
    // Specify the other units that are required for this test.
    needs: ['serializer:вредные-факторы-производства', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/\u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440-\u0432\u0440\u0435\u0434\u043D\u044B\u0445-\u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('классификатор-вредных-факторов', 'Unit | Serializer | классификатор-вредных-факторов', {
    // Specify the other units that are required for this test.
    needs: ['serializer:классификатор-вредных-факторов', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-uchet-med-zueva10-период-мед', 'transform:i-i-s-uchet-med-zueva10-пол-сотрудника', 'model:i-i-s-uchet-med-zueva10-вредн-факт-произ', 'model:i-i-s-uchet-med-zueva10-должности', 'model:i-i-s-uchet-med-zueva10-инд-напр-медосм', 'model:i-i-s-uchet-med-zueva10-класс-вред-фактор', 'model:i-i-s-uchet-med-zueva10-контингент-сотр', 'model:i-i-s-uchet-med-zueva10-мед-учреждение', 'model:i-i-s-uchet-med-zueva10-организации', 'model:i-i-s-uchet-med-zueva10-подразделение', 'model:i-i-s-uchet-med-zueva10-приказ-м-з-р', 'model:i-i-s-uchet-med-zueva10-сотрудники', 'model:i-i-s-uchet-med-zueva10-список-на-медосм', 'model:вредные-факторы-производства', 'model:классификатор-вредных-факторов', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
