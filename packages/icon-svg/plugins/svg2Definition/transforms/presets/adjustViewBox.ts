import { assignAttrsAtTag } from '..';
import { TransformFactory } from '../..';

import { includes } from 'ramda';

// viewbox 0 0 1024 1024
const SPECIAL_ICON_NAMES = {
  'top':  '0 0 1024 1024',
  'top-hover':  '0 0 1024 1024',
  'right2': '0 0 12 10',
  'search-no-data': '0 0 61 60'
};

export const adjustViewBox: TransformFactory = assignAttrsAtTag(
  'svg',
  ({ name }) => ({
    viewBox: SPECIAL_ICON_NAMES[name] || '0 0 100 100'
  })
);
