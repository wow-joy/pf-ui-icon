// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreFilledSvg from '@pf-ui/pf-icon-svg/es/asn/MoreFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MoreFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MoreFilled: MoreFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MoreFilledSvg}></PfIcon>;
};

MoreFilled.displayName = 'MoreFilled';
MoreFilled.inheritAttrs = false;
export default MoreFilled;