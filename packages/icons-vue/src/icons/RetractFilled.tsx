// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RetractFilledSvg from 'pf-icon-svg/es/asn/RetractFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RetractFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RetractFilled: RetractFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RetractFilledSvg}></PfIcon>;
};

RetractFilled.displayName = 'RetractFilled';
RetractFilled.inheritAttrs = false;
export default RetractFilled;