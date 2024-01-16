// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoCircleFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/InfoCircleFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface InfoCircleFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const InfoCircleFilledStandard: InfoCircleFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={InfoCircleFilledStandardSvg}></PfIcon>;
};

InfoCircleFilledStandard.displayName = 'InfoCircleFilledStandard';
InfoCircleFilledStandard.inheritAttrs = false;
export default InfoCircleFilledStandard;