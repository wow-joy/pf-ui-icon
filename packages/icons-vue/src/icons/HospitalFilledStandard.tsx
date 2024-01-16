// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HospitalFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/HospitalFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HospitalFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HospitalFilledStandard: HospitalFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HospitalFilledStandardSvg}></PfIcon>;
};

HospitalFilledStandard.displayName = 'HospitalFilledStandard';
HospitalFilledStandard.inheritAttrs = false;
export default HospitalFilledStandard;