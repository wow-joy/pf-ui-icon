// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PatientFemaleTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/PatientFemaleTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PatientFemaleTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PatientFemaleTwotoneStandard: PatientFemaleTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PatientFemaleTwotoneStandardSvg}></PfIcon>;
};

PatientFemaleTwotoneStandard.displayName = 'PatientFemaleTwotoneStandard';
PatientFemaleTwotoneStandard.inheritAttrs = false;
export default PatientFemaleTwotoneStandard;