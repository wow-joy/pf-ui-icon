// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StaffFemaleTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/StaffFemaleTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface StaffFemaleTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const StaffFemaleTwotoneStandard: StaffFemaleTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={StaffFemaleTwotoneStandardSvg}></PfIcon>;
};

StaffFemaleTwotoneStandard.displayName = 'StaffFemaleTwotoneStandard';
StaffFemaleTwotoneStandard.inheritAttrs = false;
export default StaffFemaleTwotoneStandard;