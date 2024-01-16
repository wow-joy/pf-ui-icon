// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StaffUnknowTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/StaffUnknowTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface StaffUnknowTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const StaffUnknowTwotoneStandard: StaffUnknowTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={StaffUnknowTwotoneStandardSvg}></PfIcon>;
};

StaffUnknowTwotoneStandard.displayName = 'StaffUnknowTwotoneStandard';
StaffUnknowTwotoneStandard.inheritAttrs = false;
export default StaffUnknowTwotoneStandard;