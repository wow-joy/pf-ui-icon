import { assignAttrsAtTag } from '..';
import { TransformFactory } from '../..';

import { includes } from 'ramda';

// viewbox 0 0 1024 1024
const SPECIAL_ICON_NAMES = [
  'top',
  'top-hover'
];

export const adjustViewBox: TransformFactory = assignAttrsAtTag(
  'svg',
  ({ name }) => ({
    viewBox: includes(name, SPECIAL_ICON_NAMES)?  '0 0 1024 1024' : '0 0 100 100'
  })
);
