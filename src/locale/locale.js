import zhLocale from 'iview/src/locale/lang/zh-CN';
import enLocale from 'iview/src/locale/lang/en-US';
import zhTLocale from 'iview/src/locale/lang/zh-TW';
import ZH_CN from './languages/zh-CN';
import ZH_TW from './languages/zh-TW';
import EN_US from './languages/en-US';

const mergeZH = Object.assign(zhLocale, ZH_CN);
const mergeEN = Object.assign(enLocale, EN_US);
const mergeTW = Object.assign(zhTLocale, ZH_TW);

export default {
    'zh-CN': mergeZH,
    'zh-TW': mergeTW,
    'en-US': mergeEN
};
