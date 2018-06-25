import Vue from 'vue';
import Locales from './locale';

// 自动设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.lang || localLang || 'zh-CN';

Vue.config.lang = lang;

// 多语言配置
const locales = Locales;
Vue.locale('zh-CN', locales['zh-CN']);
Vue.locale('en-US', locales['en-US']);
Vue.locale('zh-TW', locales['zh-TW']);
