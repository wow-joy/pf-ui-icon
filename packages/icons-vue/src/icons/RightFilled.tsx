// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RightFilledSvg from 'pf-icon-svg/es/asn/RightFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface RightFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const RightFilled: RightFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={RightFilledSvg}></PfIcon>;
};

RightFilled.displayName = 'RightFilled';
RightFilled.inheritAttrs = false;
export default RightFilled;