// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DoctorFemaleTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/DoctorFemaleTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DoctorFemaleTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DoctorFemaleTwotoneStandard: DoctorFemaleTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DoctorFemaleTwotoneStandardSvg}></PfIcon>;
};

DoctorFemaleTwotoneStandard.displayName = 'DoctorFemaleTwotoneStandard';
DoctorFemaleTwotoneStandard.inheritAttrs = false;
export default DoctorFemaleTwotoneStandard;