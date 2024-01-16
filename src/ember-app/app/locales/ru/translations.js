import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISUchetMedZueva10ДолжностиLForm from './forms/i-i-s-uchet-med-zueva10-должности-l';
import IISUchetMedZueva10ИндНапрМедосмLForm from './forms/i-i-s-uchet-med-zueva10-инд-напр-медосм-l';
import IISUchetMedZueva10КлассВредФакторLForm from './forms/i-i-s-uchet-med-zueva10-класс-вред-фактор-l';
import IISUchetMedZueva10МедУчреждениеLForm from './forms/i-i-s-uchet-med-zueva10-мед-учреждение-l';
import IISUchetMedZueva10ОрганизацииLForm from './forms/i-i-s-uchet-med-zueva10-организации-l';
import IISUchetMedZueva10ПодразделениеLForm from './forms/i-i-s-uchet-med-zueva10-подразделение-l';
import IISUchetMedZueva10ПриказМЗРLForm from './forms/i-i-s-uchet-med-zueva10-приказ-м-з-р-l';
import IISUchetMedZueva10СотрудникиLForm from './forms/i-i-s-uchet-med-zueva10-сотрудники-l';
import IISUchetMedZueva10СписокНаМедосмLForm from './forms/i-i-s-uchet-med-zueva10-список-на-медосм-l';
import IISUchetMedZueva10ДолжностиEForm from './forms/i-i-s-uchet-med-zueva10-должности-e';
import IISUchetMedZueva10ИндНапрМедосмEForm from './forms/i-i-s-uchet-med-zueva10-инд-напр-медосм-e';
import IISUchetMedZueva10КлассВредФакторEForm from './forms/i-i-s-uchet-med-zueva10-класс-вред-фактор-e';
import IISUchetMedZueva10МедУчреждениеEForm from './forms/i-i-s-uchet-med-zueva10-мед-учреждение-e';
import IISUchetMedZueva10ОрганизацииEForm from './forms/i-i-s-uchet-med-zueva10-организации-e';
import IISUchetMedZueva10ПодразделениеEForm from './forms/i-i-s-uchet-med-zueva10-подразделение-e';
import IISUchetMedZueva10ПриказМЗРEForm from './forms/i-i-s-uchet-med-zueva10-приказ-м-з-р-e';
import IISUchetMedZueva10СотрудникиEForm from './forms/i-i-s-uchet-med-zueva10-сотрудники-e';
import IISUchetMedZueva10СписокНаМедосмEForm from './forms/i-i-s-uchet-med-zueva10-список-на-медосм-e';
import IISUchetMedZueva10ВреднФактПроизModel from './models/i-i-s-uchet-med-zueva10-вредн-факт-произ';
import IISUchetMedZueva10ДолжностиModel from './models/i-i-s-uchet-med-zueva10-должности';
import IISUchetMedZueva10ИндНапрМедосмModel from './models/i-i-s-uchet-med-zueva10-инд-напр-медосм';
import IISUchetMedZueva10КлассВредФакторModel from './models/i-i-s-uchet-med-zueva10-класс-вред-фактор';
import IISUchetMedZueva10КонтингентСотрModel from './models/i-i-s-uchet-med-zueva10-контингент-сотр';
import IISUchetMedZueva10МедУчреждениеModel from './models/i-i-s-uchet-med-zueva10-мед-учреждение';
import IISUchetMedZueva10ОрганизацииModel from './models/i-i-s-uchet-med-zueva10-организации';
import IISUchetMedZueva10ПодразделениеModel from './models/i-i-s-uchet-med-zueva10-подразделение';
import IISUchetMedZueva10ПриказМЗРModel from './models/i-i-s-uchet-med-zueva10-приказ-м-з-р';
import IISUchetMedZueva10СотрудникиModel from './models/i-i-s-uchet-med-zueva10-сотрудники';
import IISUchetMedZueva10СписокНаМедосмModel from './models/i-i-s-uchet-med-zueva10-список-на-медосм';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-uchet-med-zueva10-вредн-факт-произ': IISUchetMedZueva10ВреднФактПроизModel,
    'i-i-s-uchet-med-zueva10-должности': IISUchetMedZueva10ДолжностиModel,
    'i-i-s-uchet-med-zueva10-инд-напр-медосм': IISUchetMedZueva10ИндНапрМедосмModel,
    'i-i-s-uchet-med-zueva10-класс-вред-фактор': IISUchetMedZueva10КлассВредФакторModel,
    'i-i-s-uchet-med-zueva10-контингент-сотр': IISUchetMedZueva10КонтингентСотрModel,
    'i-i-s-uchet-med-zueva10-мед-учреждение': IISUchetMedZueva10МедУчреждениеModel,
    'i-i-s-uchet-med-zueva10-организации': IISUchetMedZueva10ОрганизацииModel,
    'i-i-s-uchet-med-zueva10-подразделение': IISUchetMedZueva10ПодразделениеModel,
    'i-i-s-uchet-med-zueva10-приказ-м-з-р': IISUchetMedZueva10ПриказМЗРModel,
    'i-i-s-uchet-med-zueva10-сотрудники': IISUchetMedZueva10СотрудникиModel,
    'i-i-s-uchet-med-zueva10-список-на-медосм': IISUchetMedZueva10СписокНаМедосмModel
  },

  'application-name': 'Uchet med zueva10',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Uchet med zueva10',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Uchet med zueva10',
          title: 'Uchet med zueva10'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'индивидуальные-направления': {
          caption: 'Индивидуальные направления',
          title: 'Индивидуальные направления',
          'i-i-s-uchet-med-zueva10-инд-напр-медосм-l': {
            caption: 'Инд напр медосм',
            title: ''
          }
        },
        'формирование-списка-для-приказа': {
          caption: 'Формирование списка для приказа',
          title: 'Формирование списка для приказа',
          'i-i-s-uchet-med-zueva10-список-на-медосм-l': {
            caption: 'Список на медосм',
            title: ''
          }
        },
        'справочная-информация': {
          caption: 'Справочная информация',
          title: 'Справочная информация',
          'i-i-s-uchet-med-zueva10-приказ-м-з-р-l': {
            caption: 'Приказ МЗР',
            title: ''
          },
          'i-i-s-uchet-med-zueva10-класс-вред-фактор-l': {
            caption: 'Класс вред фактор',
            title: ''
          }
        },
        'организации-и-штат': {
          caption: 'Организации и штат',
          title: 'Организации и штат',
          'i-i-s-uchet-med-zueva10-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-uchet-med-zueva10-подразделение-l': {
            caption: 'Подразделение',
            title: ''
          },
          'i-i-s-uchet-med-zueva10-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-uchet-med-zueva10-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-uchet-med-zueva10-мед-учреждение-l': {
            caption: 'Мед учреждение',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-uchet-med-zueva10-должности-l': IISUchetMedZueva10ДолжностиLForm,
    'i-i-s-uchet-med-zueva10-инд-напр-медосм-l': IISUchetMedZueva10ИндНапрМедосмLForm,
    'i-i-s-uchet-med-zueva10-класс-вред-фактор-l': IISUchetMedZueva10КлассВредФакторLForm,
    'i-i-s-uchet-med-zueva10-мед-учреждение-l': IISUchetMedZueva10МедУчреждениеLForm,
    'i-i-s-uchet-med-zueva10-организации-l': IISUchetMedZueva10ОрганизацииLForm,
    'i-i-s-uchet-med-zueva10-подразделение-l': IISUchetMedZueva10ПодразделениеLForm,
    'i-i-s-uchet-med-zueva10-приказ-м-з-р-l': IISUchetMedZueva10ПриказМЗРLForm,
    'i-i-s-uchet-med-zueva10-сотрудники-l': IISUchetMedZueva10СотрудникиLForm,
    'i-i-s-uchet-med-zueva10-список-на-медосм-l': IISUchetMedZueva10СписокНаМедосмLForm,
    'i-i-s-uchet-med-zueva10-должности-e': IISUchetMedZueva10ДолжностиEForm,
    'i-i-s-uchet-med-zueva10-инд-напр-медосм-e': IISUchetMedZueva10ИндНапрМедосмEForm,
    'i-i-s-uchet-med-zueva10-класс-вред-фактор-e': IISUchetMedZueva10КлассВредФакторEForm,
    'i-i-s-uchet-med-zueva10-мед-учреждение-e': IISUchetMedZueva10МедУчреждениеEForm,
    'i-i-s-uchet-med-zueva10-организации-e': IISUchetMedZueva10ОрганизацииEForm,
    'i-i-s-uchet-med-zueva10-подразделение-e': IISUchetMedZueva10ПодразделениеEForm,
    'i-i-s-uchet-med-zueva10-приказ-м-з-р-e': IISUchetMedZueva10ПриказМЗРEForm,
    'i-i-s-uchet-med-zueva10-сотрудники-e': IISUchetMedZueva10СотрудникиEForm,
    'i-i-s-uchet-med-zueva10-список-на-медосм-e': IISUchetMedZueva10СписокНаМедосмEForm
  },

});

export default translations;
