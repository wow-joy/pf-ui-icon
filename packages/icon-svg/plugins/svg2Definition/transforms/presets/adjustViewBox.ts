import { assignAttrsAtTag } from '..';
import { TransformFactory } from '../..';


export const adjustViewBox: TransformFactory = assignAttrsAtTag(
  'svg',
  ({ name }) => ({
    viewBox: '0 0 100 100'
  })
);
