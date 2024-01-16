// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StaffMaleTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/StaffMaleTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface StaffMaleTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const StaffMaleTwotoneStandard: StaffMaleTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={StaffMaleTwotoneStandardSvg}></PfIcon>;
};

StaffMaleTwotoneStandard.displayName = 'StaffMaleTwotoneStandard';
StaffMaleTwotoneStandard.inheritAttrs = false;
export default StaffMaleTwotoneStandard;