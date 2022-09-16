// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HospitalFilledSvg from 'pf-icon-svg/es/asn/HospitalFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HospitalFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HospitalFilled: HospitalFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HospitalFilledSvg}></PfIcon>;
};

HospitalFilled.displayName = 'HospitalFilled';
HospitalFilled.inheritAttrs = false;
export default HospitalFilled;