// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ZoomFilledSvg from '@pf-ui/pf-icon-svg/es/asn/ZoomFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ZoomFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ZoomFilled: ZoomFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ZoomFilledSvg}></PfIcon>;
};

ZoomFilled.displayName = 'ZoomFilled';
ZoomFilled.inheritAttrs = false;
export default ZoomFilled;