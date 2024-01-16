// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DoctorMaleTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/DoctorMaleTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DoctorMaleTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DoctorMaleTwotoneStandard: DoctorMaleTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DoctorMaleTwotoneStandardSvg}></PfIcon>;
};

DoctorMaleTwotoneStandard.displayName = 'DoctorMaleTwotoneStandard';
DoctorMaleTwotoneStandard.inheritAttrs = false;
export default DoctorMaleTwotoneStandard;