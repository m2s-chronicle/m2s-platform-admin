import 'dayjs/locale/ko';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import localeData from 'dayjs/plugin/localeData';

dayjs.locale('ko');
dayjs.extend(localeData);
dayjs.extend(duration);

export default dayjs;
