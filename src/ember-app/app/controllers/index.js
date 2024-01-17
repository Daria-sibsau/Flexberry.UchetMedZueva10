import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.индивидуальные-направления.caption'),
          title: i18n.t('forms.application.sitemap.индивидуальные-направления.title'),
          children: [{
            link: 'i-i-s-uchet-med-zueva10-инд-напр-медосм-l',
            caption: i18n.t('forms.application.sitemap.индивидуальные-направления.i-i-s-uchet-med-zueva10-инд-напр-медосм-l.caption'),
            title: i18n.t('forms.application.sitemap.индивидуальные-направления.i-i-s-uchet-med-zueva10-инд-напр-медосм-l.title'),
            icon: 'book',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.формирование-списка-для-приказа.caption'),
          title: i18n.t('forms.application.sitemap.формирование-списка-для-приказа.title'),
          children: [{
            link: 'i-i-s-uchet-med-zueva10-список-на-медосм-l',
            caption: i18n.t('forms.application.sitemap.формирование-списка-для-приказа.i-i-s-uchet-med-zueva10-список-на-медосм-l.caption'),
            title: i18n.t('forms.application.sitemap.формирование-списка-для-приказа.i-i-s-uchet-med-zueva10-список-на-медосм-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочная-информация.caption'),
          title: i18n.t('forms.application.sitemap.справочная-информация.title'),
          children: [{
            link: 'i-i-s-uchet-med-zueva10-приказ-м-з-р-l',
            caption: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-uchet-med-zueva10-приказ-м-з-р-l.caption'),
            title: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-uchet-med-zueva10-приказ-м-з-р-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-uchet-med-zueva10-класс-вред-фактор-l',
            caption: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-uchet-med-zueva10-класс-вред-фактор-l.caption'),
            title: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-uchet-med-zueva10-класс-вред-фактор-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.организации-и-штат.caption'),
          title: i18n.t('forms.application.sitemap.организации-и-штат.title'),
          children: [{
            link: 'i-i-s-uchet-med-zueva10-должности-l',
            caption: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-uchet-med-zueva10-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-uchet-med-zueva10-должности-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-uchet-med-zueva10-подразделение-l',
            caption: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-uchet-med-zueva10-подразделение-l.caption'),
            title: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-uchet-med-zueva10-подразделение-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-uchet-med-zueva10-организации-l',
            caption: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-uchet-med-zueva10-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-uchet-med-zueva10-организации-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-uchet-med-zueva10-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-uchet-med-zueva10-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-uchet-med-zueva10-сотрудники-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-uchet-med-zueva10-мед-учреждение-l',
            caption: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-uchet-med-zueva10-мед-учреждение-l.caption'),
            title: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-uchet-med-zueva10-мед-учреждение-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})