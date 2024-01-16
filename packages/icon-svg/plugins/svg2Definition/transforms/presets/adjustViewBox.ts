import { assignAttrsAtTag } from '..';
import { TransformFactory } from '../..';

import { includes } from 'ramda';

// viewbox 0 0 1024 1024
const SPECIAL_ICON_NAMES = {
  'top':  '0 0 1024 1024',
  'top-hover':  '0 0 1024 1024',
  'right2': '0 0 12 10',
  'search-no-data': '0 0 61 60',
  'arrow-left': '0 0 1024 1024',
  'arrow-right': '0 0 1024 1024',
  'one-to-one': '0 0 1024 1024',
  'rotate-left': '0 0 1024 1024',
  'rotate-right': '0 0 1024 1024',
  'minus': '0 0 1024 1024',
  'arrow-top': '0 0 16 16',
  'close1': '0 0 40 40',
  'idcard': '0 0 148 95',
  'require': '0 0 7 8',
  'folder-closed': '0 0 1024 1024',
  'foldersopening': '0 0 1024 1024',
  'opacityLoading': '0 0 59 60',
  'edit2': '0 0 1024 1024',
  'calendar': '0 0 1024 1024',
  'design': '0 0 16 16',
  'print': '0 0 16 16',
  'refresh': '0 0 18 18',
  'copy': '0 0 16 16',
};

const STANDARD_SPECIAL_ICON_NAMES = {
  'http-not-found': '0 0 120 120',
  'http-error': '0 0 120 120',
  'disconnected': '0 0 120 120',
  'please-waiting': '0 0 120 120',
  'not-authorized': '0 0 120 120',
  'no-result': '0 0 120 120',
  'no-data': '0 0 120 120',
  'http-not-found2': '0 0 150 150',
  'http-error2': '0 0 150 150',
  'disconnected2': '0 0 150 150',
  'not-authorized2': '0 0 150 150',
  'no-result2': '0 0 150 150',
  'no-data2': '0 0 150 150',
};

export const adjustViewBox: TransformFactory = assignAttrsAtTag(
  'svg',
  ({ name, standard }) => ({
    viewBox: (standard ? STANDARD_SPECIAL_ICON_NAMES[name] || '0 0 16 16' : SPECIAL_ICON_NAMES[name]) || '0 0 100 100'
  })
);
