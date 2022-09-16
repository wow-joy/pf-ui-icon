// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StaffFilledSvg from 'pf-icon-svg/es/asn/StaffFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface StaffFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const StaffFilled: StaffFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={StaffFilledSvg}></PfIcon>;
};

StaffFilled.displayName = 'StaffFilled';
StaffFilled.inheritAttrs = false;
export default StaffFilled;