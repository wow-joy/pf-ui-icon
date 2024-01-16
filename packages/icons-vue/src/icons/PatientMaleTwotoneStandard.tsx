// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PatientMaleTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/PatientMaleTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PatientMaleTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PatientMaleTwotoneStandard: PatientMaleTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PatientMaleTwotoneStandardSvg}></PfIcon>;
};

PatientMaleTwotoneStandard.displayName = 'PatientMaleTwotoneStandard';
PatientMaleTwotoneStandard.inheritAttrs = false;
export default PatientMaleTwotoneStandard;