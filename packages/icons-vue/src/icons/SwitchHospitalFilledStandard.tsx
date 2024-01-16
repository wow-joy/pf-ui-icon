// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SwitchHospitalFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/SwitchHospitalFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SwitchHospitalFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SwitchHospitalFilledStandard: SwitchHospitalFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SwitchHospitalFilledStandardSvg}></PfIcon>;
};

SwitchHospitalFilledStandard.displayName = 'SwitchHospitalFilledStandard';
SwitchHospitalFilledStandard.inheritAttrs = false;
export default SwitchHospitalFilledStandard;